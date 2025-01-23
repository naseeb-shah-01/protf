

import { Box, Typography, Button } from "@mui/material";

import { ReactComponent as Felicis } from "../assets/images/turstone.svg";
import { ReactComponent as Canaan } from "../assets/images/trusttwo.svg";
import { ReactComponent as Tcg } from "../assets/images/trutthree.svg";
import { ReactComponent as Gen } from "../assets/images/turstFour.svg";

export const Trust=()=>{
    return  <Box
    width={"100%"}
    borderTop={"1px solid #5F616D"}
   
  >
    <Box
      width={"1280px"}
      margin={"auto"}
      borderRight={"1px solid #5F616D"}
      borderLeft={"1px solid #5F616D"}
      paddingLeft={"20px"}
      paddingRight={"20px"}
      paddingTop={"55px"}
     
      alignContent={"center"}
    >
      <Typography
        color="#FFFFFF"
        fontSize={"24px"}
        fontWeight={"430"}
        textAlign={"center"}
      >
        Trusted by some of the most data-driven investors
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={10}
        width="100%"
        height="100%"
        padding="20px"
        boxSizing="border-box"
      >
        <Felicis style={{ width: "100px", height: "auto" }} />
        <Canaan style={{ width: "100px", height: "auto" }} />
        <Tcg style={{ width: "100px", height: "auto" }} />
        <Gen style={{ width: "100px", height: "auto" }} />
       
       
      </Box>
    </Box>
    
  </Box>
}