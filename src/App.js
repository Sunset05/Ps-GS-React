import React, { useState } from 'react'
import Button from './components/Button';
import Display from './components/Display';

export default function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Button counter = {counter} setCounter={setCounter}/>
      <Display />
    </div>
  )
}
