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
        paddingBottom={"80px"}
        sx={{
          boxSizing: "border-box",
          paddingTop: { xs: "76px", lg: "120px", md: "120px" },
          width: { xs: "356px", lg: "1280px", md: "1280px" },
          margin: { xs: "auto", lg: "auto", md: "auto" },
          paddingBottom: { xs: "40px", lg: "80px", md: "80px" },
        }}
      >
        <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"70px"}
          fontWeight={300}
          textAlign={"center"}
          lineHeight={"120%"}
          marginBottom={"32px"}
          sx={{
            fontSize: { xs: "32px", lg: "70px", md: "70px" },
          }}
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
          sx={{ marginTop: "32px" }}
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
          alignItems={"center"}
          sx={{
            flexDirection: { xs: "column", md: "row", lg: "row", sm: "row" },
          }}
        >
          <Button
            sx={{
              backgroundColor: "#316D2F",
              color: "black",
              height: "40px",
              marginLeft: {
                xs: "0px",
                md: "30px",
                lg: "30px",
                sm: "30px",
              },
              textTransform: "none",
              width: {
                xs: "326px",
                md: "200px",
                lg: "200px",
                sm: "200px",
              },
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
              <Typography
                fontSize={"18px"}
                sx={{ ...textStyle, color: "white" }}
                fontWeight={570}
              >
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
              zIndex: 0,
              marginLeft: {
                xs: "0px",
                md: "30px",
                lg: "30px",
                sm: "30px",
              },
              marginTop: {
                xs: "16px",
                md: "0px",
                lg: "0px",
                sm: "0px",
              },
              width: {
                xs: "326px",
              },
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

      <BeniFit />
      <SpentTime />
      <Integration />
      <Stories />
      <Footer />
    </Box>
  );
};
