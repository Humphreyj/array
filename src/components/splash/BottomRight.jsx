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
    left: 34.5%;
    top: 26%;

        img {
        width: 18%;
        height: auto;
        }

        .logo-subtitle {
            font-size: 2.7em;
            color: white;
            margin: 0;
        }
        @media(max-width: 1800px) {
            top: 22%;
           img {
               width: 24%;
           };
        }
        @media(max-width: 1055px) {
            left: 31%;
            top: 30%;
        }
        @media(max-width: 970px) {
            left: 33%;
            top: 75%;
            img {
                width: 18%
            }
            .logo-subtitle {
                font-size: 2em;
            }
        }
        //max-width 970px
        @media(max-width: 820px) {
            top: 62.5%;
            left: 30%;
        }
        @media(max-width: 800px) {
            top: 61%;
            left: 30%;
            img {
                width: 20%
            }
        }
        @media(max-width: 770px) {
            top: 56.5%;
            left: 30%;
            img {
                width: 24%
            }
            .logo-subtitle {
                font-size: 1.5em;
            }
        }

     
       
        @media(max-width: 620px) {
            left: 28%;
            top: 62.5%;
            
            
            .logo-subtitle {
                font-size: 1.4em;
            }
        }
        //max-width 620px
        @media(max-width: 620px) {
            left: 28%;
            top: 62%;
            img {
                width: 28%
            }
            
            
        }
        //max-width 620px
        @media(max-width: 600px) {
        
            top: 57%;
            img {
                width: 24%;
            }
        }
        //max-width: 600px

  }
  
  
@media(max-width: 900px) {
    width: 98%;
}
@media(max-width: 820px) {
    
    width: 90%;
    top: 15%;
}
@media(max-width: 500px) {
    display: none;
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
