import React from 'react';
import styled from 'styled-components';

import Navigation from '../Navigation/Navigation';
import RoadmapIntro from '../roadmap/RoadmapIntro';
import RoadmapMain from '../roadmap/RoadmapMain';


const RoadmapContainer = styled.div`
background-color: #212121;
height: 100vh;
display: flex;
align-items: flex-start;
justify-content: center;
padding-top: 60px;
@media(max-width: 1440px) {
    padding-top: 50px;
}
@media(max-width: 970px) {
    padding-top: 0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
@media(max-width: 500px) {
    height: 100%;
    padding-bottom: 200px;
}

`;

const Roadmap = () => {
    return (
        <>
            <Navigation />
        <RoadmapContainer>
            
            <RoadmapIntro />
            <RoadmapMain />
        </RoadmapContainer>
        </>
    );
}

export default Roadmap;
