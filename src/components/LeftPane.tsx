import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  drawer: {
    width: "90px",
  },
});

export default function LeftPane() {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" elevation={3} className={classes.drawer}>
      <Container maxWidth="sm" style={{ marginTop: "30px" }}>
        <Avatar variant="square" style={{ backgroundColor: "black" }}>
          {" "}
        </Avatar>
      </Container>
    </Drawer>
  );
}
