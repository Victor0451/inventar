import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProyectSection from "/pages-sections/LandingPage-Sections/ProyectSection.js";
import ContactSection from "/pages-sections/LandingPage-Sections/ContactSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Inicio"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/proyectbg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Tus ideas comienzan con nosotros.</h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore ad eveniet tempore ab eius tenetur velit
                debitis nemo iure laboriosam necessitatibus rerum inventore iste, optio sint itaque nesciunt quae veniam
                suscipit nisi! Quas praesentium vitae, eius laboriosam reiciendis dolores! Eligendi quis autem totam
                reiciendis! Fuga alias accusamus consequuntur suscipit mollitia, perferendis officiis voluptates eum, libero
                molestias expedita. At maiores natus ullam repudiandae quae officia laborum modi, dicta magnam, repellendus
                nemo, deserunt esse minus quisquam quo exercitationem error iste saepe dolores numquam assumenda quod nam
                nesciunt aut. Qui maiores assumenda praesentium, provident veritatis ut commodi tenetur dolore doloremque
                ipsum nobis.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>


      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProyectSection />
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
