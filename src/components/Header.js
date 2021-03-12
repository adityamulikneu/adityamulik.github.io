import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typewriter from 'typewriter-effect/dist/core';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core';

// const Header = () => (
//   <header>
//     <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
//     <NavLink to="/projects" activeClassName="is-active">My Work</NavLink>
//     <NavLink to="/aboutme" activeClassName="is-active">About Me</NavLink>
//     <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
//   </header>
// );

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    backgroundColor: 'white'
  },
  flex: {
    flex: 1
  },
  headerClass: {
    justifyContent: "space-evenly"
  },
  toolbarMargin: theme.mixins.toolbar
});

const Header = withStyles(styles) (({classes}) => (
  <div className={classes.root}>
    <AppBar className={classes.appbar} position="fixed" elevation={0}>
      <Toolbar className={classes.headerClass}>
        <NavLink to="/" activeClassName="is-active" exact={true}>
            Home
        </NavLink>
        <NavLink to="/aboutme" activeClassName="is-active">
          About Me
        </NavLink>
        <NavLink to="/projects" activeClassName="is-active">
            My Work
        </NavLink>        
        <NavLink to="/contact" activeClassName="is-active">
            Contact
        </NavLink>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin}/>
  </div>
)
);

export default Header;