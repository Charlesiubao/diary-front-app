import axios from 'axios'
import { useState } from 'react'

const Signup = (props)=> {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('you submitted signup');
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`,{ name, email, password})
        .then((response)=>{
            props.setUser(response.data.user)
            localStorage.setItem('userId', response.data.user.id)
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }



    return(
        <div className='signup'>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div>
                    {/* <label htmlFor="new-name">Name:</label> */}
                    <input placeholder='Username' id="new-name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div>
                    {/* <label htmlFor="new-email">Email:</label> */}
                    <input placeholder='Email' id="new-email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div>
                    {/* <label htmlFor="new-password">Password:</label> */}
                    <input placeholder='Password' id="new-password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div>
                    <button className='submitButton' type="submit" value="Sign Up" >Signup</button>
                </div>
            </form>

        </div>
    )
}

export default Signup