import React from 'react'

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import HeroSupply from 'components/Sections/SupplyChain/HeroSupply';
import Contenido from 'components/Sections/SupplyChain/Contenido';




export default function SupplyChain() {



    return (
        <>
            <Navbar transparent />

            <main>

                <HeroSupply />

                <Contenido />

            </main>

            <Footer />
        </>
    )
}
