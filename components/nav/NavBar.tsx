import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <Box
      height="5rem"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box width="250px" ml={3}>
        <Link href="/">
          <a>
            <Image alt="logo" src="/e-Femni.png" width="170" height="50" priority/>
          </a>
        </Link>
      </Box>
      <Box mr={2}>
        <Link href="/donate">
          <a style={anchorStyles}>Donate</a>
        </Link>
        <Link href="/blogs">
          <a style={anchorStyles}>Blogs</a>
        </Link>
        <Link href="/cart">
          <a style={anchorStyles}>
            <FiShoppingCart />
          </a>
        </Link>
        <a style={anchorStyles}>
          <AiOutlineLogout
            size={20}
            color="red"
            cursor="pointer"
            onClick={() => {
              Cookies.remove("jwt-token");
              router.push("/");
            }}
          />
        </a>
      </Box>
    </Box>
  );
};

const anchorStyles = {
  textDecoration: "none",
  color: "#313131",
  fontSize: "1.1rem",
  fontWeight: "300",
  fontFamily: "Inter",
  marginLeft: "4rem",
};

export default NavBar;
