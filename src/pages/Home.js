import { Box, Typography, Button } from "@mui/material";
import { textStyle } from "../components/Navbar";
import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { ReactComponent as Log } from "../assets/images/play.svg";
import { ReactComponent as Check } from "../assets/images/Checkbox.svg";

import { FreeTrail } from "../components/FreeTrail";
import { BigImage } from "../components/BigImage";
import { Trust } from "../components/Trust";
import { BeniFit } from "../components/Benfit";
import { SpentTime } from "../components/SpentTime";
import { Integration } from "../components/Integration";
import { Stories } from "../components/Stories";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <Box marginBottom={"100px"}>
      <Box
        paddingTop={"224px"}
        width={"1280px"}
        margin={"auto"}
        borderRight={"1px solid #34353b"}
        borderLeft={"1px solid #34353b"}
        paddingLeft={"40px"}
        paddingRight={"40px"}
        paddingBottom={"80px"}
      >
        <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"70px"}
          fontWeight={300}
          textAlign={"center"}
          lineHeight={"120%"}
          marginBottom={"32px"}
        >
          Most Accurate Portfolio Look-through: Know Your Exact Asset Exposure
        </Typography>

        <Typography
          style={{
            ...textStyle,
            color: "#999BA3",
            textAlign: "center",
            margin: "auto",
          }}
          width={"90%"}
          sx={{marginTop:'32px'}}
          
        >
          Single source of truth for your portfolio data, auto-updated from
          General Partner portals, emails and decks. Enriched with Synaptic’s
          Proprietary Database of 1.5 million Companies
        </Typography>

        <Box
          display={"flex"}
          alignContent={"center"}
          justifyContent={"center"}
          marginTop={"70px"}
        >
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              height: "40px",
              marginLeft: "30px",
              textTransform: "none",
            }}
            variant="contained"
            paddingRight="32px"
            paddingLeft="32px"
            paddingTop="14px"
            paddingBottom="14px"
            height="52px"
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              fontWeight={570}
              
            >
              <Typography fontSize={"18px"} sx={{...textStyle,color:"black"}}  fontWeight={570}>
                {" "}
                Book a Demo{" "}
              </Typography>
              <Arrow style={{ marginLeft: "10px" }} />
            </Box>
          </Button>
          <Button
            sx={{
              color: "white",
              height: "40px",
              marginLeft: "30px",
              borderColor: "#5F616D",
              textTransform: "none",
              zIndex:0
            }}
            variant="outlined"
            paddingRight="24px"
            paddingLeft="24px"
            paddingTop="8px"
            paddingBottom="8px"
            
          >
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
              <Log style={{ marginRight: "10px" }} />
              <Typography ontSize={"18px"} fontWeight={"570"}>
                {" "}
                See a short video
              </Typography>
            </Box>
          </Button>
        </Box>
      </Box>

      <FreeTrail />
      <BigImage />
      <Trust />

     

   <BeniFit/>
   <SpentTime/>
   <Integration />
   <Stories/>
   <Footer/>
    </Box>
  );
};
