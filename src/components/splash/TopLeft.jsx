import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import littleLogo from '../../assets/img/array-little-logo.PNG';



const Left = styled.div`
position: relative;
height: 100vh;
width: 100%;
left: 0;
top: 0;
-webkit-clip-path: polygon(0 0, 83% 0, 35% 100%, 0 100%);
clip-path: polygon(0 0, 83% 0, 35% 100%, 0 100%);
background-color: #121212;
z-index: 200;
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

        @media(max-width: 2000px) {
            padding-left: 100px; 
        }
        //2000px max-width
        @media(max-width: 1220px) {
            img {
                height: 40px;
                width: 40px;
            }
            h4 {
                font-size: 2.5em;
            } 
            nav {
                margin-left: 5px;
                a {
                    font-size: 2.5em;
                    margin: 0 20px;
                    
                }
            }
        }
        //1220px max-width

        @media(max-width: 970px) {
            padding-left: 50px;
            img {
                height: 40px;
                width: 40px;
            }
            h4 {
                font-size: 2.5em;
            } 
            nav {
                margin-left: 5px;
                a {
                    font-size: 2.5em;
                    margin: 0 20px;
                    
                }
            }
        }
        //900px max-width
    }
  
    .description {
        padding-left: 130px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 50%;
        margin-top:10%;
        .coming-soon {
            border-radius: 3px;
            padding: 0 10px 5px 10px;
            font-size: 3em;
            text-align: center;
            border: 4px solid white;
            width: 35%;
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
        @media(max-width: 2000px) {
            padding-left: 100px;
            margin-top: 8%;
            .coming-soon {
                font-size: 2.6em;
                width: 30%:
            }
            h1 {
                font-size: 5.5em;
            }
            .sub-title {
                font-size: 2em
            }
        }
        //2000px max-width
        @media(max-width: 1440px ) {
            margin-top: 5%;
            .coming-soon {
                font-size: 2.4em;
            }
            h1 {
                font-size: 5.2em;
            }
            .sub-title {
                font-size: 1.8em
            }
            p {
                font-size: 1.2em;
            }
        }
        //1400px
        @media(max-width: 1330px ) {
            margin-top: 1%;
            .coming-soon {
                font-size: 2.2em;
            }
            h1 {
                font-size: 4.6em;
            }
            .sub-title {
                font-size: 1.8em
            }
            p {
                font-size: 1.1em;
            }
        }
        //1330px
        @media(max-width: 1220px ) {
            margin-top: 14%;
            .coming-soon {
                font-size: 2.1em;
                width: 55%;
            }
            h1 {
                font-size: 4em;
            }
            .sub-title {
                font-size: 1.77em
            }
            p {
                font-size: 1.1em;
            }
        }
        //1220px
        @media(max-width: 970px) {
            margin-top: 3%;
            padding-left: 50px;
            h1 {
                font-size: 3.7em;
            }
        }
        @media(max-width: 710px ) {
            margin-top: 4%;
            .coming-soon {
                font-size: 2.1em;
                width: 90%;
            }
            h1 {
                font-size: 3.1em;
            }
            .sub-title {
                font-size: 1.8em
            }
            p {
                font-size: 1.1em;
                width: 85%;
            }
        }
        //710px
        @media(max-width: 565px ) {
            margin-top: 4%;
            .coming-soon {
                font-size: 1.8em;
                width: 90%;
            }
            h1 {
                font-size: 2.2em;
            }
            .sub-title {
                font-size: 1.8em
            }
            p {
                font-size: 1.1em;
                width: 85%;
            }
        }
        //565px
    }
    
}

@media(max-width: 970px) {
    width:133%;
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
