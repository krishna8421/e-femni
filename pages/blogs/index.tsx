import PageLayout from "@components/PageLayout/PageLayout";
import type { NextPage } from "next";
import Box from "@mui/material/Box";
import { posts } from "@posts/index";
import Typography from "@mui/material/Typography";
import BlogListBox from "@components/blogs/BlogListBox";

const Blogs: NextPage = () => {
  return (
    <PageLayout>
      <Box sx={{ width: "85%", margin: "auto" }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            marginTop: "3rem",
            fontFamily: "Inter",
            fontWeight: "300",
            fontSize: "3.5rem",
          }}
        >
          Blogs
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "5rem",
          }}
        >
          {posts.map((post) => (
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

export default Blogs;
