import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsIcon from '@material-ui/icons/Settings';
import Report from '@material-ui/icons/Report';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import {
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Iris_Genral_Logo from '../../images/Iris-genral-logo.png'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const categories = [
  {
    id: 'Case Management',
    children: [
      { link: '/active-missions', name: 'Active Missions', icon: <SettingsEthernetIcon />, active: true },
      { link: '/archieves', name: 'Archieves', icon: <DnsRoundedIcon /> },
      { link: '/summary', name: 'Summary', icon: <PermMediaOutlinedIcon /> },
    ],
  },
  {
    id: 'Settings',
    children: [
      { link: '/profile', name: 'Profile', icon: <SettingsIcon /> },
      { link: '/business-supervisor', name: 'Business/Supervisor', icon: <SettingsEthernetIcon /> },
      { link: '/report', name: 'Report', icon: <Report /> },
      { link: '/insurance-info', name: 'Insurance Information', icon: <AnnouncementIcon /> },
      { link: '/news-releases', name: 'News Releases', icon: <AnnouncementIcon /> },
    ],
  },
];

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  menuLink: {
    textDecoration: 'inherit',
    color: 'inherit',
    cursor: 'pointer',
  },
  img: {
    height: '58px',
    marginLeft: '25px'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
  minWidth: {
    minWidth: '500px'
  },
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes, ...other } = props;

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
    <Drawer variant="permanent" {...other}>
        <List disablePadding>
          <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
            <img className={classes.img} src={Iris_Genral_Logo} alt='Belron Solutions' />
          </ListItem>
          <Link onClick={handleClickOpen} className={classes.menuLink}>
            <ListItem button className={clsx(classes.item, classes.itemCategory)}>
              <ListItemIcon className={classes.itemIcon}>
                <AddCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText classes={{primary: classes.itemPrimary,}}>
                New Mission
              </ListItemText>
            </ListItem>
          </Link>
          {categories.map(({ id, children }) => (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary,
                  }}>
                  {id}
                </ListItemText>
              </ListItem>
              {children.map(({ link, name: childId, icon, active }) => (
                <Link to={link} className={classes.menuLink}>                
                <ListItem
                  key={childId}
                  button
                  className={clsx(classes.item, active && classes.itemActiveItem)}>
                  <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}>
                    {childId}
                  </ListItemText>
                </ListItem>
                </Link>
              ))}
              <Divider className={classes.divider} />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Do you want to create a new case?</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText> */}
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="damageDate"
                  type="date"
                  label="Please enter the date of damage"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
              <div>
                <TextField
                  id="insuranceCompany"
                  label="Please select insurance company"
                  select>
                    <MenuItem value="10">Ten</MenuItem>
                    <MenuItem value="20">Twenty</MenuItem>
                </TextField>
                {/* <InputLabel id="insuranceCompanyLabel">Please select insurance company</InputLabel>
                  <Select
                    labelId="insuranceCompanyLabel"
                    id="insuranceCompany"
                    value={10}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select> */}
              </div>
              <div>
                <TextField
                  id="jobType"
                  label="Please select job type"
                  select>
                    <MenuItem value="1">Repair</MenuItem>
                    <MenuItem value="2">Windshield</MenuItem>
                    <MenuItem value="3">Side Window</MenuItem>
                    <MenuItem value="4">Rear Window</MenuItem>
                    <MenuItem value="5">Ponoramic</MenuItem>
                    <MenuItem value="6">Others</MenuItem>
                  </TextField>
              </div>
            </form>
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Create assignment
            </Button>
          </DialogActions>
        </Dialog>
      </div>      
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);

