import NavBar from "@components/nav/NavBar";
import Box from "@mui/material/Box";

const BlogsLayout = ({ children }: any) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <NavBar />
      {children}
    </Box>
  );
};

export default BlogsLayout;
