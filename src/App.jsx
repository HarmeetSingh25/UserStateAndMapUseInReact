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
  const [Name, setName] = useState("")
  const [Age, setAge] = useState("")
  console.log(Name, Age);


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

  // const ChngeName = 

  // console.log(Username);
  return (
    <div>
      <h1>Render Users</h1>
      <h3>{user}</h3>
      <h2>{Username}</h2>
      <button onSubmit={() => {setUsername("Harmeet")}}>Click</button>

      <form onClick={(e) => { e.preventDefault() }}>

        <input type="text" onChange={(e) => { setName(e.target.value) }} />
        <input type="number" onChange={(e) => { setAge(e.target.value) }} />
        <button>Submit</button>
      </form>
      <p>{Name}{Age}</p>
    </div>
  )
}

export default App