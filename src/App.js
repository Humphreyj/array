import {useState} from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import styled from 'styled-components';

import { TransitionGroup, CSSTransition } from "react-transition-group";

//components

import Navigation from './components/Navigation/Navigation';
import Container from './Container';

import UIC from './context/Context';
import logo from './assets/img/arraylogofinal.png';
import font from './assets/fonts/TechnaSans-Regular.otf'

const Appy = styled.div`
@font-face {
  font-family: GraublauWeb;
  src: url("../") format("opentype");
}
 
position: relative;
width: 100%;
height: 100vh;
font-family: ${font}, serif;
overflow: hidden;
background-color: #212121;

.sidedrawer {
  position: fixed;
  top: 0;
	left: 0;
  z-index: 400;
  height: 100vh;
  width: 65vw;
  background-color: rgba(33,33,33, 0.9);
  padding-left: 15px;
  transform: translateX(-100%);
	transition: all 0.3s ease-out; 
  .logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img{
      width: 50%;
    }
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20px;
    a {
      margin-top: 10px;
      color: white;
      font-size: 2em;
    }
  }
}

.open {
  transform: translateX(0%);
}
@media(max-width: 500px) {
  height: 100%;
}

.fade-enter {
  transform: translateX(100%);
}

.fade-enter.fade-enter-active {
  transform: translateX(0);
  transition: all 300ms ease-in;
}

.fade-exit {
  transform: translateX(-100%);
}

.fade-exit.fade-exit-active {
  opacity: 0.01;
  transition: all 300ms ease-in;
}
`;



function App({location}) {
  const [open, setOpen] =useState(false)
  const [page,setPage] = useState({
    home: true,
    roadmap: false,
    team: false
  });

  const toggleSidedrawer = () => {
    setOpen(!open)
  }
  return (
    <UIC.Provider value={{toggleSidedrawer,open,page,setPage}}>
        <Appy className="App">
        <div className={open ? 'sidedrawer open': 'sidedrawer'}>
          <div className='logo'>
          <img src={logo} alt="array logo"/>
          </div>
          <nav>
            <Link onClick={toggleSidedrawer} to='/'>array.finance</Link>
            <Link onClick={toggleSidedrawer} to='/roadmap'>roadmap</Link>
            <Link onClick={toggleSidedrawer} to='/team'>team</Link>
          </nav>
        
        </div>
        <Navigation page={page}/>
        <Container />
        
    </Appy>
    </UIC.Provider>
    
  );
}

export default App;
