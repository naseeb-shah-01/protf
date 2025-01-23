

import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { ReactComponent as Log } from "../assets/images/play.svg";
import { ReactComponent as Check } from "../assets/images/Checkbox.svg";
import { Box, Typography, Button } from "@mui/material";
export const FreeTrail=()=>{
    const checkContent = [
        "3 Days Setup",
        "100% Privacy Compliant",
        "<60mins of your time",
      ];
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
      paddingTop={"35px"}
      paddingBottom={"35px"}
    >
      <Typography
        fontFamily={"Matter-TRIAL"}
        fontSize={"20px"}
        fontWeight={430}
        color="#999BA3"
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
        width={"100%"}
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
}