import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import Profile from './pages/Profile'



const Login = (props)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('you submitted login');
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`,{ email, password})
        .then((response)=>{
            props.setUser(response.data.user)
            localStorage.setItem('userId', response.data.user.id)
            history.push('/profile')
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return(
        <div className='login'>
            <form onSubmit={handleSubmit }>
            <h1>Log In</h1>
                <div>
                    {/* <label htmlFor="new-email">Email:</label> */}
                    <input placeholder='Email' id="new-email" value={email} onChange={(e)=>{setEmail(e.target.value)}} autocomplete="off" />
                </div>
                <div>
                    {/* <label htmlFor="new-password">Password:</label> */}
                    <input placeholder='Password' id="new-password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} autocomplete="off" />
                </div>
                <div>
                <button className='submitButton' type="submit" value="Login" >Login</button>
                </div>
            </form>

        </div>
    )
}

export default Login