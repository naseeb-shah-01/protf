import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton
} from "@mui/material";
import Alert from '@mui/material/Alert';
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as Logo } from "../assets/images/frame.svg";
import { textStyle } from "./Navbar";
import { ReactComponent as CheckCircle } from "../assets/images/checkCircle.svg";
import { API, serverUrl } from "../utilis/api";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import { toast } from "react-toast-simple";
const ScheduleDemoModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    organization: "",
    role: "",
    message: " ",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    workEmail: "",
    organization: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const [afterSubmission, setAfterSubmission] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleChange = (e) => {
    setErrors((pre)=>({
      ...pre,[e.target.name]:""
    }))
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setErrors({
      fullName: "",
      workEmail: "",
      organization: "",
      role: "",
      message: "",
    });

    let formIsValid = true;
    let validationErrors = {};

    if (!formData.fullName) {
      formIsValid = false;
      validationErrors.fullName = "Full Name is required.";
    }

    if (!formData.workEmail) {
      formIsValid = false;
      validationErrors.workEmail = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      formIsValid = false;
      validationErrors.workEmail = "Email is invalid.";
    }

    if (!formData.organization) {
      formIsValid = false;
      validationErrors.organization = "Organization is required.";
    }

    if (!formData.role) {
      formIsValid = false;
      validationErrors.role = "Role is required.";
    }

    setErrors(validationErrors);

    if (formIsValid) {
      setLoading(true);
      setIsFlipped(true); // Trigger flip animation

      API.postData(serverUrl + "request", { ...formData })
        .then((e) => {

          setFormData({ fullName: "",
            workEmail: "",
            organization: "",
            role: "",
            message: " "})
          setAfterSubmission(false); // Show success message after animation
          setIsFlipped(true); // Trigger flip animation

          // Close the modal (optional)
          // Wait for the animation to complete
        })
        .catch((e) =>{
          alert("Some thing went wrong.")
        })
        .finally(() => {

          setLoading(false);
        });
    } else {
     
      console.log("Validation Failed", validationErrors);
    }
  };

  useEffect(() => {
    if (open) {
      setIsFlipped(false);
      setAfterSubmission(true);
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: "#1C1D21",
          position: "relative",
          color: "#FDFDFC",
          width: { xs: "350px", sm: "800px" },
          height: { xs: "607px", sm: "595px" },
          margin: "112px auto",
          borderRadius: "8px",
          padding: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >


        {loading && (
          <Box
            sx={{
              position: "relative",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",

              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-24px",
              marginLeft: "-24px",
            }}
          >
            {/* Circular Progress */}
            <CircularProgress
              size={100}
              sx={{
                zIndex: 123456,
                color: green[500],
              }}
            />

            {/* Logo positioned in the center */}
            <Logo
              style={{
                position: "absolute",
                width: "60px", // Adjust size as needed
                height: "60px",
                zIndex: 123456,
              }}
            />
          </Box>
        )}

        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 32,
            color: "white",
            zIndex: 2999,
          }}
        >
          <CloseIcon />
        </IconButton>
        {afterSubmission ? (
          <>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "32px", sm: "36px" },
                fontWeight: 430,
                paddingTop: { xs: "16px", sm: "40px" },
                fontFamily: "Matter-TRIAL",
              }}
              paddingBlockStart={"0px"}
              lineHeight={"42.84px"}
            >
              Schedule a Personalized Demo
            </Typography>

            <Box
              sx={{
                
                     width: { xs: "310px", sm: "400px" },
          height: { xs: "607px", sm: "595px" },
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                marginTop: "24px",
                opacity: loading ? 0.5 : 1,
                boxSizing: "border-box",
              }}
            >
              {[
                {
                  label: "Full Name",
                  name: "fullName",
                  placeholder: "Enter full name",
                },
                {
                  label: "Work Email",
                  name: "workEmail",
                  placeholder: "Enter work email",
                },
                {
                  label: "Organization",
                  name: "organization",
                  placeholder: "Enter organization name",
                },
                { label: "Role", name: "role", placeholder: "Enter job role" },
              ].map((field, index) => (
                <Box key={index} style={{ boxSizing: "border-box" }}>
                  <Typography
                    sx={{
                      fontFamily: "Matter-TRIAL",
                      fontSize: "14px",
                      fontWeight: 430,
                      marginBottom: "4px",
                    }}
                  >
                    {field.label} <sup style={{ color: "#3F8D3C" }}>*</sup>
                
                  </Typography>
                  <TextField
                  error={errors[field.name]}
                   
                    fullWidth
                    variant="outlined"
                    placeholder={field.placeholder}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    sx={{
                      boxSizing:"border-box",
                      backgroundColor: "transparent",
                      border: "1px solid #5F616D",
                      borderRadius: "3px",
                      input: { color: "#FDFDFC", padding: "10px" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#5F616D" },
                        "&:hover fieldset": { borderColor: "#3F8D3C" },
                      },
                    }}
                  />
                </Box>
              ))}

              <Button
                variant={loading?"outlined":"contained"}
                sx={{
                  ...textStyle,
                  backgroundColor: "#3F8D3C",
                  color: "#FFFFFF",
                  marginTop: "12px",
                  marginBottom: "40px",
                  "&:hover": { backgroundColor: "#2E6B2C" },
                  width: { xs: "310px", sm: "400px" },
                  height: "52px",
                }}
                disabled={loading}
                onClick={handleSubmit}
              >
                Book Demo
              </Button>
            </Box>
          </>
        ) : (
          <motion.div
            key={isFlipped ? `animate` : "initial"}
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Box>
              <Box
                sx={{
                  backgroundColor: "#1C1D21",
                  color: "#FDFDFC",
                  width: { xs: "310px", sm: "520px" },
                  height: { xs: "158px", sm: "143px" },
                  marginTop: "192px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "20px",
                  borderRadius: "8px",
                  padding: "0px",
                  display: "flex",
                  flexDirection: "column",
                  boxSizing:'border-box',
                  alignItems: "center",
                }}
              >
                <CheckCircle />
                <Typography
                  paddingLeft={"0px"}
                  paddingRight={"0px"}
                  marginLeft={"0px"}
                  marginRight={"0px"}
                  marginTop={"28px"}
                  fontWeight={430}
                 
                  fontSize={"36px"}
                  lineHeight={"42.84px"}
                  fontFamily={"Matter-TRIAL"}
                  // noWrap={true}
                  textAlign={"center"}
                  sx={{
                    fontWeight:{xs:300,sm:430},
                    fontSize:{xs:"24px",sm:"36px"},
                    noWrap:{xs:false,sm:false},
                    width:{
                      xs:"270px",sm:"720px"
                    },
                    
                    lineHeight:{
                      xs:"28.8px",sm:"42.84px"
                    }
                  }}
                >
                  Request submitted successfully
                </Typography>
              </Box>
              <Typography
                fontWeight={430}
                fontSize={"20px"}
                fontFamily={"Matter-TRIAL"}
                width={"720px"}
                textAlign={"center"}
                marginTop={"0px"}
                sx={{
                  margin:"auto",
                  fontWeight:{xs:430,sm:430},
                  fontSize:{xs:"14px",sm:"20px"},
                  noWrap:{xs:true,sm:true},
                  width:{
                    xs:"270px",sm:"720px"
                  }
                  
                 
                }}
              >
                Thank you for your interest in PortfolioIQ. Our team will reach
                out
                <br />
                to you shortly!
              </Typography>
            </Box>
          </motion.div>
        )}
      
      </Box>
    </Modal>
  );
};

export default ScheduleDemoModal;
