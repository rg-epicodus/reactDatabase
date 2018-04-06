import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './styles.css';

class NavBar extends Component {
  render() {
    return(
      <Navbar inverse collapseOnSelect className={this.props.className}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" id="testBrand">Awesome Logo</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/buttons">
              Buttons
            </NavItem>
            <NavItem eventKey={2} href="/time">
              Time
            </NavItem>
            <NavDropdown eventKey={3} title="Demographics" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="/address">Address</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4} title="Fitness" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Action</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.2}>Another action</MenuItem>
              <MenuItem eventKey={4.3}>Something else here</MenuItem>
              <MenuItem eventKey={4.4}>Separated link</MenuItem>
            </NavDropdown>

          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/join_now">
              Try us for a week
            </NavItem>
            <NavItem eventKey={2} href="/login">
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavBar.defaultProps = {
  className: "Nav-bar",
}

export default NavBar;
