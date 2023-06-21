import React from 'react'
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import HeroIdeacion from 'components/Sections/IdeacionNegocio/HeroIdeacion';
import Contenido from 'components/Sections/IdeacionNegocio/Contenido';

export default function ideacionnegocios() {
    return (
        <>
            <Navbar transparent />

            <main>

                <HeroIdeacion />

                <Contenido />

            </main>

            <Footer />
        </>
    )
}
