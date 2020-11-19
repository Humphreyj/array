import React from 'react';
import styled from 'styled-components';






const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  -webkit-clip-path: polygon(15% 0, 100% 0, 100% 30%, 100% 73%, 86% 100%, 0 100%, 0% 70%, 0 35%);
  clip-path: polygon(15% 0, 100% 0, 100% 30%, 100% 73%, 86% 100%, 0 100%, 0% 70%, 0 35%);
  background-color: #121212;
  color: white;
  padding: 0 3%;

  .top {
    width: 100%;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .top-content {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        h1 {
            font-size: 5em;
            width: 50%;
            text-align: right;
            margin-bottom: 0;
        }
        h4 {
            font-size: 3em;
            margin: 0;
        }
        p {
            text-align: right;
            width: 55%;
            font-size: 2em;
        }
        button {
            background: transparent;
            color: white;
            font-size: 2em;
            padding: 1%;
            cursor: pointer;
            border: 3px solid white;
            position: relative;
            transition: all 300ms ease;

            &:hover {
                top: 2px;
                border: 5px solid white;
                font-size: 2.2em;
            }
        }
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    margin-top: -5%;
    flex-direction: column;
    align-items: center;
    .bottom-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h4 {
            font-size: 4em;
            width: 50%;
        }
    }
  }

  
        

`;

const BottomRight = () => {
    return (
        <Right>
            <div className="top">
                <div className="top-content">
                    <h1>Array is the ultimate DeFi protocol.</h1>
                    <h4>DeFi isn’t going away anytime soon.</h4>
                    <p>Keep your exposure to ETH and WBTC while taking advantage of the explosive growth  of the DeFi space. Park your crypto and have Array do the protocol-hopping. Our smart contracts protect against sudden protocol failures through algorithmic diversification and a highly experienced team. </p>
                    <button className="to-team">view our team</button>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-content">
                    <h4>Array is currently managing 
                    $xxx,xxx,xxx 
                    in assets.</h4>
                </div>
                
            </div>
            
            
             
        </Right>
    );
}

export default BottomRight;
