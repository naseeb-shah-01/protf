

import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { ReactComponent as Log } from "../assets/images/play.svg";
import { ReactComponent as Check } from "../assets/images/Checkbox.svg";
import { Box, Typography, Button } from "@mui/material";
import { ReactComponent as Stash } from "../assets/images/mainPic.svg";

export const BigImage=()=>{
   
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
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    />
  </Box>
}