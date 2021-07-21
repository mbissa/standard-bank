import React from "react";
import LeftPane from "./components/LeftPane";
import OpsPageHeader from "./components/PageTitle";
import { makeStyles } from "@material-ui/core/styles";
import PageContentItem from "./components/PageContentItem";
import PersonalDetails from "./components/PersonalDetails";
import PermissionDetails from "./components/PermissionDetails";
import SpaceBetween from "./components/SpaceBetween";
import { PIC_URL } from "./constants";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box, Button, Typography, Grid } from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
  },
  page: {
    marginTop: "30px",
    marginLeft: "50px",
    marginRight: "200px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
});

export interface UserDetails {
  userName: string;
  firstTeamName: string;
  secondTeamName: string;
  email: string;
  mobile: string;
  currentPermissionGroup: number;
}

export default function App() {
  const classes = useStyles();

  const [user, setUser] = React.useState<UserDetails>();

  useEffect(() => {
    setUser(fetchUserDetails());
  }, []);

  const personalDetails = () =>
    user && (
      <PersonalDetails
        profilePicUrl={PIC_URL}
        userName={user.userName}
        firstTeamName={user.firstTeamName}
        secondTeamName={user.secondTeamName}
        email={user.email}
        mobile={user.mobile}
      />
    );

  const permissionDetails = () =>
    user && (
      <PermissionDetails currentPermissionGroup={user.currentPermissionGroup} />
    );

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <LeftPane />
        <div className={classes.page}>
          <OpsPageHeader user={user} />
          <SpaceBetween />
          <PageContentItem
            titleText="Personal details"
            paperContent={personalDetails()}
          />
          <SpaceBetween />
          <PageContentItem
            titleText="Permissions"
            paperContent={permissionDetails()}
          />
          <SpaceBetween />
          <Grid container justifyContent="flex-end" spacing={2}>
            <Box padding={2}>
              <Button variant="outlined" color="primary">
                <Typography variant="body2">
                  <b>CANCEL</b>
                </Typography>
              </Button>
            </Box>
            <Box padding={2}>
              <Button variant="contained" color="primary">
                <Typography variant="body2">
                  <b>SAVE</b>
                </Typography>
              </Button>
            </Box>
          </Grid>
        </div>
      </div>
    </>
  );
}

function fetchUserDetails(): UserDetails {
  return {
    userName: "Shanna Hanke",
    firstTeamName: "First team name",
    secondTeamName: "Second team name",
    email: "shanna.hanke@domain.co.za",
    mobile: "079 011 0065",
    currentPermissionGroup: 4,
  };
}
