import axios from 'axios'
import { useState } from 'react'

const SignupLoginForm = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    return(
        <div>
            <form>
                <div>
                    <label htmlFor="new-name">Name:</label>
                    <input id="new-name" value={name} onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="new-email">Email:</label>
                    <input id="new-email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="new-password">Password:</label>
                    <input id="new-password" type="password" value={password} onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
            </form>

        </div>
    )
}

export default SignupLoginForm