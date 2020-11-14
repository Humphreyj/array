import React from 'react';
import styled from 'styled-components';

import TopLeft from './TopLeft';
import BottomRight from './BottomRight';
import Social from '../social/Social';

const SplashDiv = styled.div`
position: relative;

@media(max-width: 500px) {
    overflow-x: scroll;
    
}

`






const Splash = () => {
    return (
        <>
            <SplashDiv>
            <TopLeft />
            <BottomRight />
            <Social />
            
        </SplashDiv>
        </>
        
    );
}

export default Splash;
