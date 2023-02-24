import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {
MonetizationOn,
BusinessCenterSharp,
MoneyOff,
GpsFixed
  
} from "@material-ui/icons";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProyectSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Estos son nuestros proyectos.</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <br />
      <br />
      <br />
      <br />
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Inversiones"
              icon={MonetizationOn}
              iconColor="info"
              vertical
            />
            <h5 className={classes.description}>
              Capex-Opex - Cash Flow.
              Punto de equilibrio.
              Alternativas.
              Soluciones.
              Opciones.
              Presupuesto.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Rentabilidad"
              icon={BusinessCenterSharp}
              iconColor="success"
              vertical
            />
            <h5 className={classes.description}>
              Punto de equilibrio.
              VAN TIN TOR.
              Resultados.
              Financiamiento.
              Analisis de Sensibilidad.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Costos"
              icon={MoneyOff}
              iconColor="danger"
              vertical
            />
            <h5 className={classes.description}>
              Punto de equilibrio.
              VAN TIN TOR.
              Resultados.
              Financiamiento.
              Analisis de Sensibilidad.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Localizacion"
              icon={GpsFixed}
              iconColor="primary"
              vertical
            />
            <h5 className={classes.description}>
              Mercados de Exportacion.
              Disponibilidad de Recursos.
              Costos y Disponibilidad de Zonas.
              Estructuras Impositivas y Legales.
              Impacto Ambiental.
              Medios de Transporte.
              Energias.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
