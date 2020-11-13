import React from 'react';
import styled from 'styled-components';



const Description = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 70vh;
align-items: center;
justify-content: flex-start;
color: white;
margin-top: 10px;


h1 {
    font-size: 8em;
    margin: 0;
}
.sub-heading {
    font-size: 3em;
    margin-top: 0;
    margin-bottom: 0;
}
p {
    font-size: 2em;
    text-align: center;
    width: 65%;
    margin: 20px auto;
    
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
    border: 8px solid white;
    padding: 1px 5px;
}

.social-links {
    display: flex;
    width: 100%;
    margin-top: 30px;
    align-items: center;
    justify-content: space-evenly;
}
    .fab {
        color: white;
        font-size: 3.3em;

    }
}

@media(max-width: 1920px) {
    p {
        width: 80%;
    }
    .social {
        top: 30%;
    }
}
//max-width: 1920px
@media(max-width: 1440px) {
    h1 {
        font-size: 5em;
    }
    .sub-heading {
        font-size: 1.6em;
    }
    p {
        width: 80%;
        font-size: 1.9em;
    }
    .social {
        top: 30%;
    }
}
//max-width: 1920px
@media(max-width: 1280px) {
    h1 {
        font-size: 4em;
        margin-top: 15px;
    }
    p {
        width: 85%;
    }
    .social {
        top: 15%;
        
        .title {
            font-size: 2em;
        }
        .social-links {
            .fab {
                font-size: 2.5em;
            }
        }
    }
}
//max-width: 1280px
@media(max-width: 970px) {
    height: 25vh;
    width: 100%;
    p {
        width: 80%;
    }
    .social {
        position: absolute;
        width: 80%;
        top: 80%;
        left: 10%;
        .title {
            font-size: 2em;
            
        }
        .social-links {
            width: 70%;
    
        }
    }
}
//max-width: 970px;

@media(max-width: 970px) {
    height: 25vh;
    width: 100%;
    p {
        width: 80%;
    }
    .social {
        position: absolute;
        width: 80%;
        top: 80%;
        left: 10%;
        .title {
            font-size: 2em;
            
        }
        .social-links {
            width: 70%;
    
        }
    }
}
//max-width: 970px;
}


`;

const TeamDescription = () => {
    return (
        <Description>
            <h1>Team</h1>
            <h4 className='sub-heading'>array.finance</h4>
            <p>DeFi is just getting started, but the Array team has the experience needed to build the next generation of protocols.</p>

            <div className="social">
                <h1 className="title">follow for updates</h1>
                <div className="social-links">
                <a href="https://twitter.com/" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="https://discord.com/" className="social-link"><i className="fab fa-discord"></i></a>
                <a href="https://medium.com/" className="social-link"><i className="fab fa-medium"></i></a>
                </div>
            </div>
            
        </Description>
    );
}

export default TeamDescription;
