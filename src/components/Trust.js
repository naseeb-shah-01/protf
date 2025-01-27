

import { Box, Typography, Button } from "@mui/material";

import { ReactComponent as Felicis } from "../assets/images/turstone.svg";
import { ReactComponent as Canaan } from "../assets/images/trusttwo.svg";
import { ReactComponent as Tcg } from "../assets/images/trutthree.svg";
import { ReactComponent as Gen } from "../assets/images/turstFour.svg";

export const Trust=()=>{
    return  <Box
    width={"100%"}
    borderTop={"1px solid #34353b"}
   
  >
    <Box
      width={"1280px"}
      margin={"auto"}
      borderRight={"1px solid #34353b"}
      borderLeft={"1px solid #34353b"}
     
      paddingTop={"55px"}
     paddingBottom={"80px"}
      alignContent={"center"}
      sx={{

        boxSizing: "border-box",
        paddingX: { xs: "16px", lg: "40px", md: "40px", sm: "40px" },

        width: { xs: "356px", lg: "1280px", md: "1280px", sm: "1280px" },
      }}
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
        marginTop={"32px"}
        boxSizing="border-box"
        sx={{
          

          boxSizing: "border-box",
          display: { xs: "none", lg: "flex", md: "flex", sm: "flex" },
        }}
      >
        <Canaan style={{  height: "40px" }} />
        <Felicis style={{  height: "40px" }} />
        <Tcg style={{  height: "40px" }} />
        <Gen style={{  height: "40px" }} />
       
       
      </Box>
      {/* for small screen */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        
        width="100%"
        height="100%"
        marginTop={"32px"}
        boxSizing="border-box"
        sx={{

          boxSizing: "border-box",
          

          display: { xs: "flex", lg: "none", md: "none", sm: "none" },
        }}
      >
        <Canaan style={{  height: "21px",width:"106px" }} />
        <Tcg style={{  height: "21px",marginLeft:"12px",width:"106px" }}  />
        <Felicis style={{  height: "24px",width:"150px",marginTop:"12px",marginRight:"10px" }}  />
        <Gen style={{  height: "24px",width:"150px",marginTop:"12px" }}  />
       
       
      </Box>
    </Box>
    
  </Box>
}