import { Box, Typography, Button } from "@mui/material";

import { ReactComponent as ImageOne } from "../assets/stepImages/step1.svg";
import { ReactComponent as ImageTwo } from "../assets/stepImages/step2.svg";
import { ReactComponent as ImageThree } from "../assets/stepImages/step3.svg";
import { ReactComponent as IconOne } from "../assets/stepImages/oneicon.svg";
import { ReactComponent as IconTwo } from "../assets/stepImages/twoicon.svg";
import { ReactComponent as IconThree } from "../assets/stepImages/threeicon.svg";

export const BeniFit = () => {
  const content = [
    {
      image: <ImageOne />,
      title: "Centralized Collection",
      description:
        "Automate your  collection requests or upload your documents directly.",
      icon: <IconOne />,
    },
    {
      image: <ImageTwo />,
      title: "AI extraction, Human verified",
      description:
        "Our proprietary AI extracts data with 100% accuracy, verified by financial analysts",
      icon: <IconTwo />,
    },
    {
      image: <ImageThree />,
      title: "Standardized data & Insights",
      description:
        "Single source of truth with standardized metrics, powerful benchmarking, and analytics",
      icon: <IconThree />,
    },
  ];
  return (
    <Box
      width={"100%"}
      borderTop={"1px solid #34353b"}
      borderBottom={"1px solid #34353b"}
    >
      <Box
        width={"1280px"}
        margin={"auto"}
        borderRight={"1px solid #34353b"}
        borderLeft={"1px solid #34353b"}
       
        paddingTop={"55px"}
        paddingBottom={"55px"}
        alignContent={"center"}
        sx={{
          width: {
            xs: "355px",

            sm: "1280px",
            md: "1280px",
          },
        }}
      >
        <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"24px"}
          fontWeight={430}
          color="#999BA3"
          textAlign={"center"}
        >
          Benefits
        </Typography>

        <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"52px"}
          fontWeight={300}
          color="#FFFFFF"
          textAlign={"center"}
          sx={{
            fontSize:{
              xs: "24px",
              sm: "52px",
              md: "52px",
              lg: "52px",
              xl: "52px",
            },
          }}
        >
          Scattered portfolio data to structured insights
        </Typography>
      </Box>
      <Box
        margin={"auto"}
        // borderRight={"1px solid #34353b"}
        // borderLeft={"1px solid #34353b"}
        paddingBottom={"80px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        justifyItems={"center "}
        //  border={"1px solid yellow"}
        
        sx={{
          borderRight:{
            xs: "1px solid #34353b",
            sm: "1px solid #34353b",
            md: "1px solid #34353b",
            lg: "1px solid #34353b",
            xl: "1px solid #34353b",
          },
          borderLeft:{
            xs: "1px solid #34353b",
            sm: "1px solid #34353b",
            md: "1px solid #34353b",
            lg: "1px solid #34353b",
            xl: "1px solid #34353b",
          },
          boxSizing: "border-box",
          flexDirection:{xs:"column",sm:"row",md:"row","lg":'row',xl:'row'},
          width: {
            xs: "356px",
            sm: "1280px",
            md: "1280px",
            lg: "1280px",
            xl: "1280px",
          }, // Set width dynamically
        }}
      >
        {content.map((item, index) => (
          <Box
            borderLeft={"1px solid #34353b"}
            borderTop={"1px solid #34353b"}
            borderBottom={"1px solid #34353b"}
            borderRight={"1px solid #34353b"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              boxSizing: "border-box",
              height: {
                xs: "474px", // Extra small devices (mobile)
                sm: "550px", // Small devices (tablets)
                md: "550px", // Medium devices (laptops)
                lg: "550px", // Large devices (desktops)
                xl: "550px",
              },
              paddingX:{
                xs: "40px", // Extra small devices (mobile)
                sm: "40px", // Small devices (tablets)
                md: "40px", // Medium devices (laptops)
                lg: "40px", // Large devices (desktops)
                xl: "40px",
              },
              paddingY:{
                xs: "40px", // Extra small devices (mobile)
                sm: "40px", // Small devices (tablets)
                md: "40px", // Medium devices (laptops)
                lg: "40px", // Large devices (desktops)
                xl: "40px",
              },
              width: {
                xs: "356px",
                sm: "427px",
                md: "427px",
                lg: "427px",
                xl: "427px",
              },
            }}
            
            margin="auto"
            // Centers the entire Box horizontally
          >
            <Typography
              color="#5F616D"
              fontWeight={300}
              fontSize={18}
              // border={"1px solid red"}
              width={"100%"}
              textAlign={"left"}
              sx={{
                marginBottom: {
                  xs: "40px", // Extra small devices (mobile)
                  sm: "auto", // Small devices (tablets)
                  md: "auto", // Medium devices (laptops)
                  lg: "auto", // Large devices (desktops)
                  xl: "auto",
                },
              }}
            >
              Step 0{index + 1}
            </Typography>
            <Box
              height={"191px"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              margin={"auto"}
              width={"100%"}
              // border={"1px solid red"}
              marginTop={"0px"}
            >
              {item.image}
            </Box>
            <Box marginTop={"20px"} width={"100%"} textAlign={"left"}>
              {item.icon}
            </Box>
            <Typography
              fontFamily={"Matter-TRIAL"}
              fontSize={"24px"}
              fontWeight={430}
              sx={{
                fontSize:{
                  xs: "16px",
                  sm: "24px",
                  md: "24px",
                  lg: "24px",
                  xl: "24px",
                },
              }}
              color="#999BA3"
              textAlign={"left"}
              width={"100%"}
            >
              {item.title}
            </Typography>
            <Typography
              fontFamily={"Matter-TRIAL"}
              fontSize={"20px"}
              fontWeight={300}
              color="#999BA3"
              textAlign={"left"}
              width={"100%"}
              sx={{
                fontSize:{
                  xs: "14px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
