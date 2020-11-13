import React from 'react';
import styled from 'styled-components';

import bigLogo from '../../assets/img/arraylogofinal.png';




const Right = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
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
    left: 33.5%;
    top: 32%;

        img {
        width: 25%;
        height: auto;
        }

        .logo-subtitle {
            font-size: 3.3em;
            color: white;
            margin: 0;
        }
        @media(max-width: 1055px) {
            left: 31%;
            top: 30%;
        }
        @media(max-width: 970px) {
            left: 33%;
            top: 70%;
            .logo-subtitle {
                font-size: 2em;
            }
        }
        //max-width 970px
        @media(max-width: 820px) {
            top: 58%;
            left: 30%;
        }
        @media(max-width: 768px) {
            left: 30%;
            top: 60%;
            
        }
        @media(max-width: 600px) {
            left: 28%;
            top: 64%;
            
            .logo-subtitle {
                font-size: 1.5em;
            }
        }
        //max-width 970px

  }
  
  
@media(max-width: 900px) {
    width: 98%;
}
@media(max-width: 820px) {
    
    width: 90%;
    top: 15%;
}

`;

const BottomRight = () => {
    return (
        <Right>
            <div className="right-logo">
                <img src={bigLogo} alt=""/>
                <h4 className="logo-subtitle">array.finance</h4>
            </div>
            
            
             
        </Right>
    );
}

export default BottomRight;
