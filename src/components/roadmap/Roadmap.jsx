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
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  
  background-color: #f5f5f5;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    margin-left: 20px;
    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
`;

const Roadmap = () => {
    return (
        <Wrapper>
            <RoadmapContainer>
            
            <RoadmapIntro />
            <RoadmapMain />
        </RoadmapContainer>
        </Wrapper>
    );
}

export default Roadmap;
