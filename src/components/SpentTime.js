import { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ReactComponent as ImageOne } from "../assets/slideImages/slideone.svg";
import { ReactComponent as ImageTwo } from "../assets/slideImages/sai.svg";
import { ReactComponent as Left } from "../assets/slideImages/left.svg";
import { ReactComponent as Right } from "../assets/slideImages/right.svg";
import { ReactComponent as IconOne } from "../assets/slideImages/flare.svg";
import { ReactComponent as Small } from "../assets/slideImages/small.svg";
import { ReactComponent as Big } from "../assets/slideImages/big.svg";
import { motion } from "framer-motion";

export const SpentTime = () => {
  const content = [
    {
      image: <ImageOne style={{position:'relative',height:'100%',width:"100%"}}  />,
      title: "Accurate Company Disambiguation",
      description:
        "Automate personalized data collection from PortCos with a central dashboard for metrics and gap tracking.",
    },
    {
      image: <ImageTwo style={{position:'relative',height:'100%',width:"100%"}}  />,
      title: "Extra insights at company level",
      description:
        "Automate personalized data collection from PortCos with a central dashboard for metrics and gap tracking.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const isFirstChange = useRef(true);

  useEffect(() => {
    setTriggerAnimation(false); // Reset animation
    const timeoutDuration = isFirstChange.current ? 10000 : 5000; // 10 seconds for the first, then 5 seconds
    const timeout = setTimeout(() => {
      setTriggerAnimation(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
      isFirstChange.current = false; // Subsequent changes will use 5 seconds
    }, timeoutDuration);

    return () => clearTimeout(timeout); // Clean up timeout
  }, [currentIndex]);

  useEffect(() => {
    setTriggerAnimation(false); // Reset animation
    const timeout = setTimeout(() => setTriggerAnimation(true), 10); // Restart animation after a small delay
    return () => clearTimeout(timeout); // Clean up timeout
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const mainContent = content[currentIndex];
  const secondaryContent = content[(currentIndex + 1) % content.length];

  return (
    <Box width={"100%"} borderBottom={"1px solid #34353b"}>
      <Box
        width={"1280px"}
        margin={"auto"}
        padding={"55px 40px"}
        borderRight={"1px solid #34353b"}
        borderLeft={"1px solid #34353b"}
        sx={{
          boxSizing: "border-box",
      

          width: {
            xs: "358px",
            sm: "1280px",
            md: "1280px",
            lg: "1280px",
            xl: "1280px",
          }, //// Set width dynamically
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
          borderBottom={"1px solid #34353b"}
          paddingBottom={"60px"}
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
          Spend time analyzing data, not organizing it
        </Typography>
      </Box>

      {/* Content Section */}
      <Box
        margin={"auto"}
        display={"flex"}
        flexDirection={"row"}
        
        width={"1280px"}
        borderRight={"1px solid #34353b"}
        borderLeft={"1px solid #34353b"}
        sx={{
          boxSizing: "border-box",
          width: {
            xs: "358px",
            sm: "1280px",
            md: "1280px",
            lg: "1280px",
            xl: "1280px",
          }, // Set width dynamically
        }}
      >
        {/* Main Content - 75% */}
        <motion.div
          key={triggerAnimation ? `animate-${currentIndex}` : "initial"}
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Box
          
            textAlign="center"
            sx={{
              // border: "1px solid red",
              paddingLeft: {
                xs: "16px",
                sm: "40px",
                md: "40px",
                lg: "40px",
                xl: "40px",
              },
              width: {
                xs: "290px",

                sm: "1080px",
                md: "1080px",
                lg: "1080px",
                xl: "1080px",
              },
              paddingBottom: {
                xs: "24px",

                sm: "40px",
                md: "40px",
                lg: "40px",
                xl: "40px",
              }, // Set width dynamically
            }}
          >
            <Box textAlign={"left"}>
              <IconOne />
            </Box>
            <Typography
              fontFamily={"Matter-TRIAL"}
              fontSize={"24px"}
              fontWeight={430}
              color="#FFFFFF"
              marginTop={2}
              textAlign={"left"}
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "24px",
                  md: "24px",
                  lg: "24px",
                  xl: "24px",
                },
              }}
            >
              {mainContent.title}
            </Typography>
            <Typography
              textAlign={"left"}
              fontFamily={"Matter-TRIAL"}
              fontSize={"20px"}
              fontWeight={300}
              color="#999BA3"
              marginTop={1}
              marginBottom={"40px"}
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              {mainContent.description}
            </Typography>
            <Box height={"154px"} 
            
            sx={{
              height: {
                xs: "154px",
                sm: "576px",
                md: "576px",
                lg: "576px",
                xl: "576px",
              },
              width: {
                xs: "290px",
                sm: "1080px",
                md: "1080px",
                lg: "1080px",
                xl: "1080px",
              },
            }}
            width={"290px"}>
            {mainContent.image}
            </Box>
            <Box marginTop={"10px"} textAlign={"left"}>
              {currentIndex === 0 ? (
                <>
                  <Big
                    style={{ marginRight: "15px" }}
                    onClick={() => handlePrev()}
                  />
                  <Small
                    style={{ cursor: "pointer" }}
                    onClick={() => handlePrev()}
                  />
                </>
              ) : (
                <>
                  <Small
                    style={{ marginRight: "15px", cursor: "pointer" }}
                    onClick={() => handlePrev()}
                  />
                  <Big onClick={() => handlePrev()} />
                </>
              )}
            </Box>
          </Box>
        </motion.div>
        <Box textAlign="center" overflow={"hidden"}
        
        sx={{  width: {
          xs: "290px",

          sm: "1080px",
          md: "1080px",
          lg: "1080px",
          xl: "1080px",

        },
        marginLeft: {xs: "10px",

        sm: "40px",
        md: "40px",
        lg: "40px",
        xl: "40px"},}}
        
        >
          <Box textAlign={"left"}>
            <IconOne />
          </Box>
          <Typography
            fontFamily={"Matter-TRIAL"}
            
            fontSize={"24px"}
            fontWeight={430}
            color="#FFFFFF"
            marginTop={2}
            textAlign={"left"}
            noWrap={"true"}

            sx={{
              fontSize: {
                xs: "16px",
                sm: "24px",
                md: "24px",
                lg: "24px",
                xl: "24px",
              },
            }}
          >
            {secondaryContent.title}
          </Typography>
          <Typography
            textAlign={"left"}
            fontFamily={"Matter-TRIAL"}
            
            fontSize={"20px"}
            fontWeight={300}
            color="#999BA3"
            marginTop={1}
            noWrap={"true"}
           

            sx={{
              fontSize: {
                xs: "14px",
                sm: "20px",
                md: "20px",
                lg: "20px",
                xl: "20px",
              },
              height: {
                xs: "100px",
                sm: "60px",
                md: "60px",
                lg: "60px",
                xl: "60px",
              },
            }}
          >
            {secondaryContent.description}
          </Typography>
         
        


          <Box height={"154px"} 
            
            sx={{
              height: {
                xs: "154px",
                sm: "576px",
                md: "576px",
                lg: "576px",
                xl: "576px",
              },
              width: {
                xs: "290px",
                sm: "1080px",
                md: "1080px",
                lg: "1080px",
                xl: "1080px",
              },
             
            }}
            width={"290px"}> 
          {secondaryContent.image}
          </Box>
          <Box marginTop={"10px"} display={"flex"} justifyContent={"flex-end"} 
               sx={{
                height: {
                  xs: "32px",
                  sm: "32px",
                  md: "32px",
                  lg: "32px",
                  xl: "32px",
                }
               
               
          }}>
            <Left
              style={{ marginRight: "10px", cursor: "pointer" ,position:'relative',height:"100%",width:"100%" }}
              onClick={() => handlePrev()}
            />
            <Right
              style={{
                cursor: "pointer",position:'relative',height:"100%",width:"100%"
              }}
              onClick={() => handleNext()}
            />
          </Box>
        </Box>
      </Box>

        {/* Secondary Content - 25% */}
      
      {/* </Box> */}
    </Box>
  );
};
