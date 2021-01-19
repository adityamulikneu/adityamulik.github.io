import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h4>Aditya Mulik</h4>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/projects" activeClassName="is-active">My Work</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
  </header>
);

export default Header;