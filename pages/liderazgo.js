import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import HeroLiderazgo from 'components/Sections/Liderazgo/HeroLiderazgo';
import Contenido from 'components/Sections/Liderazgo/Contenido';




export default function Liderazgo() {



    return (
        <>
            <Navbar transparent />

            <main>

                <HeroLiderazgo />

                <Contenido />

            </main>

            <Footer />
        </>
    )
}
