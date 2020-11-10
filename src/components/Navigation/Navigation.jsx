import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Nav = styled.nav`
background-color: black;
display: flex;
justify-content: space-between;
align-items: center;

`

const Navigation = () => {
    return (
        <Nav>
        <h4>Logo</h4>
        <nav>
            <Link to="/">home</Link>
            <Link to="/">dashboard</Link>
            <Link to="/">faq</Link>
            <Link to="/">audits</Link>
            <Link to="/">wiki</Link>
        </nav>


      </Nav>
    );
}

export default Navigation;
