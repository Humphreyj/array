import logo from './logo.svg';

import styled from 'styled-components';

//components
import Navigation from './components/Navigation/Navigation';
import TopLeft from './components/TopLeft';
import BottomRight from './components/BottomRight'

const Appy = styled.div`
 
position: relative;
width: 100%;

`

function App() {
  return (
    <Appy className="App">
      <TopLeft />
      <BottomRight />
      

      
    </Appy>
  );
}

export default App;
