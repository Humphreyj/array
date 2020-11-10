import React from 'react';
import styled from 'styled-components';

import bigLogo from '../assets/img/array-large-logo.PNG';



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
  img {
      position: relative;
      left: 30%;
      top: 28%;
      height: 500px;
      width: 500px;
  }
  

`;

const BottomRight = () => {
    return (
        <Right>
            <img src={bigLogo} alt=""/>
             
        </Right>
    );
}

export default BottomRight;
