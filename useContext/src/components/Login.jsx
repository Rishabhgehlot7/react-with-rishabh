import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const { setUser } = useContext(UserContext);
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ Username, Password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={Username} onChange={(e) => setUsername(e.target.value)} name="" placeholder='Username' id="" />
            {"  "}
            <input type="text" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' id="" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login