import React from "react";
import noiseImage from "./images/noise.png";
import burgerManImage from "./images/Businessman investing in bitcoin.png";
import burgerImage from "./images/Burger Shape.png";
import gradientBlur from "./images/gradient-blur.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/poppins";
import { Typography, Box, Button } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

function Banner() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "absolute",
          width: "1440px",
          height: "459px",
          left: "0px",
          background: "#2B0955",
        }}
      >
        <img src={noiseImage} alt="Noise" />
        <Box
          sx={{
            position: "absolute",
            width: "317px",
            height: "362.72px",
            left: "735px",
            top: "9px",
          }}
        >
          <img src={gradientBlur} alt="Gradient Blur" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "599px",
            height: "559px",
            left: "745px",
            top: "30px",
          }}
        >
          <img src={burgerManImage} alt="Burger Man" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "124px",
            height: "124px",
            left: "839px",
            top: "92px",
          }}
        >
          <img src={burgerImage} alt="Burger" />
        </Box>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            width: "577px",
            height: "176px",
            left: "243px",
            top: "62px",
            fontStyle: "normal",
            fontWeight: "800",
            fontSize: "64px",
            lineHeight: "88px",
            color: "#FFFFFF",
          }}
        >
          Um slogan chamativo aqui.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            position: "absolute",
            width: "454px",
            height: "81px",
            left: "243px",
            top: "249px",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "27px",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
          }}
        >
          Um texto sobre o seu produto ou serviço. Explique{" "}
          <Typography sx={{ color: "#FBC508", display: "inline" }}>
            porque ele é valioso
          </Typography>{" "}
          e direcione o usuário ao próximo objetivo.
        </Typography>

        <Box
          sx={{
            position: "absolute",
            width: "186px",
            height: "46px",
            left: "243px",
            top: "356px",
          }}
        >
          <Button
            sx={{
              position: "absolute",
              width: "186px",
              height: "46px",
              left: "0px",
              top: "0px",
              background: "#FBC508",
              borderRadius: "8px",
              color: "#FFFFFF",
              "&:hover": {
                background: "#FF0000",
              },
            }}
          >
            Eu quero!
          </Button>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "445px",
            top: "356px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: "202px ",
              height: "46px",
              borderRadius: "8px",
              borderColor: "#ffff",
              color: "#FFFFFF",
              "&:hover": {
                background: "#FF0000",
                borderColor: "#FF0000",
              },
            }}
          >
            Conhecermais
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Banner;
