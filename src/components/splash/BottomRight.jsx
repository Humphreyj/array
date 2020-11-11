import React from 'react';
import styled from 'styled-components';

import bigLogo from '../../assets/img/array-large-logo.PNG';

import Social from '../social/Social';



const Right = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  right: 0;
  top: 0;
  -webkit-clip-path: polygon(67% 0, 100% 0%, 100% 100%, 34% 100%);
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 34% 100%); 
  background-color: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;

  .right-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 35.5%;
    top: 29%;

    img {
    height: 500px;
    width: 500px;
    }

    .logo-subtitle {
        font-size: 4em;
        color: white;
        margin: 0;
    }

  }
  
  

`;

const BottomRight = () => {
    return (
        <Right>
            <div className="right-logo">
                <img src={bigLogo} alt=""/>
                <h4 className="logo-subtitle">array.finance</h4>
            </div>
            
            <Social />
             
        </Right>
    );
}

export default BottomRight;
