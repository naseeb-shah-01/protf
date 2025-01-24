import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as ColorMode } from "../assets/images/Color_Mode.svg";
import { ReactComponent as FrameIcon } from "../assets/images/PIQ Logo.svg";
import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { ReactComponent as Log } from "../assets/images/arroww.svg";


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
  
  const navContent = [
    "Solutions",
    "Customers",
   
    "Resources",
    "About Us",
  ];
  return (
    <div
      style={{
        
        width: "100%",
        backgroundColor: "#27282D",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex:1000000
        
      }}
    >
      
      <Box
        display={"flex"}
        flexDirection={"row"}
        minHeight={"72px"}
        alignItems={"center"}
        width={"1280px"}
        margin={"auto"}
        flexWrap={"wrap"}
        sx={{
          "@media (max-width: 600px)": {
            flexDirection: "column", // Change to column on small screens
            marginLeft: "5%",
            justifyContent:"flex-start" // Adjust margin
          },
        }}
      >
        
        
      
        <Box
          sx={{
            "@media (max-width: 600px)": {
              flexDirection: "column", // Change to column on small screens
              marginLeft: "5%",
              justifyContent:"flex-start" // Adjust margin
            },
          }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
       
         width={"1280px"}
          flexWrap={"wrap"}
        >
          
          <FrameIcon style={{marginLeft:'20px',"@media (max-width: 600px)": {
             // Change to column on small screens
            
             // Adjust margin
          },}}></FrameIcon>
          {navContent.map((el) => (
            <Typography
              style={textStyle}
              fontFamily={"Matter-TRIAL"}
              fontWeight={430}
              fontSize={18}
            >
              {el}
            </Typography>
          ))}
         
        {/* </Box> */}
        {/* <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            sx={{
              "@media (max-width: 600px)": {
                flexDirection: "column", // Change to column on small screens
                marginLeft: "5%", // Adjust margin
              },
            }}
          > */}
            <Box>
            <Button
              sx={{
                backgroundColor: "white",
                color: "black",
                height: "40px",
                marginLeft: "30px",
                textTransform: "none",
              }}
              variant="contained"
            >
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Typography fontSize={"13px"}> Book a Demo </Typography>
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
              }}
              variant="outlined"
            >
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Typography fontSize={"13px"}> Log In </Typography>
                <Log style={{ marginLeft: "10px" }} />
              </Box>
            </Button>
          </Box>
          </Box>
      </Box>
    </div>
  );
};
