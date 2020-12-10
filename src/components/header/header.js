import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Avatar,
  Grid,
  Hidden,
  IconButton,
  Toolbar,
  Tooltip,
  withStyles,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import BELRON_SOLUTIONS_RGB from "../../images/BELRON_SOLUTIONS_RGB.png";
import { auth } from "../../firebase";

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
  img: {
    height: 80,
    marginTop: 5,
  },
  headerBar: {
    textAlign: "center",
  },
});

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function Header(props) {
  const { classes, onDrawerToggle } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs className={classes.headerBar}>
              <img
                className={classes.img}
                src={BELRON_SOLUTIONS_RGB}
                alt="Belron Solutions"
              />
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton
                color="inherit"
                className={classes.iconButtonAvatar}
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
              >
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem>
                  <ListItemIcon>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="My Profile" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <SettingsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText onClick = {() => {auth.signOut()}} primary="Logout" />
                </StyledMenuItem>
              </StyledMenu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={0} textColor="inherit">
          <Tab textColor="inherit" label="All" />
          <Tab textColor="inherit" label="For approval" />
          <Tab textColor="inherit" label="Not approved" />
          <Tab textColor="inherit" label="Approved for repair" />
          <Tab textColor="inherit" label="Approved invoice basis" />
          <Tab textColor="inherit" label="Invoiced" />
        </Tabs>
      </AppBar> */}
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
