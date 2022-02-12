import type { NextPage } from "next";
import Box from "@mui/material/Box";
import NavBar from "@components/nav/NavBar";

const PageLayout: NextPage = ({ children }) => {
  return (
    <Box width="100%" minHeight="100%">
      <NavBar />
      {children}
    </Box>
  );
};

export default PageLayout;
