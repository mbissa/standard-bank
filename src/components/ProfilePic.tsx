import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import {
  Theme,
  makeStyles,
  withStyles,
  createStyles,
} from "@material-ui/core/styles";

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "1px solid currentColor",
        content: '""',
      },
    },
  })
)(Badge);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    picture: {
      width: "140px",
      height: "140px",
    },
  })
);

interface ProfilePicProps {
  profilePicUrl: string;
}

export default function ProfilePic({ profilePicUrl }: ProfilePicProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        variant="dot"
      >
        <Avatar
          alt="Profile Pic"
          src={profilePicUrl}
          className={classes.picture}
        />
      </StyledBadge>
    </div>
  );
}
