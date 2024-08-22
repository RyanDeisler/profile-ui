"use client";
import { Albert_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const albert_sans = Albert_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: albert_sans.style.fontFamily,
  },
  palette: { primary: { main: "#8E8E8E" } },
});

export default theme;
