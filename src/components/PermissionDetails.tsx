import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles({
  root: {
    margin: "3em",
  },
  permissionItem: {
    display: "flex",
  },
});

interface PermissionDetailsProps {
  currentPermissionGroup: number;
}

export default function PermissionDetails({
  currentPermissionGroup,
}: PermissionDetailsProps) {
  const [open, setOpen] = React.useState(false);
  const [permissionGroup, setPermissionGroup] = React.useState(
    currentPermissionGroup
  );
  const [permissionList, setPermissionList] = React.useState<string[]>([]);
  const classes = useStyles();

  useEffect(() => {
    if (permissionGroup) {
      setPermissionList(fetchCurrentPermissions(permissionGroup));
    }
  }, [permissionGroup]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPermissionGroup(event.target.value as number);
  };

  const fetchPermissionItems = () => {
    return permissionList.map((p) => (
      <Grid item>
        <Box className={classes.permissionItem}>
          <CheckIcon />
          <Typography>{p}</Typography>
        </Box>
      </Grid>
    ));
  };

  return (
    <div className={classes.root}>
      <Typography variant="body2" color="textSecondary">
        Select permission
      </Typography>
      <br />
      <FormControl>
        <Select
          labelId="select-permission-label"
          id="select-permission-id"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={permissionGroup}
          onChange={handleChange}
        >
          <MenuItem value={1}>Permission group one</MenuItem>
          <MenuItem value={2}>Permission group two</MenuItem>
          <MenuItem value={4}>Permission group four</MenuItem>
        </Select>
      </FormControl>
      <br />
      <Box paddingTop={5}>
        <Grid container spacing={6} justifyContent="flex-start" xs={12}>
          {fetchPermissionItems()}
        </Grid>
      </Box>
    </div>
  );
}

function fetchCurrentPermissions(currentPermissionGroup: number) {
  switch (currentPermissionGroup) {
    case 1:
      return [
        "Manage user permissions",
        "Transfer clients to other user",
        "Add user",
        "load new clients",
      ];
    case 2:
      return [
        "Convert prospect to client",
        "Remove users",
        "Manage user permissions",
        "Transfer clients to other user",
      ];
    case 4:
      return [
        "Convert prospect to client",
        "Remove users",
        "Manage user permissions",
        "Transfer clients to other user",
        "Add user",
        "load new clients",
      ];
    default:
      return [];
  }
}
