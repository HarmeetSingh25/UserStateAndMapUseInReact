import React, { useState } from 'react'
import Create from './Component/Create';
import Read from './Component/Read';

const App = () => {
  const users = [
    {
      name: "Harmeet",
      age: 22
    },
    {
      name: "Aman",
      age: 25
    },
    {
      name: "Simran",
      age: 20
    },
    {
      name: "Kiran",
      age: 28
    }
  ];
  const [Username, setUsername] = useState("Harry")
  return (
    <div>
    
      <h2>{Username}</h2>
      <button onClick={() => { setUsername("Harmeet") }}>Click</button>
      <Create />
      <Read users={users}/>
    </div>
  )
}

export default App