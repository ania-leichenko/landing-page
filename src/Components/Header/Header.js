import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Box, Typography, Toolbar, Link } from "@mui/material";
import "@fontsource/poppins";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "./Logo";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

function Header() {
  const preventDefault = (event) => event.preventDefault();
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="" elevation={0}>
        <Toolbar>
          <Logo />
          <Box
            sx={{
              position: "absolute",
              width: "710px",
              height: "24px",
              left: "608px",
              top: "23px",
            }}
            onClick={preventDefault}
          >
            <Link href="#" underline="none">
              <Typography
                sx={{
                  position: "absolute",
                  width: "104px",
                  height: "21px",
                  left: "0px",
                  top: "2px",
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#000000",
                  "&:hover": {
                    color: "#FF0000",
                  },
                }}
              >
                o que fazemos
              </Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography
                sx={{
                  position: "absolute",
                  width: "134px",
                  height: "21px",
                  left: "207px",
                  top: "2px",
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#000000",
                  "&:hover": {
                    color: "#FF0000",
                  },
                }}
              >
                como te ajudamos
              </Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography
                sx={{
                  position: "absolute",
                  width: "91px",
                  height: "21px",
                  left: "448px",
                  top: "2px",
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#000000",
                  "&:hover": {
                    color: "#FF0000",
                  },
                }}
              >
                fale conosco
              </Typography>
            </Link>
            <Box
              sx={{
                position: "absolute",
                width: "20px",
                height: "20px",
                left: "653px",
                top: "0px",
              }}
            >
              <Link
                href="#"
                underline="none"
                sx={{
                  color: "#000000",
                  "&:hover": {
                    color: "#FF0000",
                  },
                }}
              >
                <BsInstagram
                  sx={{
                    position: "absolute",
                    left: "6.24%",
                    right: "6.22%",
                    top: "6.22%",
                    bottom: "6.25%",
                    color: "#FF0000",
                  }}
                />
              </Link>
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "18px",
                height: "18px",
                left: "692px",
                top: "1px",
              }}
            >
              <Link
                href="#"
                underline="none"
                sx={{
                  color: "#000000",
                  "&:hover": {
                    color: "#FF0000",
                  },
                }}
              >
                <FaFacebookF
                  sx={{
                    position: "absolute",
                    left: "23.22%",
                    right: "23.22%",
                    top: "0%",
                    bottom: "0%",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
