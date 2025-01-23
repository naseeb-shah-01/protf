import { Box, Typography, Button ,TextField,InputAdornment, Input} from "@mui/material";
import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { textStyle } from "./Navbar";
import { ReactComponent as Mail } from "../assets/images/mail.svg";

export const Footer = () => {
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
        mt={"80px"}
        paddingLeft={"40px"}
        paddingRight={"40px"}
      >
        <Box width={"50%"}>
          <Typography
            fontWeight={300}
            fontSize={36}
            fontFamily={"Matter-TRIAL"}
          >
            Ready to Transform Your Portfolio Operations?
          </Typography>
          <Typography
            fontWeight={430}
            fontSize={15}
            fontFamily={"Matter-TRIAL"}
            mt={"25px"}
          >
            Join leading funds in modernizing their portfolio data management
          </Typography>


         
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              height: "40px",
              marginLeft: "30px",
              textTransform: "none",
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
              <Typography fontSize={"18px"} sx={{...textStyle,color:"black"}}  fontWeight={570}>
                {" "}
                Book a Demo{" "}
              </Typography>
              <Arrow style={{ marginLeft: "10px" }} />
            </Box>
          </Button>
          
        </Box>
        <Box width={"50%"}>
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
    </Box>
  );
};
