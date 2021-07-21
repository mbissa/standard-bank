import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    width: "100%",
  },
  paper: {
    backgroundColor: "white",
  },
  contentTitle: {
    fontSize: "1.2em",
  },
});

interface PageContentItemProps {
  titleText: string;
  paperContent: React.ReactNode;
}

export default function PageContentItem({
  titleText,
  paperContent,
}: PageContentItemProps) {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Box paddingBottom={1}>
        <Typography className={classes.contentTitle}>
          <b>{titleText}</b>
        </Typography>
      </Box>
      <Paper variant="outlined" className={classes.paper}>
        {paperContent}
      </Paper>
    </div>
  );
}
