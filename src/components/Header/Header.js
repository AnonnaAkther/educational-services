import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1 className="text-center text-success">Learning Proccess</h1>
            <div style={{minHeight: '70px', padding: '10px', textDecoration: 'none'}} className="header bg-info text-center g-8'">
                <Navbar bg="light" text="dark">
    <Container>
    <Navbar.Brand href="#home">Learning</Navbar.Brand>
    <Nav>
      <NavLink style={{textDecoration: 'none', marginRight: '10px'}}to="/home">Home</NavLink>
      <NavLink style={{textDecoration: 'none', marginRight: '10px'}} to="/services">Services </NavLink>
      <NavLink style={{textDecoration: 'none', marginRight: '10px'}} to="/about">About</NavLink>
      <NavLink style={{textDecoration: 'none', marginRight: '10px'}} to="/learner">Our Learner</NavLink>
    </Nav>
    </Container>
  </Navbar>
            </div>
        </div>
    );
};

export default Header;