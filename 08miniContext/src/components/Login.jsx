import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


function login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input type='text' placeholder="username"
                onChange={(e) => {
                    setUsername(e.target.value)
                }} />
            <input type='text' placeholder="password" onChange={(e) => {
                setPassword(e.target.value)
            }} />
            <button onclick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login