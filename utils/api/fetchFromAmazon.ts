import axios from "axios";
import cheerio from "cheerio";

type Item = {
  imgUrl: string;
  productName: string;
  price: string;
};

export const fetchFromAmazon = async (searchTerm: string) => {
  try {
    const url = `https://www.amazon.in/s?k=${encodeURIComponent(searchTerm)}`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const results: Item[] = [];
    $(`div[data-component-type="s-search-result"]`).each((_, el) => {
      const item: Item = {
        imgUrl: "",
        productName: "",
        price: "",
      };
      // Get img URL
      $(el)
        .find(".s-image")
        .each((_, el) => {
          const imgUrlSet = $(el).attr("srcset");
          const imgUrl = imgUrlSet?.split(" ")[0];
          if (!imgUrl) {
            return "Can not find Img URL";
          }
          item["imgUrl"] = imgUrl;
        });
      // Get Name
      $(el)
        .find(".s-title-instructions-style")
        .find(`span[class="a-size-base-plus a-color-base a-text-normal"]`)
        .each((_, el) => {
          const productName = $(el).text();
          if (!productName) {
            return "Can not find Product Name";
          }
          item["productName"] = productName;
        });
      // Get Price
      $(el)
        .find(`span[class="a-price-whole"]`)
        .each((_, el) => {
          const price = $(el).text();
          if (!price) {
            return "Can not find Price";
          }
          item["price"] = price;
        });
      results.push(item);
    });
    return results;
  } catch (e: any) {
    if(e.response.statusText=== "Service Unavailable"){
      return {
        status: e.response.status,
        error: `${e.response.statusText}! Please try again After Few Minutes`
      }
    }
    return {
      status: e.response.status,
      error: e.response.statusText
    }
  }
};
