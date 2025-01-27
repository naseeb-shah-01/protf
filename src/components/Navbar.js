import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as ColorMode } from "../assets/images/Color_Mode.svg";
import { ReactComponent as FrameIcon } from "../assets/images/PIQ Logo.svg";
import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { ReactComponent as Log } from "../assets/images/arroww.svg";
import { useEffect, useState } from "react";

export const textStyle = {
  color: "var(--Text-on-color, #FFF)",
  textAlign: "center",
  fontVariantNumeric: "lining-nums tabular-nums",
  fontFeatureSettings: "'liga' off, 'calt' off",
  fontFamily: "Matter-TRIAL, sans-serif",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 430,
  lineHeight: "24px",
  fontVariationSettings: '"wght" 430, "ital" 0, "XHGT" 0, "MONO" 60',
};
export const Navbar = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [widthObject, setWidthObject] = useState({
    l: 175,
    s: 89,
    c: 98,
    r: 92,
    t: 44,
    a: 82,
  });
  useEffect(() => {
    if (deviceWidth < 1280) {
    }
  }, [deviceWidth]);

  console.log(deviceWidth, "device Width");
  const navContent = ["Solutions", "Customers", "Resources", "About Us"];

  const [content, setContent] = useState([
    {
      t: "Solutions",
      ml: 153,
      mr: 0,
      w: 89,
    },
    {
      t: "Customers",
      ml: 64,
      mr: 0,
      w: 98,
    },
    {
      t: "Resources",
      ml: 64,
      mr: 0,
      w: 92,
    },
    {
      t: "Teams",
      ml: 64,
      mr: 0,
      w: 44,
    },
    {
      t: "About Us",
      ml: 64,
      mr: 153,
      w: 92,
    },
  ]);
  const [bData, setBdata] = useState({
    b: {
      w: 131,
      mr: 12,
      ml: 50,
    },
    l: {
      w: 87,
      mr: 12,
      ml: 12,
    },
  });
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#27282D",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000000,
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        minHeight={"72px"}
        alignItems={"center"}
        margin={"auto"}
        flexWrap={"wrap"}
        width={"1440px"}
        sx={{
          width:{
            xs:"358px",
            md:"1280px",lg:"1440px",xl:"1440px"

          }
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <FrameIcon
            style={{
              width: `${widthObject.l}px`,
              // Change to column on small screens

              // Adjust margin
            }}
          ></FrameIcon>
          {/* {content.map((el) => (
            <Typography
            visibility={"hidden"}
              style={textStyle}
              fontFamily={"Matter-TRIAL"}
              fontWeight={430}
              fontSize={18}
              width={el.w + "px"}
              ml={el.ml + "px"}
              mr={el.mr + "px"} 
            >
              {el.t} */}
          {/* </Typography>
          ))} */}

          {/* </Box> */}
          {/* <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            sx={{
              "@media (max-width: 600px)": {
                flexDirection: "column", // Change to column on small screens
                marginLeft: "5%", // Adjust margin
              },
            }}
          > */}

          <Button
            sx={{
              backgroundColor: "#316D2F",
              color: "black",
              height: "40px",
              textTransform: "none",
              ml: { lg: "1000px", md: "853px",xl:"900px" ,lg:"1000px"},
              mr: "12px", // Add margin-left here
              display: { xs: "none", lg: "block", md: "block", sm: "block" },
            }}
            variant="contained"
          >
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
              <Typography fontSize={"13px"} color="white"> Book a Demo </Typography>
              <Arrow style={{ marginLeft: "10px" }} />
            </Box>
          </Button>
          <Button
            sx={{
              color: "white",
              height: "40px",

              borderColor: "#5F616D",
              textTransform: "none",
              display: { xs: "none", lg: "block", md: "block", sm: "block" },
            }}
            variant="outlined"
            w={bData.l.w + "px"}
          >
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
              <Typography fontSize={"13px"}> Log In </Typography>
              <Log style={{ marginLeft: "10px" }} />
            </Box>
          </Button>
        </Box>
      </Box>
    </div>
  );
};
