import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



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
* {
  box-sizing: border-box;
}
 
position: relative;
width: 100%;
height: 100%;
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


`;



function App() {
  const [open, setOpen] =useState(false)
  const [page,setPage] = useState({
    home: true,
    roadmap: false,
    team: false,
    prev: 3,
    curr: 0
  });
  const routes = ['/','/roadmap','/team'];

  const toggleSidedrawer = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if(sessionStorage.getItem('route') === 'roadmap') {
      setPage({...page,home: false, roadmap: true, team: false})
    }else if(sessionStorage.getItem('route') === 'team'){
      setPage({...page,home: false, roadmap: false, team: true})
      
    }
    // eslint-disable-next-line
  },[])


  
  return (
    <UIC.Provider value={{toggleSidedrawer,open,page,setPage, routes}}>
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
