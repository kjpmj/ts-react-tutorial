import React from 'react';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  };
  return (
    <div>
      <Greetings name="hoho" mark="s" optional="코코코" onClick={onClick} />
    </div>
  );
}

export default App;
