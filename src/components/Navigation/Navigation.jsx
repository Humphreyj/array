import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import littleLogo from '../../assets/img/array-little-logo.PNG';


const Nav = styled.div`
    display: flex;
    padding: 0 30px;
    height: 125px;
    justify-content: flex-start;
    align-items: center;
    background-color: #121212;
    color: white;
    img {
        height: 50px;
        width: 50px;
    }
    h4 {
        font-size: 3em;
        margin-left: 25px;
    }
    nav {
        margin-left: 25px;
        a {
            font-size: 2.8em;
            margin: 0 40px;
            text-decoration: none;
            color: white;
            
       
        }
    }


`

const Navigation = () => {
    return (
        <Nav className="header">
            <img src={littleLogo} alt="array logo"/>
            <nav>
                <Link to='/' className="nav-link">home</Link>
                <Link to='#' className="nav-link">roadmap</Link>
                <Link to='#' className="nav-link">faq</Link>
                <Link to='/team' className="nav-link">team</Link>
            </nav>
        </Nav>
    );
}

export default Navigation;
