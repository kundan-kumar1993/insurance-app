import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  withStyles,
  Grid,
  TextField,
  Button,
  Container,
  Avatar,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Box from "@material-ui/core/Box";
import Copyright from "../footer/footer";
import { auth } from "../../firebase";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    debugger;
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email!", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };
  const { classes } = props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userEmail"
            label="Email Address"
            name="userEmail"
            autoComplete="userEmail"
            autoFocus
            onChange={(event) => onChangeHandler(event)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userPassword"
            label="Password"
            type="password"
            id="userPassword"
            autoComplete="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="password-reset" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withStyles(styles)(SignIn);
