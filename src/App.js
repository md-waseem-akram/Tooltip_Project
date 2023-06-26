import React from 'react';
import Tooltip from './Components/Tooltip';


function App() {
  // Here you can pass b top, bottom, left or right as props for differnt tooltip position.
  return (
    <div>
      <Tooltip position={"top"}/>
    </div>
  );
}

export default App;
