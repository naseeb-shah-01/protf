import { useState,useEffect,useRef } from "react";
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
      image: <ImageOne />,
      title: "Accurate Company Disambiguation",
      description:
        "Automate personalized data collection from PortCos with a central dashboard for metrics and gap tracking.",
    },
    {
      image: <ImageTwo />,
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
        >
          Spend time analyzing data, not organizing it
        </Typography>
      </Box>

      {/* Content Section */}
      <Box
        margin={"auto"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"1280px"}
        padding={"0 40px 55px"}
        borderRight={"1px solid #34353b"}
        borderLeft={"1px solid #34353b"}
      >
        {/* Main Content - 75% */}
        <motion.div
          key={triggerAnimation ? `animate-${currentIndex}` : "initial"}
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Box flex={3} textAlign="center">
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
            >
              {mainContent.description}
            </Typography>
            {mainContent.image}
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

        {/* Secondary Content - 25% */}
        <Box flex={1} textAlign="center" marginLeft={"20px"} overflow={"hidden"}>
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
            marginBottom={"40px"}
          >
            {secondaryContent.description}
          </Typography>
          {secondaryContent.image}
          <Box marginTop={"10px"} display={"flex"} justifyContent={"flex-end"}>
            <Left
              style={{ marginRight: "15px", cursor: "pointer" }}
              onClick={() => handlePrev()}
            />
            <Right
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleNext()}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};










