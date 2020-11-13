import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import UIC from '../../context/Context';
import littleLogo from '../../assets/img/array-little-logo.PNG';


const Nav = styled.div`
    display: flex;
    padding-left: 130px;
    height: 80px;
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
        margin-top: 0;

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
    .fas {
        display: none;
    }

    @media(max-width: 970px) {
        img {
            height: 40px;
            width: 40px;
        }
        h4 {
            font-size: 2em;
        }
        nav {
            margin-left: 0px;
            a {
                margin: 0 15px;
                font-size: 2em;
            }
        }
    }
    @media(max-width: 500px) {
        justify-content: space-between;
        padding: 0 15px;
        nav {
            display: none;
        }
        .fas {
            display: inline;
            color: rgba(255,255,255, 0.8);
            font-size: 2.3em;
            transition: all 0.3s ease;
        }
        .rotate {
            transform: rotate(90deg);
        }
    }


`

const Navigation = () => {
    const {toggleSidedrawer,open}=useContext(UIC)
    return (
        <Nav className="header">
            <img src={littleLogo} alt="array logo"/>
            <nav>
                <Link to='/' className="nav-link">array.finance</Link>
                <Link to='/roadmap' className="nav-link">roadmap</Link>
                {/* <Link to='/faq' className="nav-link">faq</Link> */}
                <Link to='/team' className="nav-link">team</Link>
            </nav>
            <i 
            className={open ? "fas fa-bars rotate" : "fas fa-bars"} 
            onClick={toggleSidedrawer}
            ></i>
        </Nav>
    );
}

export default Navigation;
