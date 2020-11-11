import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';

import TeamDescription from './TeamDescription';
import TeamPhotos from './TeamPhotos';


const TeamDiv = styled.div`
background-color: #212121;
height: 95vh;
display: flex;
justify-content: center;
align-items: flex-start;



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
