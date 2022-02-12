import type { NextPage } from "next";
import Box from "@mui/material/Box";
import PageLayout from "@components/PageLayout/PageLayout";
import Typography from "@mui/material/Typography";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          E-Femni
        </Typography>
      </Box>
    </PageLayout>
  );
};

export default Home;
