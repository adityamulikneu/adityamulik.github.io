import React from 'react';
import { NavLink, withRouter} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar: {
      backgroundColor: 'white'
    },
    menuButton: {
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
      justifyContent:"flex-right",
      // marginLeft: "60px",
      marginTop: "3px",
      fontFamily: "Dancing Script, cursive",
      fontWeight: "bold", 
      alignItems: "center",
    },
    navlink: {
      textDecoration: "none",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontSize: "20px",
      color: "black",
      padding: "15px",
    },
    isactive: {
      fontWeight: "bold",
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
        <AppBar className={classes.appbar} position="fixed" elevation={0}>
        <Toolbar className={classes.headerClass}>          

          {matches ? 
            (
              <Grid 
                container
                justify="space-between"
                alignItems="center"
              >
                <Grid 
                  item
                >
                  <Typography variant="h4" className={classes.title}>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black', alignItems: "center",}}>
                      Aditya Mulik
                    </NavLink>
                  </Typography>
                </Grid>
                <Grid 
                  item
                >
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
                      <MenuIcon />
                  </IconButton>
                  <div>
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
                      <MenuItem className={classes.menuitem} onClick={() => handleMenuClick('/skills')}>Skills</MenuItem>  
                      <MenuItem className={classes.menuitem} onClick={() => handleMenuClick('/projects')}>My Work</MenuItem>
                      <MenuItem className={classes.menuitem} onClick={() => handleMenuClick('/aboutme')}>About Me</MenuItem>                                          
                    </Menu>
                  </div>
                </Grid>
              </Grid>
            ):                     
            (
              <Grid 
                container
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h4" className={classes.title}>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black', alignItems: "center",}}>
                      Aditya Mulik
                    </NavLink>
                  </Typography>
                </Grid>
                <Grid item>                
                  <NavLink to="/" className={classes.navlink} activeClassName={classes.isactive} exact={true}>
                    Home
                  </NavLink>  
                  <NavLink to="/skills" className={classes.navlink} activeClassName={classes.isactive} style={{ textDecoration: 'none' }}>
                    Skills
                  </NavLink>
                  <NavLink to="/projects" className={classes.navlink} activeClassName={classes.isactive} style={{ textDecoration: 'none' }}>
                    My Work
                  </NavLink> 
                  <NavLink to="/aboutme" className={classes.navlink} activeClassName={classes.isactive} style={{ textDecoration: 'none' }}>
                    About Me
                  </NavLink>                                      
                </Grid>
              </Grid>              
            )
          }                                                     
        </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin}/>
    </div>
  )
};

export default withRouter(Header);