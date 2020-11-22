import React,{useContext} from 'react';
import UIC from '../../context/Context';
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
    height: 80px;
    position: relative;
    bottom: 0;
    padding: 0 1.5%;
    background-color: #121212;
    
    
    

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 50px;
            width: 50px;
        }
    }

    .flavor {
        h4 {
            color: white;
            font-size: 1.4em;
        }
    }
    @media(min-width: 3800px) {
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
    
            img {
                height: 80px;
                width: 80px;
            }
        }
    
        .flavor {
            h4 {
                color: white;
                font-size: 2.4em;
            }
        }
    }
    @media(max-width: 2556px) {
        .logo {
            img {
                height: 60px;
                width: 60px;
            }
        }
        .flavor {
            h4 {
                font-size: 2em;
            }
        }
    }
    //max-width: 2556px
    @media(max-width: 1920px) {
        .logo {
            img {
                height: 60px;
                width: 60px;
            }
        }
        .flavor {
            h4 {
                font-size: 1.6em;
            }
        }
    }
    //max-width: 1920px

    @media(max-width: 1440px) {
        .logo {
            img {
                height: 50px;
                width: 50px;
            }
        }
        .flavor {
            h4 {
                font-size: 1.4em;
            }
        }
    }
    //max-width: 1440px

    @media(max-width: 1280px) {
        .logo {
            img {
                height: 45px;
                width: 45px;
            }
        }
        .flavor {
            h4 {
                font-size: 1em;
            }
        }
    }
    //max-width: 2556px

    @media(max-width: 1100px) {
        .logo {
            img {
                height: 40px;
                width: 40px;
            }
        }
        .flavor {
            h4 {
                font-size: 1.2em;
            }
        }
    }
    //max-width: 1100px

    @media(max-width: 970px) {
        .logo {
            img {
                height: 40px;
                width: 40px;
            }
        }
        .flavor {
            h4 {
                font-size: 1em;
            }
        }
    }
    //max-width: 970px

    @media(max-width: 600px) {
        .logo {
            img {
                height: 40px;
                width: 40px;
            }
        }
        .flavor {
            display: none;
            h4 {
                font-size: .9em;
            }
        }
    }
`;

const Footer = () => {
    const {page} = useContext(UIC);
    return (
        <Footsies>
            <div className="logo">
                {page.home ? <a href="#top-logo">
                <img src={logo} alt="Array logo"/>
                </a> : <img src={logo} alt="Array logo"/>
                }
                
            </div>
            <Social />
            <div className="flavor">
                <h4>array.push($profits)</h4>
            </div>
            
        </Footsies>
    );
}

export default Footer;
