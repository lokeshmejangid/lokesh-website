import React from "react";
import Particles from 'react-particles-js';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: "fixed",
    opacity: "0.3"
  },
}));

const Parti = () => {
  const classes = useStyles();

  return (
    <Particles
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "black",
            },
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: false,
              speed: 6,
              size_min: 0,
              sync: true,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
      }}
    />
  );
};

export default Parti;
