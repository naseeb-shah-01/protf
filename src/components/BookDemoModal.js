import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

import { textStyle } from "./Navbar";
import { ReactComponent as CheckCircle } from "../assets/images/checkCircle.svg";

const ScheduleDemoModal= ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    organization: "",
    role: "",
  });
  const [afterSubmission,setAfterSubmission]=useState(true)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: "#1C1D21",
          color: "#FDFDFC",
          width: { xs: "350px", sm: "800px" },
          height: { xs: "607px", sm: "595px" },
          margin: "112px auto",
          borderRadius: "8px",
          padding: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
<Box>

        <Box
       
       sx={{
        backgroundColor: "#1C1D21",
        
        color: "#FDFDFC",
        width: { xs: "350px", sm: "520px" },
        height: { xs: "607px", sm: "143px" },
        marginTop:"192px",
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:"20px",
        borderRadius: "8px",
        padding: "0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
        >
            <CheckCircle/>
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
            
            noWrap={true}
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
>
  Thank you for your interest in PortfolioIQ. Our team will reach out
  <br />
  to you shortly!
</Typography>



        </Box>
    {!afterSubmission &&   <>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "32px", sm: "36px" },
            fontWeight: 430,
            paddingTop: { xs: "16px", sm: "40px" },
          }}
        >
          Schedule a Personalized Demo
        </Typography>

        <Box sx={{ width: "400px", display: "flex", flexDirection: "column", gap: "24px", marginTop: "24px" }}>
          {[
            { label: "Full Name", name: "fullName", placeholder: "Enter full name" },
            { label: "Work Email", name: "workEmail", placeholder: "Enter work email" },
            { label: "Organization", name: "organization", placeholder: "Enter organization name" },
            { label: "Role", name: "role", placeholder: "Enter job role" },
          ].map((field, index) => (
            <Box key={index}>
              <Typography sx={{ fontSize: "14px", fontWeight: 430, marginBottom: "4px" }}>
                {field.label} <sup style={{ color: "#3F8D3C" }}>*</sup>
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder={field.placeholder}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                sx={{
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
            variant="contained"
            sx={{ 
             ...textStyle,
                
                
                backgroundColor: "#3F8D3C", color: "#FFFFFF", marginTop: "12px", "&:hover": { backgroundColor: "#2E6B2C" },
        
        
        width:"400px",height:"52px"
        
        }}
            onClick={handleSubmit}
          >
            Book Demo
          </Button>
        </Box></>}
      </Box>
    </Modal>
  );
};

export default ScheduleDemoModal;
