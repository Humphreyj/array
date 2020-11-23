import React,{useContext} from 'react';
import styled from 'styled-components';
import UIC from '../../context/Context';
import { motion } from "framer-motion";
import TeamDescription from './TeamDescription';
import TeamPhotos from './TeamPhotos';


const TeamDiv = styled.div`
background-color: #212121;
height: 100%;
width: 95%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: flex-start;
padding-bottom: 60px;

@media(max-width: 970px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
@media(max-width: 500px) {
    height: 100%;
    padding-bottom: 150px;
}



`;
const Wrapper = styled.div`
min-height: calc(100vh - 160px);
background-color: #212121;
  
 
`;

const Team = () => {
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
        <TeamDiv>
            <TeamDescription />
            <TeamPhotos />
            
            
        </TeamDiv>
        </Wrapper>
        </motion.div>
    );
}

export default Team;
