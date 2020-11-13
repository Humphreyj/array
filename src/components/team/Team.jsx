import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';

import TeamDescription from './TeamDescription';
import TeamPhotos from './TeamPhotos';


const TeamDiv = styled.div`
background-color: #212121;
height: 95vh;
width: 100%;
display: flex;
justify-content: center;
align-items: flex-start;

@media(max-width: 970px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
@media(max-width: 500px) {
    height: 100%;
    padding-bottom: 250px;
}


`;

const Team = () => {
    return (
        <>
        <Navigation />
        <TeamDiv>
            <TeamDescription />
            <TeamPhotos />
            
            
        </TeamDiv>
        </>
    );
}

export default Team;
