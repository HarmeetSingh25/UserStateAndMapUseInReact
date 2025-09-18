import React, { useState } from 'react'

const Create = () => {
    const [Name, setName] = useState("")
    const [Age, setAge] = useState("")
    return (
        <div>
            <h1>Render Users</h1>
            <form onClick={(e) => {
                e.preventDefault()
                let userDets = { name: Name, age: Age }
                console.log(userDets);

            }}>

                <input type="text" onChange={(e) => { setName(e.target.value) }} />
                <input type="number" onChange={(e) => { setAge(e.target.value) }} />
                <button>Submit</button>
            </form>

            <p>{Name}{Age}</p>
        </div>
    )
}

export default Create