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
    font-size: 6em;
    margin: 0;
}
.sub-heading {
    font-size: 2em;
    margin-top: 0;
    margin-bottom: 0;
}
p {
    font-size: 1.6em;
    text-align: center;
    width: 45%;
    margin: 0 auto;
    
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
