import React from 'react';
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//components
import Splash from './components/splash/Splash';
import Roadmap from './components/roadmap/Roadmap';
import Team from './components/team/Team';

const Wrapper = styled.div`
  height: 100%;
  background-color: #212121;

  .pageSliderRight-enter {
    transform: translate3d(-100%, 0, 0);
    
  }
  
  .pageSliderRight-enter.pageSliderRight-enter-active {
    transform: translate3d(0, 0, 0);
    opacity: .9;
    transition: all 600ms ease;
  }
  .pageSliderRight-exit {
    transform: translate3d(0, 0, 0);
    
  }
  
  .pageSliderRight-exit.pageSliderRight-exit-active {
    transform: translate3d(-100%, 0, 0);
    opacity: .7;
    transition: all 600ms ease;
  }
  
  .pageSliderLeft-enter {
    transform: translate3d(100%, 0, 0);
    
  }
  
  .pageSliderLeft-enter.pageSliderLeft-enter-active {
    transform: translate3d(0, 0, 0);
    
    transition: all 600ms ease ;
  }
  .pageSliderLeft-exit {
    
    transform: translate3d(0, 0, 0);
  }
  
  .pageSliderLeft-exit.pageSliderLeft-exit-active {
    transform: translate3d(100%, 0, 0);
    transition: all 600ms ease;
  }
  
`;

const Container = ({location}) => {

    return (
    <Wrapper>
      
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname} >
            <Route exact path="/" component={Splash} />
            <Route path="/roadmap" component={Roadmap} />
            <Route path="/team" component={Team} />
          </Switch>
      </AnimatePresence>
          
        
          
      
            
       
    </Wrapper>
    );
}

export default withRouter(Container);
