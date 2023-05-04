import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import HeroProyectos from 'components/Sections/ProyectosInversion/HeroProyectos';
import Contenido from 'components/Sections/ProyectosInversion/Contenido';



export default function ProyectosInversion() {



    return (
        <>
            <Navbar transparent />

            <main>

                <HeroProyectos />

                <Contenido />


            </main>

            <Footer />
        </>
    )
}
