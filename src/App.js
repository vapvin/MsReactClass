import React from 'react';
import Hi from './Hi';
import Condition from './Condition';
import Counter from './Counter';
import Input from './Input';

function App() {
  return (
    <>
      <Hi name="현규" firend="친구" one="1" />
      <Condition isOn={false} />
      <Counter />
      <Input />
    </>
  );
}

export default App;
