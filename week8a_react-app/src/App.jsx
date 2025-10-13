import { useState } from 'react'
import './App.css'

function App() {
  const name = "Courtney"; 
  const fact = "Ice cream is my favorite food"; 

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my first component.</p>
      <h2>Welcome, {name}!</h2> 
      <p>{fact}</p> 
    </div>
  ); 
}

export default App;

