

import { Box, Typography, Button } from "@mui/material";

import { ReactComponent as Main } from "../assets/int/main.svg";

export const Integration=()=>{
    return  <Box
    width={"100%"}
    
    borderBottom={"1px solid #34353b"}
  >
    <Box
      width={"1280px"}
      margin={"auto"}
      borderRight={"1px solid #34353b"}
      borderLeft={"1px solid #34353b"}
      paddingLeft={"40px"}
      paddingRight={"40px"}
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
          marginBottom={"16px"}
        >
          Integration
        </Typography>
        <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"52px"}
          fontWeight={300}
          color="#FFFFFF"
          textAlign={"center"}
          lineHeight={"120%"}
        >
          Level up your portfolio data, without disrupting your processes
        </Typography>


        <Main style={{marginTop:"60px"}}/>
    </Box>
    
  </Box>
}