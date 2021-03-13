import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
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
    <Container maxWidth="sm">
      <AppBar className={classes.appbar} position="fixed" elevation={0}>
      <Toolbar className={classes.headerClass}>
        <h1 className="name-header">
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            Aditya Mulik
          </NavLink>
        </h1>
        <div className="navbar-header">
          <NavLink to="/" className="navlink" activeClassName="is-active" exact={true} style={{ textDecoration: 'none' }}>
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
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin}/>
    </Container>
  </div>
)
);

export default Header;