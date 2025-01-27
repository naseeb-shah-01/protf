import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { ReactComponent as Log } from "../assets/images/play.svg";
import { ReactComponent as Check } from "../assets/images/Checkbox.svg";
import { Box, Typography, Button } from "@mui/material";
export const FreeTrail = () => {
  const checkContent = [
    "3 Days Setup",
    "100% Privacy Compliant",
    "<60mins of your time",
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
     
        paddingTop={"35px"}
        paddingBottom={"35px"}
        sx={{
          boxSizing: "border-box",
          width: { xs: "356px", lg: "1280px", md: "1280px", sm: "1280px" },
          paddingTop: { xs: "24px", lg: "35px", md: "35px", sm: "35px" },
          paddingBottom: { xs: "24px", lg: "35px", md: "35px", sm: "35px" },
        }}
      >
        <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"20px"}
          fontWeight={430}
          color="#999BA3"
          padding={"16px"}
          textAlign={"center"}
        >
          Free trial available post Demo
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
          width={"95%"}
        >
          {checkContent.map((content) => (
            <Box
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"wrap"}
              alignItems={"center"}
              marginLeft={"20px"}
            >
              <Check />
              <Typography
                fontFamily={"Matter-TRIAL"}
                fontSize={"16px"}
                fontWeight={430}
                color="#999BA3"
                textAlign={"center"}
                marginLeft={"5px"}
              >
                {content}
              </Typography>{" "}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
