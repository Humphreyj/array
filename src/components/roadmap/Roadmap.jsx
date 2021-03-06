import React,{useContext} from 'react';
import styled from 'styled-components';
import UIC from '../../context/Context';
import { motion } from "framer-motion";


import RoadmapIntro from '../roadmap/RoadmapIntro';
import RoadmapMain from '../roadmap/RoadmapMain';



const RoadmapContainer = styled.div`
background-color: #212121;


display: flex;
align-items: flex-start;
justify-content: center;
padding-top: 30px;
@media(max-width: 1440px) {
    padding-top: 30px;
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
  min-height: calc(100vh - 180px);
  width: 100%;
  position: relative;
  
  background-color: #212121;
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
  const {pageStyle,variants,pageTransition} = useContext(UIC);
    return (
      <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={variants}
        transition={pageTransition}
        >

        <Wrapper>
            <RoadmapContainer>
              <RoadmapIntro />
              <RoadmapMain />
            </RoadmapContainer>
            
            
        </Wrapper>
        
        </motion.div>
        
    );
}

export default Roadmap;
