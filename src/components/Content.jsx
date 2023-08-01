import React from "react";
import { Nav } from "./Navbar";
import { Footer } from "./Footer";
import { ThemeProvider } from "@material-tailwind/react";

export default function Content({ children }) {
  return (
    <ThemeProvider>
      <Nav />
      <section className="mx-auto">{children}</section>
      <Footer />
    </ThemeProvider>
  );
}
