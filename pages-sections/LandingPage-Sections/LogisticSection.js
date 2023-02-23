import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function LogisticSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nuestros servicios de Logistica.</h2>
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
              title="Interna"
              icon={Chat}
              iconColor="info"
              vertical
            />
            <h5 className={classes.description}>
              Recepción.
              Sistemas.
              Almacenes.
              Gestion de Inversion.
              Indicadores.
              Seguridad.
              Flujo de Materiales.
              Fabrica.
              Costo.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Externa"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
            <h5 className={classes.description}>
              Distribución.
              Sistemas.
              Exportaciones.
              Multimodales.
              Cotizaciones.
              Caminos Criticos.
              Costos.
              Normas y Facturación.
              Icoterm y Aduanas.
              Urgencias.
            </h5>
          </GridItem>

        </GridContainer>
      </div>
    </div>
  );
}
