import React from 'react';
import styled from 'styled-components';



const Description = styled.div`
display: flex;
flex-direction: column;
width: 25%;
height: 70vh;
align-items: flex-start;
justify-content: flex-start;
color: white;
margin-top: -2%;


    h1 {
        font-size: 8em;
        margin: 10% 0 0 0;
    }
    .sub-heading {
        font-size: 3em;
        margin-top: 0;
        margin-bottom: 0;
    }
    p {
        font-size: 2em;
        width: 75%;
        margin: 10px 0;
        line-height: 32px;
        
    }
    .social {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 41%;
    left: 0%;
    color: white;
    .title {
        font-size: 2.5em;
        border: 3px solid white;
        padding: 1px 5px;
    }

    .social-links {
        display: flex;
        width: 100%;
        margin-top: 30px;
        margin-right: 10px;
        align-items: center;
        justify-content: space-evenly;
    }
        .fab {
            color: white;
            font-size: 3.3em;
            margin: 0 20px;

        }
    }
    @media(min-width: 2700px) {
        h1 {
            margin-top: 10%;
        }
        p {
            width: 70%;
            line-height: 38px;
        }
        .social {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            top: 10%;
            left: 0%;
            color: white;
            .title {
                font-size: 3em;
                border: 3px solid white;
                padding: 1px 5px;
            }
        
            .social-links {
                display: flex;
                width: 100%;
                margin-top: 30px;
                margin-right: 10px;
                align-items: center;
                justify-content: space-evenly;
            }
                .fab {
                    color: white;
                    font-size: 4em;
                    margin: 0 20px;
        
                }
            }
    }
    @media(max-width: 2700px) {
        h1 {
            margin-top: 6%;
        }
        p {
            width: 75%;
            font-size: 1.4em;
        }
        .social {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            top: 5%;
            left: 0%;
            color: white;
            .title {
                font-size: 2.5em;
                border: 3px solid white;
                padding: 1px 5px;
            }
        
            .social-links {
                display: flex;
                width: 100%;
                margin-top: 30px;
                margin-right: 10px;
                align-items: center;
                justify-content: space-evenly;
            }
                .fab {
                    color: white;
                    font-size: 3em;
                    margin: 0 20px;
        
                }
            }
    }
    @media(max-width: 2556px) {
        h1 {
            font-size: 4.4em;
            margin-top: 12%;
        }
        p {
            width: 80%;
            font-size: 1.5em;
        }
        .social {
            top: 5%;
        }
    }
    //max-width: 2556px

    @media(max-width: 1920px) {
        h1 {
            font-size: 3.5em;
            margin-top: 12%;
        }
        .sub-heading {
            font-size: 2em;
        }
        p {
            width: 80%;
            font-size: 1em;
        }
        .social {
            top: 8%;
            .title {
                font-size: 2em;
            }
        }
    }
    //max-width: 1920px
    @media(max-width: 1905px) {
        p {
            width: 80%;
        }
        .social {
            top: 26%;
        }
    }
    //max-width: 1905px
    @media(max-width: 1440px) {
        width: 30%;
        h1 {
            font-size: 4em;
        }
        .sub-heading {
            font-size: 1.4em;
        }
        p {
            width: 85%;
            font-size: .9em;
            line-height: 24px;
        }
        .social {
            top:0%;
            .title {
                font-size: 1.2em;
            }
            .social-links {
                margin-top: 20px;
                .fab {
                    font-size: 1.5em;
                }
            }
        }
    }
    //max-width: 1440px
    @media(max-width: 1280px) {
        
        h1 {
            font-size: 4em;
            margin-top: 15px;
        }
        p {
            line-height: 18px;
            width: 85%;
            font-size: .9em;
            margin-top: 5px;
        }
        .social {
            top: 0%;
            
            .title {
                font-size: 1.2em;
            }
            .social-links {
                margin-top: 20px;
                .fab {
                    font-size: 1.6em;
                }
            }
        }
    }
    //max-width: 1280px
    @media(max-width: 970px) {
        height: 25vh;
        width: 100%;
        align-items: center;
        justify-content: center;
        p {
            width: 80%;
            text-align: center;
        }
        .social {
            display: none;
            
        }
    }
    //max-width: 970px;
   
    @media(max-width: 768px) {
        height: 34vh;
        width: 100%;
        p {
            width: 80%;
        }
        
    }
    //max-width: 768px;

}
    @media(max-width: 605px) {
        height: 45vh;
        margin-top: 0px;
        width: 100%;
        p {
            line-height: 25px;
                
            
        }
        
        //max-width: 600px
    }
    @media(max-width: 540px) {
        height: 90vh;
        margin-top: 0px;
        width: 100%;
        h1 {
            font-size: 2.9em;
            margin-top: 0;
        }
        .sub-heading {
            margin-bottom: 0px;
        }
        p {
            font-size: 1.5em;
            margin-top: 0;
        }
       
        //max-width: 540px
        //pretty much to explicityly handle the surface duo
    
@media(max-width: 500px) {
    height: 18vh;
    margin-top: 5%;
    width: 100%;
    
    }
    //max-width: 500px

    @media(max-width: 414px) {
        height: 110vh;
        margin-top: 0%;
       
        
    }
    //max-width: 411px
    @media(max-width: 380px) {
        height: 117vh;
        margin-top: 25%;
      
        
    }
    //max-width: 380px

    @media(max-width: 375px) {
        height: 130vh;
        margin-top: 1%;
      
        
    }
    //max-width: 380px

    @media(max-width: 360px) {
        height: 148vh;
    
        
    }
    //max-width: 360px
    @media(max-width: 320px) {
        height: 205vh;
        margin-top: 0%;
    
        
    }
    //max-width: 320px

    @media(max-width: 280px) {
        
        
     
        
    }
    //max-width: 280px
    
}


`;

const TeamDescription = () => {
    return (
        <Description>
            <h1>Team</h1>
            <h4 className='sub-heading'>Array.finance</h4>
            <p>This diverse group of Ethereans came together to build [Array.Finance], a drastically better DeFi user experience. Normal people can't or won't spend 36 hours per day tinkering with their portfolio, checking in on farms, rebalancing their positions, and reallocating assets to maximize profits and mitigate catastrophes, but Array.Finance will.
                </p>
            <p>The Array team has extensive experience with ["smart contracts", "data science", "front-end", "UI/UX", "Business Development", "FinTech", "TradFi", "Lego-stacking", "DeFi Lego-stacking","Citrix", "Consensys", "campaign finance", "networking", "scuba diving", "hiking"]
                that all went into building the simplest way to capture DeFi gains while going long on tried-and-true cryptocurrencies.</p>

            <div className="social">
                <h1 className="title">follow for updates</h1>
                <div className="social-links">
                <a href="https://twitter.com/arrayfinance" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="https://discord.gg/uNuD4H2rMB" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-discord"></i></a>
                <a href="https://medium.com/@arrayfinance" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-medium"></i></a>
                </div>
            </div>
            
        </Description>
    );
}

export default TeamDescription;
