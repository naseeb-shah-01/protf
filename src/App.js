import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { ToastProvider } from 'react-toast-simple';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,      // Extra small devices (mobile)
      sm: 480,    // Small devices (tablets)
      md: 1280,   // Medium devices (laptops)
      lg: 1440,   // Large devices (desktops)
      xl: 2560,   // Extra large devices
    },
  },
});

function App() {
  return (
    <ToastProvider>
    <ThemeProvider theme={theme}>

      <Navbar />
      <Home />
    </ThemeProvider>
    </ToastProvider>
  );
}

export default App;
