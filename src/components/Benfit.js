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
        "Automate collection requests or upload your documents directly.",
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
        >
          Scattered portfolio data to structured insights
        </Typography>
      </Box>
      <Box
        margin={"auto"}
        borderRight={"1px solid #34353b"}
        borderLeft={"1px solid #34353b"}
        paddingBottom={"55px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        sx={{
          width: "1360px", // Set width dynamically
        }}
      >
        {content.map((item, index) => (
          <Box
            borderLeft={ index!=0?"1px solid #34353b":""}
            borderTop={"1px solid #34353b"}
             borderBottom={"1px solid #34353b"}
            padding={"40px"}
            borderRight={"none"}
            width={"90%"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            margin="auto"
            height={"550px"} // Centers the entire Box horizontally
          >
            <Typography
              color="#5F616D"
              fontWeight={300}
              fontSize={18}
             
              width={"100%"}
              textAlign={"left"}
            >
              Step 0{index + 1}
            </Typography>
            <Box
              height={"191px"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              margin={"auto"}
            >
              {item.image}
            </Box>
            <Box
              marginTop={"20px"}
              width={"100%"}
              
              textAlign={"left"}
            >
              {item.icon}
            </Box>
            <Typography
              fontFamily={"Matter-TRIAL"}
              fontSize={"24px"}
              fontWeight={430}
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
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
