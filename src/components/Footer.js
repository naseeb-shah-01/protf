import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Input,
} from "@mui/material";
import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { textStyle } from "./Navbar";
import { useState } from "react";

import ScheduleDemoModal from "../components/BookDemoModal";
export const Footer = () => {

   const [showBookModal, setShowBookModal] = useState(false);
    const handleClose = () => {
      setShowBookModal(false);
    };
  const content = [
    "About us",
    "Private Investors",
    "Careers",
    "Public Investors",
    "Customers",
    "Data Teams",
    "Resources",
    "",
    "Media",
  ];
  return (
    <Box width={"100%"}>
      <Box
        width={"1280px"}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        margin={"auto"}
     
      
        sx={{
          boxSizing:"border-box",
          width: {
            xs: "358px",
            lg: "1280px",
            md: "1280px",
            xl: "1280px",
            sm: "356px",
          },

          flexDirection: {
            xs: "column",
            lg: "row",
            md: "row",
            xl: "row",
            sm: "row",
          },


          mt: {
            xs: "40px",
            lg: "32px",
            md: "32px",
            xl: "32px",
            sm: "32px",
          },
        }}
      >
        <Box
          width={"50%"}
          
          sx={{
            width: {
              xs: "356px",
              lg: "624px",
              md: "624px",
              xl: "624px",
              sm: "624px",
            },
            marginRight: {
              xs: "0px",
              lg: "212px",
              md: "212px",
              xl: "212px",
              sm: "212px",
            },
          }}
        >
          <Typography
            fontWeight={300}
            fontSize={36}
            fontFamily={"Matter-TRIAL"}
            sx={{
              width: {
                xs: "356px",
                lg: "624px",
                md: "624px",
                xl: "624px",
                sm: "624px",
              },
              fontSize: {
                xs: "24px",
                lg: "36px",
                md: "36px",
                xl: "36px",
                sm: "36px",
              },
            }}
          >
            Ready to Transform Your Portfolio Operations?
          </Typography>
          <Typography
            fontWeight={430}
            fontSize={15}
            fontFamily={"Matter-TRIAL"}
            
            sx={{
              fontSize: {
                xs: "14px",
                lg: "15px",
                md: "15px",
                xl: "15px",
                sm: "15px",
              },
               paddingTop: {
                xs: "16px",
                lg: "16px",
                md: "16px",
                xl: "16px",
                sm: "16px",
              },
            }}
          >
            Join leading funds in modernizing their portfolio data management
          </Typography>

          <Button
          onClick={()=>setShowBookModal(true)}
            sx={{
              backgroundColor: "#316D2F",
              color: "white",
              height: "40px",
              
              textTransform: "none",
              marginTop: {
                xs: "32px",
                lg: "32px",
                md: "32px",
                xl: "32px",
                sm: "32px",
              },
               width: {
                xs: "200px",
                lg: "200px",
                md: "200px",
                xl: "200px",
                sm: "200px",
              },
                height: {
                xs: "52px",
                lg: "52px",
                md: "52px",
                xl: "52px",
                sm: "52px",
              },
            }}
            variant="contained"
            paddingRight="32px"
            paddingLeft="32px"
            paddingTop="14px"
            paddingBottom="14px"
            height="52px"
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              fontWeight={570}
            >
              <Typography
                fontSize={"18px"}
                sx={{ ...textStyle, color: "white" }}
                fontWeight={570}
              >
                {" "}
                Book a Demo{" "}
              </Typography>
              <Arrow style={{ marginLeft: "10px",color:"white" }} />
            </Box>
          </Button>
        </Box>
        <Box width={"50%"}
        
        
        sx={{
          width: {
            xs: "356px",
            lg: "364px",
            md: "364px",
            xl: "364px",
            sm: "364px",
          },
        }}
        >
          <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
            {content.map((item) => (
              <Typography
                width={"50%"}
                marginTop={"20px"}
                fontWeight={430}
                fontSize={15}
                fontFamily={"Matter-TRIAL"}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <ScheduleDemoModal  open={showBookModal} onClose={handleClose}/>
    </Box>
  );
};
