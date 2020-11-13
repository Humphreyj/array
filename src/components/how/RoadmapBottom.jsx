import React from 'react';
import styled from 'styled-components';

const Bottom = styled.div `
display: flex;
// flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 100vw;
height: 100vh;
background-color: #121212;
clip-path: polygon(0 13%, 0% 100%, 54% 100%);
position: absolute;
top: 10%;
left: 0;
color: white;
.text {
    
    position: relative;
    top: 55%;
    left: 2%;
    

    h1 {
        font-size: 4em;
        text-align: center;
        width: 60%;
    }
    p {
        font-size: 2em;
        width: 60%;
        text-align: center;
    }
}

`;

const RoadmapBottom = () => {
    return (
        <Bottom>
            <div className="text">
            <h1>We don't hide.</h1>
            <p>Our team consists of data scientists and DeFi experts, with cutting edge experience.</p>
            </div>
            
            
        </Bottom>
    );
}

export default RoadmapBottom;
