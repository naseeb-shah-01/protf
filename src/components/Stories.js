import { Box, Typography, Button, Grid2, Grid } from "@mui/material";

import { ReactComponent as Felicis } from "../assets/images/felicis.svg";
import { ReactComponent as Canaan } from "../assets/images/canaan.svg";
import { ReactComponent as Tcg } from "../assets/images/tcg.svg";
import { ReactComponent as Gen } from "../assets/images/gig.svg";
import { ReactComponent as Rabit } from "../assets/images/ribbit.svg";
import { ReactComponent as Gic } from "../assets/images/gig.svg";
import { ReactComponent as Main } from "../assets/int/ad.svg";
export const Stories = () => {
  const content = [
    {
      company: <Felicis style={{height:"100px",width:"100px",margin:"auto"}} />,
      description:
        "Synaptic has been a great resource for us as we systematically improve our sourcing process. It has enabled us to find and track great companies that are outside of our network",
    },
    {
      company: <Rabit />,
      description:
        "Our entire team uses Synaptic multiple times a week. From diligence to thesis development to portfolio tracking, it’sbecome an indispensable tool to us.",
    },
    {
      company: <Tcg />,
      description:
        "Synaptic has been an incredible partner in powering our outbound data sourcing and inbound data diligence functions. It helped level up the efficiency and effectiveness of our investment team.",
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
      
        alignContent={"center"}
        sx={{
          width: "1360px", // Set width dynamically
        }}
      >
        <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"24px"}
          fontWeight={430}
          color="#FFFFFF"
          textAlign={"center"}
          
        >
          Customer stories{" "}
        </Typography>
        <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"52px"}
          fontWeight={300}
          color="#FFFFFF"
          textAlign={"center"}
        >
          Our customers back our stack too
        </Typography>

        <Box mt={"40px"} marginTop={"60px"}>
          {content.map((item) => (
            <Box
              border={"1px  solid #34353b"}
              display={"flex"}
              width={"100%"}
              flexDirection={"row"}
              alignItems={"center"}
              borderBottom={"none"}
              borderLeft={"none"}
              borderRight={"none"}
            >
              <Box width={"25%"} padding={"30px"} marginLeft={"10%"} >
                {item.company}
              </Box>
              <Box
                width={"75%"}
                padding={"30px"}
                borderLeft={"1px solid #34353b"}
              >
                <Typography
                  fontFamily={"Matter-TRIAL"}
                  fontSize={"20px"}
                  fontWeight={430}
                  color="#999BA3"
                >
                  {item.description}
                </Typography>

                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  mt={"20px"}
                >
                  <Box mr={"30px"}>
                    <Main />
                  </Box>
                  <Box>
                    <Typography
                      fontFamily={"Matter-TRIAL"}
                      fontSize={20}
                      fontWeight={430}
                    >
                      Justin Paseek
                    </Typography>
                    <Typography
                      fontFamily={"Matter-TRIAL"}
                      fontSize={16}
                      fontWeight={430}
                      color="#999BA3"
                    >
                      Partner, Fifth Growth
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
