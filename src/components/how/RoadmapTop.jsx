import React from 'react';
import styled from 'styled-components';

import graph from '../../assets/img/roadmapgraph.PNG';
import pie from '../../assets/img/roadmapPie.PNG';
import threeDivs from '../../assets/img/threeDivs.PNG';


const Right = styled.div`
isplay: flex;
flex-direction: column;
align-items: center;

clip-path: polygon(0 0, 100% 0, 100% 100%, 39% 100%, 0 30%);
background-color: #212121;
height: 100vh;
width: 100vw;

h1 {
    text-align: center;
    font-size: 3.5em;
    margin-top: 0;
    color: white;
}
.inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    .graphics {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: 3%;
        right: 3;
        .graphic {
            
            width: 40%;
        }
        .pie-graphic {
            margin-top: 40px;
            
            display: flex;
            align-items: center;
            justify-content: center;
            .pie {
                width: 18%;
            }
            .pie-text {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: white;
                font-size: .9em;
                margin: -40px 30px 0 30px;
                p {
                    margin: 0;
                }
                
                
            }
        }
        
    }
    .text {
        width: 50%;
        p {
            width: 60%;
            color: white;
            font-size: 1.6em;
        }
    }
}
//inner

.three-divs {
    position: relative;
    left: 40%;
    top: 6%;
    width: 30%;
}


`

const RoadmapTop = () => {
    return (
        <Right>
            <h1>How it works</h1>
            <div className="inner">
                <div className="graphics">
                    <img className='graphic' src={graph} alt="Array Graph"/>
                    <div className="pie-graphic">
                        <img src={pie} alt="Array pie chart" className="pie"/>
                        <div className="pie-text">
                            <p>2% development fund</p>
                            <p>2% timelock treasury</p>
                            <p>1% Profit Share return</p>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <p>No need to handle dozens of yield farming coins- Array does it for you.</p>

                    <p>Deposit ETH into Array and recieve returns on an array of DeFi protocols, automatically turned into ETH.</p> 

                    <p>Array algorithmically weights various yield farming opportunities by price stability, yield return, and manages the portfolio accordingly. </p>

                    <p>On top of your ETH return, the Array token can be staked into a profit sharing pool and for important community decisions, such as incorporating new protocols.</p>
                </div>
            </div>

            <img className='three-divs' src={threeDivs} alt="Developer Info"/>
            
        </Right>
    );
}

export default RoadmapTop;
