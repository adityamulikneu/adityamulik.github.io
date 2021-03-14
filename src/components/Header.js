import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink, withRouter} from 'react-router-dom';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    appbar: {
      backgroundColor: 'white'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'black',
    },
    menuitem: {
      color: 'black',
    },
    flex: {
      flex: 1
    },
    title: {
      flexGrow: 1,
      marginLeft: "3em"
    },
    navlink: {
      textDecoration: "none",
    },
    toolbarMargin: theme.mixins.toolbar
  })
);


const Header = (props) => {

  const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageUrl) => {
    history.push(pageUrl);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <AppBar className={classes.appbar} position="fixed" elevation={0}>
        <Toolbar className={classes.headerClass}>
          <Typography variant="h5" className={classes.title}>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              Aditya Mulik
            </NavLink>
          </Typography>
          
          {matches ? 
            (
              <div>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
                    <MenuIcon />
                </IconButton>
                <div className="navbar-header">
                  <Menu
                    id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={handleClose}
                  >
                    <MenuItem className={classes.menuitem} onClick={() => handleMenuClick('/')}>Home</MenuItem>
                    <MenuItem className={classes.menuitem} onClick={() => handleMenuClick('/aboutme')}>About Me</MenuItem>
                    <MenuItem className={classes.menuitem} onClick={() => handleMenuClick('/projects')}>My Work</MenuItem>
                    <MenuItem className={classes.menuitem} onClick={() => handleMenuClick('/contact')}>Contact</MenuItem>  
                  </Menu>
                </div>
              </div>
            ):                     
            (
              <div>
                <NavLink to="/" className="navlink" activeClassName="is-active" exact={true}>
                    Home
                </NavLink>  
                <NavLink to="/aboutme" className="navlink" activeClassName="is-active" style={{ textDecoration: 'none' }}>
                  About Me
                </NavLink>  
                <NavLink to="/projects" className="navlink" activeClassName="is-active" style={{ textDecoration: 'none' }}>
                  My Work
                </NavLink>   
                <NavLink to="/contact" className="navlink" activeClassName="is-active" style={{ textDecoration: 'none' }}>
                  Contact
                </NavLink>
              </div> 
            )
          }                                    
                 
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin}/>
      </Container>
    </div>
  )
};

export default withRouter(Header);