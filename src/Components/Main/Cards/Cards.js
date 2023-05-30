import React from "react";
import { Typography, Box, Card, CardContent, Link } from "@mui/material";
import target from "./images/Target.png";
import creditCard from "./images/Credit Card.png";
import ethereumCoin from "./images/Ethereum Coin.png";
import vector from "./images/Vector.png";

function Cards() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "959px",
        height: "525px",
        left: "238px",
        top: "655px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          position: "absolute",
          width: "487px",
          height: "36px",
          left: "238px",
          top: "0px",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "36px",
          color: "#2B0955",
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}
      >
        Um subtítulo para quem rolou até aqui!
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          width: "649px",
          height: "48px",
          left: "157px",
          top: "68px",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          textAlign: "center",
          letterSpacing: "-0.02em",
          color: "#363636",
        }}
      >
        Aproveite esta seção para destacar os benefícios do seu produto ou
        serviço. Palavras-chave ajudam no SEO.
      </Typography>
      {/* 1 card */}
      <Box
        sx={{
          position: "absolute",
          width: "287px",
          height: "370px",
          left: "0px",
          top: "155px",
        }}
      >
        <Card
          sx={{
            position: "absolute",
            width: "287px",
            height: "306px",
            left: "0px",
            top: "64px",
            background: "#FFFFFF",
            boxShadow: "0px 9px 27px rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
          }}
        ></Card>
        <Typography
          sx={{
            position: "absolute",
            width: "65px",
            height: "27px",
            left: "31px",
            top: "187px",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "27px",
            color: "#000000",
          }}
        >
          Rápido
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "221px",
            height: "106px",
            left: "31px",
            top: "230px",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#363636",
          }}
        >
          Aproveite esta seção para destacar os benefícios do seu produto ou
          serviço.
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: "171px",
            height: "178px",
            left: "52px",
            top: "0px",
          }}
        >
          <img src={target} alt="Target" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "25px",
            height: "25px",
            left: "238px",
            top: "320px",
          }}
        >
          <Link href="#" underline="none">
            <img src={vector} alt="Vector" />
          </Link>
        </Box>
      </Box>
      {/* 2 card */}
      <Box
        sx={{
          position: "absolute",
          width: "287px",
          height: "428px",
          left: "336px",
          top: "97px",
        }}
      >
        <Card
          sx={{
            position: "absolute",
            width: "287px",
            height: "306px",
            left: "0px",
            top: "122px",
            background: "#FFFFFF",
            boxShadow: "0px 9px 27px rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
          }}
        ></Card>
        <Typography
          sx={{
            position: "absolute",
            width: "106px",
            height: "27px",
            left: "31px",
            top: "245px",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "27px",
            color: "#000000",
          }}
        >
          Do seu jeito
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "221px",
            height: "106px",
            left: "31px",
            top: "288px",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#363636",
          }}
        >
          Aproveite esta seção para destacar os benefícios do seu produto ou
          serviço.
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: "211px",
            height: "273px",
            left: "45px",
            top: "0px",
          }}
        >
          <img src={ethereumCoin} alt="Ethereum Coin" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "25px",
            height: "25px",
            left: "238px",
            top: "378px",
          }}
        >
          <Link href="#" underline="none">
            <img src={vector} alt="Vector" />
          </Link>
        </Box>
      </Box>
      {/* 3 card */}
      <Box
        sx={{
          position: "absolute",
          width: "287px",
          height: "387px",
          left: "672px",
          top: "138px",
        }}
      >
        <Card
          sx={{
            position: "absolute",
            width: "287px",
            height: "306px",
            left: "0px",
            top: "81px",
            background: "#FFFFFF",
            boxShadow: "0px 9px 27px rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
          }}
        ></Card>
        <Typography
          sx={{
            position: "absolute",
            width: "65px",
            height: "27px",
            left: "31px",
            top: "187px",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "27px",
            color: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          Como você queria
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "221px",
            height: "106px",
            left: "31px",
            top: "230px",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#363636",
          }}
        >
          Aproveite esta seção para destacar os benefícios do seu produto ou
          serviço.
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: "209px",
            height: "195px",
            left: "47px",
            top: "0px",
          }}
        >
          <img src={creditCard} alt="Credit Card" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "25px",
            height: "25px",
            left: "238px",
            top: "337px",
          }}
        >
          <Link href="#" underline="none">
            <img src={vector} alt="Vector" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Cards;
