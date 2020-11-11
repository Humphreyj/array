import React from 'react';
import styled from 'styled-components';
import RoadmapTop from './RoadmapTop';
import RoadmapBottom from './RoadmapBottom';
import Navigation from '../Navigation/Navigation';

const Map = styled.div`
display: flex;
`;

const Roadmap = () => {
    return (
        <>
        <Navigation/>
        <Map>
            <RoadmapTop />
            <RoadmapBottom/>
        </Map>
        </>
    );
}

export default Roadmap;
