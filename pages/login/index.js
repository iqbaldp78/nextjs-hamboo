import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: 1,
    alignContent: "center",
    textAlign: "center",
    padding: 10,
  },
}));

const Login = () => {
  const classes = useStyles();

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      router.push("/Home");
    },
  });

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: "70vh" }}
    >
      <Grid item xs={6}>
        <Paper className={classes.paper} variant="outlined" square>
          <Typography color="textSecondary" gutterBottom align="center">
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              variant="outlined"
              label="email"
              style={{ marginBottom: "10px" }}
              fullWidth
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              helperText={
                formik.touched.email && formik.errors.email ? (
                  <span>{formik.errors.email}</span>
                ) : null
              }
              error={formik.touched.email && formik.errors.email}
            />

            <TextField
              id="password"
              name="password"
              type="Password"
              variant="outlined"
              label="Password"
              fullWidth
              style={{ marginBottom: "10px" }}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              helperText={
                formik.touched.password && formik.errors.password ? (
                  <span>{formik.errors.password}</span>
                ) : null
              }
              error={formik.touched.password && formik.errors.password}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth={true}
              type="submit"
              style={{ marginBottom: "10px" }}
            >
              login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
