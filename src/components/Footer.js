import { Box, Typography, Button } from "@mui/material";

export const Footer = () => {
  const content=[
    "About us","Private Investors","Careers","Public Investors","Customers","Data Teams","Resources","","Media"
  ]
  return (
    <Box width={"100%"}>
      <Box
        width={"1280px"}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        margin={"auto"}
        mt={"80px"}
      >
        <Box width={"50%"}>
          <Typography
            fontWeight={300}
            fontSize={36}
            fontFamily={"Matter-TRIAL"}
          >
            Ready to Transform Your Portfolio Operations?
          </Typography>
          <Typography
            fontWeight={430}
            fontSize={15}
            fontFamily={"Matter-TRIAL"}
            mt={"25px"}
          >
            Join leading funds in modernizing their portfolio data management
          </Typography>
        </Box>
        <Box width={"50%"}>
<Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
{
            content.map((item)=><Typography
            width={"50%"}
            marginTop={"20px"}
            fontWeight={430}
            fontSize={15}
            fontFamily={"Matter-TRIAL"}
          >
           {item}
          </Typography>)
          }

</Box>

     
        
        
        </Box>
      </Box>
    </Box>
  );
};
