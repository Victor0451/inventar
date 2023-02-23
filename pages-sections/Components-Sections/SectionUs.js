/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
// core components
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionUs() {
const classes = useStyles();
return (
<div className={classes.section}>
  <div className={classes.container}>
    <GridContainer className={classes.textCenter} justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <h2>Acerca de nosotros</h2>
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
</div>
);
}