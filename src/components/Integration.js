import { Box, Typography, Button } from "@mui/material";

import { ReactComponent as Main } from "../assets/int/main.svg";

export const Integration = () => {
  return (
    <Box width={"100%"} borderBottom={"1px solid #34353b"}>
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
          width: {
            xs: "358px",

            sm: "1280px",
            md: "1280px",
            lg: "1280px",
            xl: "1280px",
          },
          
          paddingLeft: {
            xs: "16px",

            sm: "40px",
            md: "40px",
            lg: "40px",
            xl: "40px",
          },
          paddingRight: {
            xs: "16px",

            sm: "40px",
            md: "40px",
            lg: "40px",
            xl: "40px",
          },
          // Set width dynamically
        }}
      >
        <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"24px"}
          fontWeight={430}
          color="#FFFFFF"
          textAlign={"center"}
          marginBottom={"16px"}
          sx={{
            fontSize: {
              xs: "14px",

              sm: "24px",
              md: "24px",
              lg: "24px",
              xl: "24px",
            },
          }}
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
          sx={{
            fontSize: {
              xs: "24px",

              sm: "52px",
              md: "52px",
              lg: "52px",
              xl: "52px",
            },
          }}
        >
          Level up your portfolio data, without disrupting your processes
        </Typography>
        <Box
          sx={{
            width: {
              xs: "326px",

              sm: "1205px",
              md: "1205px",
              lg: "1205px",
              xl: "1205px",
            },
// border:'1px solid red',
            marginTop: {
              xs: "32px",

              sm: "60px",
              md: "60px",
              lg: "60px",
              xl: "60px",
            },

            height: {
              xs: "204px",

              sm: "757px",
              md: "757px",
              lg: "757px",
              xl: "757px",
            },
          }}
        >
          <Main
            style={{ position: "relative", height: "100%", width: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
