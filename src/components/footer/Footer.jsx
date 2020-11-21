import React from 'react';
import styled from 'styled-components';

//logo
import logo from '../../assets/img/arraylogofinal.png';
//components
import Social from '../social/Social';

const Footsies = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    position: relative;
    bottom: 0;
    padding: 0 3%;
    background-color: #121212;
    
    
    

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 60px;
            width: 60px;
        }
    }

    .flavor {
        h4 {
            color: white;
            font-size: 1.8em;
        }
    }
`;

const Footer = () => {
    return (
        <Footsies>
            <div className="logo">
                <img src={logo} alt="Array logo"/>
            </div>
            <Social />
            <div className="flavor">
                <h4>array.push($profits)</h4>
            </div>
            
        </Footsies>
    );
}

export default Footer;
