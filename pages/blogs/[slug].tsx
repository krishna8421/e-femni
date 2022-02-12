import { useRouter } from "next/router";
import { posts } from "@posts/index";
import Box from "@mui/material/Box";
import PageLayout from "@components/PageLayout/PageLayout";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import BlogListBox from "@components/blogs/BlogListBox";
import { IoIosArrowBack } from "react-icons/io";

const Posts = () => {
  const router = useRouter();
  const { slug } = router.query;
  const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const toBase64 = (str: string) => {
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  };

  return (
    <PageLayout>
      <Box
        ml={5}
        mt={3}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          router.back();
        }}
      >
        <IoIosArrowBack size={20} /> Back
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          width: "95%",
          marginTop: "1rem",
          marginBottom: "4rem",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            flex: 5,
          }}
        >
          {posts.map((post) => {
            return (
              <Box key={post.meta.id}>
                {post.meta.slug === slug && (
                  <Box
                    sx={{
                      // width: "90%",
                      bgcolor: "#FCFCFC",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      borderRadius: "1rem",
                      marginLeft: "1rem",
                      padding: "1rem",
                      paddingTop: "2rem",
                      paddingBottom: "2rem",
                    }}
                  >
                    {post.imgUrl && (
                      <Box
                        sx={{
                          width: "80%",
                          margin: "auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={post.imgUrl}
                          alt={post.title}
                          width={500}
                          height={300}
                          placeholder="blur"
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(500, 300)
                          )}`}
                        />
                      </Box>
                    )}
                    <Typography
                      variant="h3"
                      component="h1"
                      gutterBottom
                      sx={{
                        marginTop: "2.5rem",
                        marginBottom: "2.5rem",
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "2.5rem",
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      gutterBottom
                      sx={{
                        fontFamily: "Poppins",
                        width: "90%",
                        margin: "auto",
                        letterSpacing: "2px",
                        whiteSpace: "pre-line",
                        wordSpacing: "10px",
                        lineHeight: "1.8rem",
                      }}
                    >
                      {post.content}
                    </Typography>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "300",
              fontSize: "2.5rem",
            }}
          >
            Also Read
          </Typography>
          {posts.map((post) => post.meta.slug !== slug && (
            <BlogListBox
              key={post.meta.id}
              shortTitle={post.meta.shortTitle}
              shortDescription={post.meta.shortDescription}
              slug={post.meta.slug}
            />
          ))}
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Posts;
