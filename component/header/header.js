import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Box,
  AppBar,
  Tab,
  Tabs,
  MenuItem
} from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  gridItems: {
    padding: 30,
  },
  tab: {
    flexGrow: 1,
    backgroundColor: "red",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container spacing={0} alignItems="center" justify="center">
        <Grid
          className={classes.gridItems}
          item
          xs={12}
          style={{ background: "#86b817" }}
        ></Grid>
        <div className={classes.tab}>
        <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Home" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          <MenuItem>Login</MenuItem>
        </div>
      </Grid>
    </>
  );
};

export default Header;
