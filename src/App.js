import {useState} from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import  {Link} from 'react-router-dom';

//components
import Splash from './components/splash/Splash';
import Team from './components/team/Team';
import Roadmap from './components/roadmap/Roadmap';

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



`

function App() {
  const [open, setOpen] =useState(false)

  const toggleSidedrawer = () => {
    setOpen(!open)
  }
  return (
    <UIC.Provider value={{toggleSidedrawer,open}}>
        <Appy className="App">
        <div className={open ? 'sidedrawer open': 'sidedrawer'}>
          <div className='logo'>
          <img src={logo} alt="array logo"/>
          </div>
          <nav>
            <Link to='/'>array.finance</Link>
            <Link to='/roadmap'>roadmap</Link>
            <Link to='/team'>team</Link>
          </nav>
        
        </div>
        <Route path='/' exact component={Splash} />
        <Route path='/team' component={Team} />
        <Route path='/roadmap' component={Roadmap} />
    </Appy>
    </UIC.Provider>
    
  );
}

export default App;
