import {Route} from 'react-router-dom';
import styled from 'styled-components';

//components
import Splash from './components/splash/Splash';
import Team from './components/team/Team';
import Roadmap from './components/roadmap/Roadmap';
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

`

function App() {
  return (
    <Appy className="App">
      <Route path='/' exact component={Splash} />
      <Route path='/team' component={Team} />
      <Route path='/roadmap' component={Roadmap} />
      

      
    </Appy>
  );
}

export default App;
