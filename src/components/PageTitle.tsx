import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumbs, Typography, Box, Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import { PIC_URL } from "../constants";
import Divider from "@material-ui/core/Divider";
import { UserDetails } from "../App";
import { useEffect } from "react";

const useStyles = makeStyles({
  title: {
    display: "flex",
    width: "50%",
    justifyContent: "flex-start",
  },
  typography: {
    display: "flex",
    width: "300px",
    justifyContent: "space-between",
    paddingTop: "2em",
    alignItems: "center",
  },
  shape: {
    borderRadius: "3em",
    backgroundColor: "#0000FF",
    height: "1em",
    width: "2em",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderStyle: "solid",
    borderColor: "#7777DD",
  },
});

interface OpsPageHeaderProps {
  user?: UserDetails;
  onNotificationsClick?: () => void;
}

export default function OpsPageHeader({
  user,
  onNotificationsClick,
}: OpsPageHeaderProps) {
  const classes = useStyles();

  const [notifications, setNotifications] = React.useState<string[]>([]);

  useEffect(() => {
    setNotifications(fetchNotificationsForUser(user));
  }, [user]);

  return (
    <Grid
      container
      justifyContent="space-between"
      spacing={1}
      alignItems="center"
    >
      <div>
        <Typography variant="h4">Ops user view</Typography>

        <Breadcrumbs separator=">">
          <Link color="inherit" href="/">
            <Typography variant="body2">Manage users</Typography>
          </Link>
          <Link color="textPrimary">
            <Typography variant="body2">
              <b>User</b>
            </Typography>
          </Link>
        </Breadcrumbs>
      </div>

      <div className={classes.typography}>
        <Grid
          container
          justifyContent="space-between"
          spacing={1}
          alignItems="center"
        >
          <Box className={classes.title} onClick={onNotificationsClick}>
            <Typography variant="body2">
              <b>Notifications &nbsp; &nbsp;</b>
            </Typography>
            <Avatar variant="circular" className={classes.shape}>
              <Typography variant="body2">{notifications.length}</Typography>
            </Avatar>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box>
            <Avatar src={PIC_URL} className={classes.avatar} />
          </Box>
        </Grid>
      </div>
    </Grid>
  );
}

function fetchNotificationsForUser(user?: UserDetails): string[] {
  if (user) {
    return [
      "Notification 1",
      "Notification 2",
      "Notification 3",
      "Notification 4",
      "Notification 5",
      "Notification 6",
      "Notification 7",
      "Notification 8",
      "Notification 9",
      "Notification 10",
      "Notification 11",
      "Notification 12",
      "Notification 13",
      "Notification 14",
      "Notification 15",
    ];
  }
  console.log("nahi hai user");
  return [];
}
