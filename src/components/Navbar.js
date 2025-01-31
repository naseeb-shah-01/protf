import { Box, Button, Typography } from "@mui/material";

import { ReactComponent as FrameIcon } from "../assets/images/PIQ Logo.svg";
import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { ReactComponent as Log } from "../assets/images/arroww.svg";
import { useEffect, useState } from "react";
import ScheduleDemoModal from "./BookDemoModal";
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
  const [showBookModal, setShowBookModal] = useState(false);
  const handleClose = () => {
    setShowBookModal(false);
  };

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
          width: {
            xs: "358px", // For extra-small screens (mobile)
            sm: "1024px", // For small screens
            md: "1280px", // For medium screens
            lg: "1440px", // For large screens
            xl: "1440px", // For extra-large screens
          },
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          width={"100%"}
          justifyItems={"center"}
          marginRight={"20px"}
          marginLeft={"20px"}
        >
          <FrameIcon
            style={{
              width: `181px`,

              // Change to column on small screens

              // Adjust margin
            }}
          ></FrameIcon>

          <Box  display={'flex'}>
            <Button
              sx={{
                backgroundColor: "#316D2F",
                color: "black",
                height: "40px",
                textTransform: "none",

                mr: "12px", // Add margin-left here
                display: { xs: "none", lg: "block", md: "block", sm: "none" },
              }}
              fontFamily={"Matter-TRIAL"}
              variant="contained"
              onClick={() => setShowBookModal(true)}
            >
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}
              
              
              >
                <Typography fontSize={"13px"} color="white">
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

                borderColor: "#5F616D",
                textTransform: "none",
                display: { xs: "none", lg: "block", md: "block", sm: "none" },
              }}
              variant="outlined"
            >
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Typography fontSize={"13px"} fontFamily={"Matter-TRIAL"}>
                  {" "}
                  Log In{" "}
                </Typography>
                <Log style={{ marginLeft: "10px" }} />
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>

      <ScheduleDemoModal open={showBookModal} onClose={handleClose} />
    </div>
  );
};
