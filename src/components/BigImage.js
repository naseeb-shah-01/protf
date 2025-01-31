import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { ReactComponent as Log } from "../assets/images/play.svg";
import { ReactComponent as Check } from "../assets/images/Checkbox.svg";
import { Box, Typography, Button, Modal } from "@mui/material";
import { ReactComponent as Stash } from "../assets/images/videoimage.svg";
import React, { useState } from "react";
import VideoModal from "./VideoPlayer";

export const BigImage = () => {
  const [video, setVideo] = useState(false);

  return (
    <Box
      width={"1280px"}
      margin={"auto"}
      borderRight={"1px solid #34353b"}
      borderLeft={"1px solid #34353b"}
    
   
      alignContent={"center"}
      sx={{
        boxSizing: "border-box",
        paddingX: { xs: "16px", lg: "40px", md: "40px", sm: "40px" },
        width: { xs: "356px", lg: "1280px", md: "1280px", sm: "1280px" },
        paddingTop: { xs: "24px", lg: "80px", md: "80px", sm: "80px" },
        paddingBottom: { xs: "24px", lg: "80px", md: "80px", sm: "80px" },
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
    <VideoModal onClose={()=>setVideo(false)} open={video}/>
    </Box>
  );
};
