import React,{useContext} from 'react';
import UIC from './context/Context';
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

  .pageSliderRight-enter {
    transform: translate3d(-100%, 0, 0);
  }
  
  .pageSliderRight-enter.pageSliderRight-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 500ms ease;
  }
  .pageSliderRight-exit {
    transform: translate3d(0, 0, 0);
  }
  
  .pageSliderRight-exit.pageSliderRight-exit-active {
    transform: translate3d(-100%, 0, 0);
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
  const {routes,page} = useContext(UIC);

  const currentScreen = routes.indexOf(location.pathname)
  const previousScreen = page.prev;
  const animationClasses = currentScreen > previousScreen ? "pageSliderLeft" : "pageSliderRight";
  console.log("current",currentScreen, previousScreen)
 
    return (
    <Wrapper>
      <TransitionGroup 
        childFactory={child =>
        React.cloneElement(child, {
          classNames: animationClasses
        })}
      >
        <CSSTransition
          key={location.pathname}
          timeout={{ enter: 600, exit: 610 }}
          classNames={animationClasses}
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
