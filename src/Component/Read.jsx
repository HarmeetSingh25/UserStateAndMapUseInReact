import React from 'react'

const Read = (porps) => {
    const users = porps.users
    console.log(users);
    
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

    return (
        <div>
            <h3>{user}</h3>
        </div>
    )
}

export default Read