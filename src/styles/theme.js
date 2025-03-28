"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 800,
    },
  },
});

export default theme;
