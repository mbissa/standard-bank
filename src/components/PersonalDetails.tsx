import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography, Grid } from "@material-ui/core";
import ProfilePic from "./ProfilePic";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

interface PersonalDetailsProps {
  userName: string;
  firstTeamName: string;
  secondTeamName: string;
  email: string;
  mobile: string;
  profilePicUrl: string;
}

export default function PersonalDetails({
  userName,
  firstTeamName,
  secondTeamName,
  email,
  mobile,
  profilePicUrl,
}: PersonalDetailsProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box padding={8}>
        <ProfilePic profilePicUrl={profilePicUrl} />
      </Box>
      <Box paddingTop={8} paddingBottom={6}>
        <Typography color="textSecondary" variant="body2">
          <b>Ops user</b>
        </Typography>
        <Box paddingBottom={1}>
          <Typography color="textPrimary" variant="h5">
            {userName}
          </Typography>
        </Box>
        <Typography color="textSecondary" variant="body2">
          <b>{`${firstTeamName}, ${secondTeamName}`}</b>
        </Typography>
        <br />
        <Typography color="textPrimary">{email}</Typography>
        <Typography color="textPrimary">{mobile}</Typography>
        <br />
        <br />
        <Box paddingLeft={1}>
          <Grid container spacing={1} justifyContent="space-between">
            <Button variant="outlined" disabled={true}>
              <Typography variant="body2">
                <b>UNLOCK</b>
              </Typography>
            </Button>
            <Button variant="outlined" color="primary">
              <Typography variant="body2">
                <b>EDIT PROFILE</b>
              </Typography>
            </Button>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
