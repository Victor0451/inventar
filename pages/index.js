import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Hero from "components/Sections/Hero";
import Servicios from "components/Sections/Servicios";
import Contacto from "components/Sections/Contacto";


export default function Landing() {



  return (
    <>
      <Navbar transparent />

      <main>

        <Hero />

        <Servicios />

        <Contacto />

      </main>

      <Footer />
    </>
  );
}
