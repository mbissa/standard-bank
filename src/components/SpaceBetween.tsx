import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  spaceComponent: {
    width: "3em",
    height: "3em",
  },
});

export default function SpaceBetween() {
  const classes = useStyles();
  return <Box className={classes.spaceComponent} />;
}
