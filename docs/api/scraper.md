# Scraper

Scrape Amazon products from the 1st page of a given category.

### Endpoint

http://localhost:3000/api/scraper

### Request

> Type: GET

### Parameters

```
?s=<search-term>
```

### Example

```
curl -X GET http://localhost:3000/api/scraper?s=iphone+12
```

### Response

Array of products

```json
[
  {
    "imgUrl": "",
    "productName": "",
    "price": ""
  }
  ...
]
```

### Error Handling

```json
{
  "status": "StatusCode",
  "error": "Error message"
}
```
