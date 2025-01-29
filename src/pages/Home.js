import { Box, Typography, Button, Modal, TextField } from "@mui/material";
import { textStyle } from "../components/Navbar";
import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { ReactComponent as Log } from "../assets/images/play.svg";
import { ReactComponent as Asterik } from "../assets/images/as.svg";

import { FreeTrail } from "../components/FreeTrail";
import { BigImage } from "../components/BigImage";
import { Trust } from "../components/Trust";
import { BeniFit } from "../components/Benfit";
import { SpentTime } from "../components/SpentTime";
import { Integration } from "../components/Integration";
import { Stories } from "../components/Stories";
import { Footer } from "../components/Footer";
import { useState } from "react";
import ScheduleDemoModal from "../components/BookDemoModal";

const CustomInput = () => {
  return (
    <input
      variant="outlined"
      placeholder="Enter text"
      sx={{
        width: "400px",
        height: "44px",
        padding: "var(--spacing-lg) var(--spacing-md)",
        gap: "var(--spacing-md)",
        borderRadius: "var(--radius-default)",
        border: "1px solid transparent", // Adjust as needed (e.g., solid or dashed)
        opacity: 0,
      }}
      InputProps={{
        sx: {
          height: "100%",
          padding: 0, // Remove default padding for better control
        },
      }}
    />
  );
};

export const Home = () => {
  const [showBookModal, setShowBookModal] = useState(true);
  const handleClose = () => {
    setShowBookModal(false);
  };
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

        {/* <Modal
          open={showBookModal}
          onClose={handleClose}
          
          sx={{
            backgroundColor: "#1C1D21",
            margin: "auto",
            width: {
              xs: "350px", // Extra small devices (mobile)
              sm: "800px", // Small devices (tablets)
              md: "800px", // Medium devices (laptops)
              lg: "800px", // Large devices (desktops)
              xl: "800px",
            },
            height: {
              xs: "607px", // Extra small devices (mobile)
              sm: "595px", // Small devices (tablets)
              md: "595px", // Medium devices (laptops)
              lg: "595px", // Large devices (desktops)
              xl: "595px",
            },
            marginTop:"72px"
          }}
        >
          <>
            <Typography
              sx={{
                border: "1px solid red",
                textAlign: "center",
                fontSize: {
                  xs: "32px", // Extra small devices (mobile)
                  sm: "36px", // Small devices (tablets)
                  md: "36px", // Medium devices (laptops)
                  lg: "36px", // Large devices (desktops)
                  xl: "36px",
                },
                fontWeight: {
                  xs: "32", // Extra small devices (mobile)
                  sm: "430", // Small devices (tablets)
                  md: "430", // Medium devices (laptops)
                  lg: "430", // Large devices (desktops)
                  xl: "430",
                },
                paddingTop: {
                  xs: "16px", // Extra small devices (mobile)
                  sm: "40px", // Small devices (tablets)
                  md: "40px", // Medium devices (laptops)
                  lg: "40px", // Large devices (desktops)
                  xl: "40px",
                },
              }}
            >
              Schedule a personalized demo
            </Typography>

            <Box
              sx={{
                
                margin: "auto",
                width: {
                  xs: "400px", // Extra small devices (mobile)
                  sm: "400px", // Small devices (tablets)
                  md: "400px", // Medium devices (laptops)
                  lg: "400px", // Large devices (desktops)
                  xl: "400px",
                },
                height: {
                  xs: "444px", // Extra small devices (mobile)
                  sm: "444px", // Small devices (tablets)
                  md: "444px", // Medium devices (laptops)
                  lg: "444px", // Large devices (desktops)
                  xl: "444px",
                },
              }}
            >
              <p
                style={{
                  fontFamily: "Matter-TRIAL",
                  fontSize: "var(--Fontsizebody-interactive)",
                  fontWeight: 430,
                  lineHeight: "var(--Lineheightbody-interactive)",
                  letterSpacing: "-0.01em",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#FDFDFC",
                  
                  marginBottom: "0px",
                }}
              >
                Full Name <sup style={{ color: "#3F8D3C" }}>*</sup>
              </p>

              <input
                placeholder="Enter full Name"
                style={{
                  width: "400px",
                  height: "44px",
                  padding: "var(--spacing-lg) var(--spacing-md)",
                  gap: "var(--spacing-md)",
                  borderRadius: "var(--radius-default)",
                  border: "1px solid #5F616D",
                  marginTop: "6px",
                  paddingTop: "0px",
                  backgroundColor: "transparent", // Adjust as needed (e.g., solid or dashed)
                }}
              ></input>
               <p
                style={{
                  fontFamily: "Matter-TRIAL",
                  fontSize: "var(--Fontsizebody-interactive)",
                  fontWeight: 430,
                  lineHeight: "var(--Lineheightbody-interactive)",
                  letterSpacing: "-0.01em",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#FDFDFC",
                  
                  marginBottom: "0px",
                  marginTop:'32px'
                }}
              >
              Work Email <sup style={{ color: "#3F8D3C" }}>*</sup>
              </p>

              <input
                placeholder="Enter work email"
                style={{
                  width: "400px",
                  height: "44px",
                  padding: "var(--spacing-lg) var(--spacing-md)",
                  gap: "var(--spacing-md)",
                  borderRadius: "var(--radius-default)",
                  border: "1px solid #5F616D",
                  marginTop: "6px",
                  paddingTop: "0px",
                  backgroundColor: "transparent", // Adjust as needed (e.g., solid or dashed)
                }}
              ></input>
               <p
                style={{
                  fontFamily: "Matter-TRIAL",
                  fontSize: "var(--Fontsizebody-interactive)",
                  fontWeight: 430,
                  lineHeight: "var(--Lineheightbody-interactive)",
                  letterSpacing: "-0.01em",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#FDFDFC",
                  
                  marginBottom: "0px",
                  marginTop:'32px'
                }}
              >
              Organization <sup style={{ color: "#3F8D3C" }}>*</sup>
              </p>

              <input
                placeholder="Enter organisation name"
                style={{
                  width: "400px",
                  height: "44px",
                  padding: "var(--spacing-lg) var(--spacing-md)",
                  gap: "var(--spacing-md)",
                  borderRadius: "var(--radius-default)",
                  border: "1px solid #5F616D",
                  marginTop: "6px",
                  paddingTop: "0px",
                  backgroundColor: "transparent", // Adjust as needed (e.g., solid or dashed)
                }}
              ></input>
               <p
                style={{
                  fontFamily: "Matter-TRIAL",
                  fontSize: "var(--Fontsizebody-interactive)",
                  fontWeight: 430,
                  lineHeight: "var(--Lineheightbody-interactive)",
                  letterSpacing: "-0.01em",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#FDFDFC",
                  
                  marginBottom: "0px",
                  marginTop:'32px'
                }}
              >
              Role <sup style={{ color: "#3F8D3C" }}>*</sup>
              </p>

              <input
                placeholder="Enter job role"
                style={{
                  width: "400px",
                  height: "44px",
                  padding: "var(--spacing-lg) var(--spacing-md)",
                  gap: "var(--spacing-md)",
                  borderRadius: "var(--radius-default)",
                  border: "1px solid #5F616D",
                  marginTop: "6px",
                  paddingTop: "0px",
                  backgroundColor: "transparent",
                  borderRadius:'3px' // Adjust as needed (e.g., solid or dashed)
                }}
              ></input>

            </Box>
          </>
        </Modal> */}
<ScheduleDemoModal  open={showBookModal} onClose={handleClose}/>
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
            onClick={() => setShowBookModal(true)}
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
