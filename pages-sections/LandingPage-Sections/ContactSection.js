import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";
import {
  Alert
} from '@mui/material'

const useStyles = makeStyles(styles);

export default function ContactSection() {

  const [errores, guardarErrores] = useState(null)

  let nombreRef = React.createRef()
  let mailRef = React.createRef()
  let msjRef = React.createRef()


  const classes = useStyles();

  const enviarMsj = async () => {

    guardarErrores(null)

    let msj = {

      nombre: nombreRef.current.value,
      mail: mailRef.current.value,
      mensaje: msjRef.current.value

    }

    if (msj.nombre === "") {

      guardarErrores("Debes ingresar el nombre")

    } else if (msj.mail === "") {

      guardarErrores("Debes ingresar la direccion de email")

    } else if (msj.mensaje === "") {

      guardarErrores("Debes ingresar el mensaje")

    } else {

      console.log(msj)

    }


  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contactanos.</h2>
          <h4 className={classes.description}>
            Si te interesa nuestros servicios, podes contactarnos para mas informacion.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Nombre"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inRef={nombreRef}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inRef={mailRef}
                />
              </GridItem>
              <CustomInput
                labelText="Mensaje"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
                inRef={msjRef}
              />


              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color="primary" onClick={enviarMsj}>Enviar</Button>
              </GridItem>

              {errores ? (
                <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                  <Alert severity="error">ATENCION — {errores}</Alert>
                </GridItem>
              ) : null}
            </GridContainer>

          </form>
        </GridItem>





      </GridContainer>
    </div >
  );
}
