import React from 'react';
import Hi from './Hi';
import Condition from './Condition';
import Counter from './Counter';


function App() {
  return (
    <>
      <Hi name="현규" firend="친구" one="1" />
      <Condition isOn={false} />
      <Counter />
    </>
  );
}

export default App;
