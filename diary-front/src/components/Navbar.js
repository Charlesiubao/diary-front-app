import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link, Router } from 'react-router-dom'

const Navbar = ()=>{
    const [user, setUser] = useContext(UserContext)

    return(

        <nav>
            <Link to="/">Home</Link>{' | '}
            {user.id ?
        <>
        <Link to="/profile">Profile</Link>{' | '}
        <Link to="/journal">Journal</Link>{' | '}
        <Link to="/" 
                onClick={() => {
                    localStorage.removeItem('userId')
                    setUser('') //set user state as an empty string, so it will redirect me to home as set in App.js
                }}
            >Sign Out</Link>
            <header
                style={{textAlign:"left"}}>
                Welcome {user.user}
            </header>
            </>
            :
            <>
            <Link to="/signup">Signup</Link>{' | '}
            <Link to="/login">Login</Link>{' | '}
            {/* <Link to="/mypost">My Post</Link>{' | '} */}
            </>
}
        </nav>
    )
}

export default Navbar