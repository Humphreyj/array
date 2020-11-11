import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import littleLogo from '../../assets/img/array-little-logo.PNG';



const Left = styled.div`
position: relative;
height: 100vh;
width: 100vw;
left: 0;
top: 0;
-webkit-clip-path: polygon(0 0, 83% 0, 35% 100%, 0 100%);
clip-path: polygon(0 0, 83% 0, 35% 100%, 0 100%);
background-color: #121212;

.content {
    color: white;

    .header {
        padding-left 130px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
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
    }
  
    .description {
        padding-left: 130px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 40%;
        margin-top:250px;
        .coming-soon {
            border-radius: 3px;
            padding: 0 10px 5px 10px;
            font-size: 3em;
            text-align: center;
            border: 4px solid white;
            width: 30%;
            margin: 0;

        }
        h1 {
            font-size: 7em;
            margin: 0;
        }
        .sub-title {
            margin-top: 0;
            font-size: 2.75em;
            margin-bottom: 10px;
        }
        p {
            margin-top: 0;
            font-size: 1.3em;
            width: 75%;
        }
    }
}
 
    
`;

const TopLeft = () => {
    return (
        <Left>
            <div className="content">
                <div className="header">
                    <img src={littleLogo} alt="array logo"/>
                    <h4>array.finance</h4>
                    <nav>
                        <Link to='/roadmap' className="nav-link">roadmap</Link>
                        <Link to='/faq' className="nav-link">faq</Link>
                        <Link to='/team' className="nav-link">team</Link>
                    </nav>
                </div>

                <div className="description">
                    <h4 className="coming-soon">coming soon</h4>
                    <h1>DeFi, simplified.</h1>
                    <h2 className="sub-title">The future of asset management is here.</h2>
                    <p>Array is an automated DeFi index, using algorithmic weighting to maximize yield with minimal risk. Made for the decentralized community- no VC or premine to worry about, built by a public team with experience at Consensys and Fortune 500 companies. Directly use ETH and save gas by having Array handle the farming for you, and get yield returned as ETH.
                    </p>
                    <p className="sub-text">Build your own Arrays and share with the community, and get rewarded if your portfolio performs well with performance fees you can set yourself.</p>

 

                </div>
            
            </div>
            
        </Left>
    );
}

export default TopLeft;
