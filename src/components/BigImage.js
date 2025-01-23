

import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { ReactComponent as Log } from "../assets/images/play.svg";
import { ReactComponent as Check } from "../assets/images/Checkbox.svg";
import { Box, Typography, Button, Modal } from "@mui/material";
import { ReactComponent as Stash } from "../assets/images/videoimage.svg";
import React, { useState } from 'react';





export const BigImage=()=>{
  const [video,setVideo]=useState(false)
   
    return  <Box
    width={"1280px"}
    margin={"auto"}
    borderRight={"1px solid #5F616D"}
    borderLeft={"1px solid #5F616D"}
  
    paddingLeft={"40px"}
    paddingRight={"40px"}
    paddingTop={"55px"}
    paddingBottom={"55px"}
    alignContent={"center"}
  >
    
 <Stash
    onClick={()=>setVideo((p)=>!p)}
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
        
      }}
    />
    <Modal open={video}  onClose={()=>setVideo(false)} 
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
  
  style={{
    width:'1920px',margin:"auto",height:"1080px"
  }}
>
<iframe width="1920px" height="1080px" src="https://www.youtube.com/embed/CFBEU0GYac8?si=tfe3MUvH6xgSHaLF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </Modal> </Box>
}