import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import HeroLogistica from 'components/Sections/Logistica/HeroLogistica';
import Contenido from 'components/Sections/Logistica/Contenido';



export default function Logistica() {



    return (
        <>
            <Navbar transparent />

            <main>

                <HeroLogistica />

                <Contenido />


            </main>

            <Footer />
        </>
    )
}
