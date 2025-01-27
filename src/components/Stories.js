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
      company: (
        <Felicis
          style={{ position: "relative", height: "100%", width: "100%" }}
        />
      ),
      description:
        "Synaptic has been a great resource for us as we systematically improve our sourcing process. It has enabled us to find and track great companies that are outside of our network",
    },
    {
      company: (
        <Rabit
          style={{ position: "relative", height: "100%", width: "100%" }}
        />
      ),
      description:
        "Our entire team uses Synaptic multiple times a week. From diligence to thesis development to portfolio tracking, it’sbecome an indispensable tool to us.",
    },
    {
      company: (
        <Tcg style={{ position: "relative", height: "100%", width: "100%" }} />
      ),
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
          boxSizing: "border-box",
          width: {
            xs: "358px",
            sm: "1280px",
            lg: "1280px",
            md: "1280px",
            xl: "1280px",
          }, // Set width dynamically
        }}
      >
        <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"24px"}
          fontWeight={430}
          color="#FFFFFF"
          textAlign={"center"}
          sx={{
            fontSize: {
              xs: "14px",
              sm: "24px",
              lg: "24px",
              md: "24px",
              xl: "24px",
            }, // Set width dynamically
          }}
        >
          Customer stories{" "}
        </Typography>
        <Typography
          fontFamily={"Matter-TRIAL"}
          fontSize={"52px"}
          fontWeight={300}
          color="#FFFFFF"
          textAlign={"center"}
          sx={{
            fontSize: {
              xs: "24px",
              sm: "52px",
              lg: "52px",
              md: "52px",
              xl: "52px",
            }, // Set width dynamically
          }}
        >
          Our customers back our stack too
        </Typography>

        <Box>
          {content.map((item, i) => (
            <Box
              border={"1px  solid #34353b"}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              borderBottom={"none"}
              borderLeft={"none"}
              borderRight={"none"}
              sx={{
                boxSizing: "border-box",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  lg: "row",
                  xl: "row",
                  md: "row",
                },

                width: {
                  xs: "358px",
                  sm: "1280px",
                  lg: "1280px",
                  md: "1280px",
                  xl: "1280px",
                },
                height: {
                  xs: i==2?"280px":"276px",
                  sm: "236px",
                  lg: "236px",
                  md: "236px",
                  xl: "236px",
                },
              }}
            >
              <Box
                //  border={"1px solid blue"}
                sx={{
                  boxSizing: "border-box",
                  width: {
                    xs: "358px",
                    sm: "400px",
                    lg: "400px",
                    md: "400px",
                    xl: "400px",
                  },
                  height: {
                    xs: "100px",
                    sm: "236px",
                    lg: "236px",
                    md: "236px",
                    xl: "236px",
                  },
                  paddingLeft: {
                    xs: i == 2 ? "151px" : "122px",
                    sm: i == 1 ? "121px" : i == 2 ? "172px" : "143px",
                    lg: i == 1 ? "121px" : i == 2 ? "172px" : "143px",
                    md: i == 1 ? "121px" : i == 2 ? "172px" : "143px",
                    xl: i == 1 ? "121px" : i == 2 ? "172px" : "143px",
                  },
                  paddingRight: {
                    xs: i == 2 ? "151px" : "122px",
                    sm: i == 1 ? "121px" : i == 2 ? "172px" : "143px",
                    lg: i == 1 ? "121px" : i == 2 ? "172px" : "143px",
                    md: i == 1 ? "121px" : i == 2 ? "172px" : "143px",
                    xl: i == 1 ? "121px" : i == 2 ? "172px" : "143px",
                  },
                  paddingTop: {
                    xs: i == 2 ? "18px" : "35px",
                    sm: i == 1 ? "92px" : i == 2 ? "89px" : "103px",
                    lg: i == 1 ? "92px" : i == 2 ? "89px" : "103px",
                    md: i == 1 ? "92px" : i == 2 ? "89px" : "103px",
                    xl: i == 1 ? "92px" : i == 2 ? "89px" : "103px",
                  },
                  paddingBottom: {
                    xs: i == 2 ? "18px" : "35px",
                    sm: i == 1 ? "92px" : i == 2 ? "89px" : "103px",
                    lg: i == 1 ? "92px" : i == 2 ? "89px" : "103px",
                    md: i == 1 ? "92px" : i == 2 ? "89px" : "103px",
                    xl: i == 1 ? "92px" : i == 2 ? "89px" : "103px",
                  },
                }}
              >
                {item.company}
              </Box>
              <Box
                sx={{
                  boxSizing: "border-box",
                  width: {
                    xs: "358px",
                    sm: "880px",
                    lg: "880px",
                    md: "880px",
                    xl: "880px",
                  },
                  height: {
                    xs: "100px",
                    sm: "236px",
                    lg: "236px",
                    md: "236px",
                    xl: "236px",
                  },
                }}
                borderLeft={"1px solid #34353b"}
              >
                <Typography
                  fontFamily={"Matter-TRIAL"}
                  fontSize={"20px"}
                  fontWeight={430}
                  color="#999BA3"
                  // border={"1px solid green"}

                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "20px",
                      lg: "20px",
                      md: "20px",
                      xl: "20px",
                    },
                    paddingLeft: {
                      xs: "16px",
                      sm: "40px",
                      lg: "40px",
                      md: "40px",
                      xl: "40px",
                    },
                    paddingTop: {
                      xs: "0px",
                      sm: "40px",
                      lg: "40px",
                      md: "40px",
                      xl: "40px",
                    },
                    paddingBottom: {
                      xs: "16px",
                      lg: "16px",
                      md: "16px",
                      xl: "16px",
                      sm: "16px",
                    },
                    paddingRight: {
                      xs: "16px",
                      sm: "40px",
                      lg: "40px",
                      md: "40px",
                      xl: "40px",
                    },
                  }}
                >
                  {item.description}
                </Typography>

                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  sx={{
                    paddingLeft: {
                      xs: "16px",
                      sm: "40px",
                      lg: "40px",
                      md: "40px",
                      xl: "40px",
                    },
                    paddingTop: {
                      xs: "0px",
                      sm: "0px",
                      lg: "0px",
                      md: "0px",
                      xl: "0px",
                    },
                    paddingBottom: {
                      xs: "16px",
                      lg: "16px",
                      md: "16px",
                      xl: "16px",
                      sm: "16px",
                    },
                    paddingRight: {
                      xs: "16px",
                      sm: "40px",
                      lg: "40px",
                      md: "40px",
                      xl: "40px",
                    },
                  }}
                >
                  <Box>
                    <Main />
                  </Box>
                  <Box
                    sx={{
                      paddingLeft: "12px",
                    }}
                  >
                    <Typography
                      fontFamily={"Matter-TRIAL"}
                      fontSize={20}
                      fontWeight={430}
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "20px",
                          lg: "20px",
                          md: "20px",
                          xl: "20px",
                        },

                        // Set width dynamically
                      }}
                    >
                      Justin Paseek
                    </Typography>
                    <Typography
                      fontFamily={"Matter-TRIAL"}
                      fontSize={16}
                      fontWeight={430}
                      color="#999BA3"
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          lg: "16px",
                          md: "16px",
                          xl: "16px",
                        }, // Set width dynamically
                      }}
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
