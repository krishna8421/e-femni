import Box from "@mui/material/Box";
import { PostListBox } from "@interfaces/PostListBox.interface";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const BlogListBox = ({ shortTitle, shortDescription, slug }: PostListBox) => {
  const router = useRouter();
  return (
    <Box
      onClick={() => {
        router.push(`/blogs/${slug}`);
      }}
      sx={{
        bgcolor: "#F8F8F8",
        width: "21.5rem",
        padding: "1.5rem",
        borderRadius: "1rem",
        cursor: "pointer",
        marginTop: "1rem",
      }}
    >
      <Typography variant="h5" gutterBottom component="div">
        {shortTitle}
      </Typography>
      <Typography variant="body1" gutterBottom component="div" sx={{}}>
        {shortDescription}
      </Typography>
    </Box>
  );
};

export default BlogListBox;
