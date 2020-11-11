import React from 'react';
import styled from 'styled-components';



const Description = styled.div`
display: flex;
flex-direction: column;
width: 40%;
height: 30vh;
align-items: center;;
justify-content: center;
color: white;
margin-top: 70px;


h1 {
    font-size: 6em;
    margin: 0 0 0 40px;
}
.sub-heading {
    font-size: 2em;
   margin-left: 40px;
    margin-top: 0;
    margin-bottom: 0;
}
p {
    font-size: 1.5em;
    width: 40%;
    margin-left: 250px;
}
.social {
position: relative;
left: 8%;
top: 95%;
color: white;
.title {
    font-size: 3em;
    border: 8px solid white;
    padding: 1px 5px;
}

.social-links {
    margin-left: 60px;
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
                    <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-discord"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-medium"></i></a>
                </div>
            </div>
            
        </Description>
    );
}

export default TeamDescription;
