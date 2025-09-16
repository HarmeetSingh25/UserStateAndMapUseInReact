import React, { useState } from 'react'

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



  let user = users.map((User, index) => {
    return (
      <li key={index}>
        <span>
          {User.name}
        </span> |
        <span>
          {User.age}
        </span>
      </li>
    )
  })

  const ChngeName = () => {
    setUsername("Harmeet")
  }
  
  console.log(Username);
  return (
    <div>

      <h1>Render Users</h1>
      <h3>{user}</h3>
      <h2>{Username}</h2>
      <button onClick={ChngeName}>Click</button>

    </div>
  )
}

export default App