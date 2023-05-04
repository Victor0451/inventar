import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import HeroMejora from 'components/Sections/MejoraContinua/HeroMejora';
import Contenido from 'components/Sections/MejoraContinua/Contenido';




export default function MejoraContinua() {



    return (
        <>
            <Navbar transparent />

            <main>

                <HeroMejora />

                <Contenido />

            </main>

            <Footer />
        </>
    )
}
