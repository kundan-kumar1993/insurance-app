import React from "react";
import PropTypes from "prop-types";
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
  AppBar,
  Toolbar,
  Grid,
  TextField,
  Button,
  Tooltip,
  IconButton
} from "@material-ui/core";
import { CssBaseline, Hidden } from "@material-ui/core";
import Navigator from "../menu/navigator";
import Content from "../dashboard/content";
import Header from "../header/header";
import Copyright from "../footer/footer";
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3",
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#18202c",
      },
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: "none",
        margin: "0 16px",
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up("md")]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#404854",
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: "inherit",
        marginRight: 0,
        "& svg": {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: "#eaeff1",
  },
  footer: {
    padding: theme.spacing(2),
    background: "#eaeff1",
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    margin: "-30px 0px 15px 0px",
    borderRadius: '10px',
  },
};

function Home(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

    return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <Router>
            <nav className={classes.drawer}>
              <Hidden smUp implementation="js">
                <Navigator
                  PaperProps={{ style: { width: drawerWidth } }}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                />
              </Hidden>
              <Hidden xsDown implementation="css">
                <Navigator PaperProps={{ style: { width: drawerWidth } }} />
              </Hidden>
            </nav>
            <div className={classes.app}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <main className={classes.main}>
              <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                <Toolbar>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <SearchIcon className={classes.block} color="inherit" />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        fullWidth
                        placeholder="Reg.nr, navn, saksnummer..."
                        InputProps={{
                          disableUnderline: true,
                          className: classes.searchInput,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" className={classes.addUser}>
                        Add user
                      </Button>
                      <Tooltip title="Reload">
                        <IconButton>
                          <RefreshIcon className={classes.block} color="inherit" />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
              <Switch>
                <Route path="/active-missions">
                  <Content />
                </Route>
                <Route path="/archieves">
                  <Archieves />
                </Route>
                <Route path="/summary">
                  <Summary />
                </Route>
              </Switch>
              
            </main>
            <footer className={classes.footer}>
              <Copyright />
            </footer>
          </div>
          </Router>
        </div>
      </ThemeProvider>
    );

}

function Archieves() {
  return (
    <div>Archieves content!!</div>
  );
}

function Summary() {
  return (
    <div>Summary content!!</div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
