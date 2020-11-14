import React from 'react';
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//components
import Splash from './components/splash/Splash';
import Roadmap from './components/roadmap/Roadmap';
import Team from './components/team/Team';

const Wrapper = styled.div`
  height: 100%;
  background-color: rgba(2, 2, 2, .1);

  .fade-enter {
    transform: translateX(100%);
    opacity: .1;
    }
    .fade-enter.fade-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 300ms ease-in;
    }
    .fade-exit {
        
        transform:translateX(0);
        
    }
    
    .fade-exit.fade-exit-active {
        transform:translateX(-100%);
        
        transition: all 300ms ease-in;
    }

    div.transition-group {
        position: relative;
   }
   section.route-section {
     
   }
  
`;

const Container = ({location}) => {
    return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
        
      <section className="route-section">
      
          <Switch location={location} >
            <Route exact path="/" component={Splash} />
            <Route path="/roadmap" component={Roadmap} />
            <Route path="/team" component={Team} />
          </Switch>
        
          
      </section>
      </CSSTransition>
      </TransitionGroup>
            
       
    </Wrapper>
    );
}

export default withRouter(Container);
