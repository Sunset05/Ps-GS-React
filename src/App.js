import React, { useState } from 'react'
import Button from './components/Button';
import Display from './components/Display';

export default function App() {

  const [counter, setCounter] = useState(0);

  const incrementCounter = (number) => {
    setCounter(counter + number)  
}

  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={100}/>
      <Display message={counter}/>
    </>
  )
}
