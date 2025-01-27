import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { ReactComponent as Log } from "../assets/images/play.svg";
import { ReactComponent as Check } from "../assets/images/Checkbox.svg";
import { Box, Typography, Button, Modal } from "@mui/material";
import { ReactComponent as Stash } from "../assets/images/videoimage.svg";
import React, { useState } from "react";

export const BigImage = () => {
  const [video, setVideo] = useState(false);

  return (
    <Box
      width={"1280px"}
      margin={"auto"}
      borderRight={"1px solid #34353b"}
      borderLeft={"1px solid #34353b"}
    
      paddingTop={"55px"}
      paddingBottom={"55px"}
      alignContent={"center"}
      sx={{
        boxSizing: "border-box",
        paddingX: { xs: "16px", lg: "40px", md: "40px", sm: "40px" },
        width: { xs: "356px", lg: "1280px", md: "1280px", sm: "1280px" },
        paddingTop: { xs: "24px", lg: "55px", md: "55px", sm: "55px" },
        paddingBottom: { xs: "24px", lg: "35px", md: "35px", sm: "35px" },
      }}
    >
      <Stash
        onClick={() => setVideo((p) => !p)}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
      <Modal
        open={video}
        onClose={() => setVideo(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{
          width: "1280px",
          margin: "auto",
          height: "720px",
          
        }}
        sx={{
          display: { xs: "none", lg: "block", md: "block", sm: "block" },
         
        }}
      >
        <iframe
          style={{
            width: "1280px",
            margin: "auto",
            height: "720px",
            "@media (max-width: 480px)": {
              width: "326px",
              height: "183.38px", // Maintain the aspect ratio
            },
          }}
          src="https://www.youtube.com/embed/CFBEU0GYac8?si=tfe3MUvH6xgSHaLF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Modal>
      <Modal
        open={video}
        onClose={() => setVideo(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{
          margin: "auto",
            width: "326px",
            height: "183.38px", // Maintain the aspect ratio
          }}
      
          sx={{
            display: { xs: "block", lg: "none", md: "none", sm: "none" },
           
          }}
      >
        <iframe
          style={{
            width: "1280px",
            margin: "auto",
            height: "720px",
          
              width: "326px",
              height: "183.38px", // Maintain the aspect ratio
            
          }}
          src="https://www.youtube.com/embed/CFBEU0GYac8?si=tfe3MUvH6xgSHaLF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Modal>
    </Box>
  );
};
