import {Route} from 'react-router-dom';
import styled from 'styled-components';

//components
import Splash from './components/splash/Splash';
import Team from './components/team/Team';
import font from './assets/fonts/TechnaSans-Regular.otf'

const Appy = styled.div`
@font-face {
  font-family: GraublauWeb;
  src: url("../") format("opentype");
}
 
position: relative;
width: 100%;
font-family: ${font}, serif;

`

function App() {
  return (
    <Appy className="App">
      <Route path='/' exact component={Splash} />
      <Route path='/team' component={Team} />
      

      
    </Appy>
  );
}

export default App;
