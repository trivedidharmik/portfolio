import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MadeWith from "./Components/MadeWith";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout() {
  return (
    <Box h="100vh" w="100%">
      <NavBar />
      <Outlet />
      <MadeWith />
      <Analytics />
    </Box>
  );
}
