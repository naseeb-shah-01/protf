

import { Box, Typography, Button } from "@mui/material";

import { ReactComponent as Main } from "../assets/int/main.svg";

export const Integration=()=>{
    return  <Box
    width={"100%"}
    borderTop={"1px solid #5F616D"}
    borderBottom={"1px solid #5F616D"}
  >
    <Box
      width={"1280px"}
      margin={"auto"}
      borderRight={"1px solid #5F616D"}
      borderLeft={"1px solid #5F616D"}
      paddingLeft={"20px"}
      paddingRight={"20px"}
      paddingTop={"55px"}
      paddingBottom={"55px"}
      alignContent={"center"}
    >
     <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"24px"}
          fontWeight={430}
          color="#FFFFFF"
          textAlign={"center"}
        >
          Integration
        </Typography>
        <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"52px"}
          fontWeight={300}
          color="#FFFFFF"
          textAlign={"center"}
        >
          Level up your portfolio data, without disrupting your processes
        </Typography>


        <Main style={{marginTop:"20px"}}/>
    </Box>
    
  </Box>
}