import { Box, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Logo() {

  const { colorMode } = useColorMode();

  const navigate = useNavigate();
  const handleNavigation = (url: string) => {

    navigate(url);
  };

  return (
    <Box
      fontSize={{ base: "1.5rem", md: "2rem" }}
      fontWeight="bold"
      borderRadius="full"
      width={{ base: "50px", md: "70px" }}
      height={{ base: "50px", md: "70px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.2s",
      }}
      cursor= "pointer"
    >
      <Box
        bgGradient={
          colorMode === "light"
            ? "linear(to-r, #2196F3, #FF5722)"
            : "linear(to-r, #FF5722, #2196F3)"
        }
        bgClip="text"
        onClick={() => handleNavigation("/")}
      >
        DT
      </Box>
    </Box>
  );
}
