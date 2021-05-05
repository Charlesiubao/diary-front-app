import { useEffect, useState, createContext } from 'react'
import axios from 'axios'

const UserContext = createContext()

const UserProvider = (props) => {
    const [user, setUser] = useState({})

    const fetchUser = () => {
        if (!localStorage.getItem('userId')) { return }
        // this is not neccessary but without it, get.request will still make a request and it will give unnecessary error message in console.log. it is basically doing.. if there is no userId, don't do make get request. return is empty, so nothing's going to happen. 

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/verify`, {
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        }).then((response) => {
            setUser(response.data.user)
        })
    }

    useEffect(fetchUser, [])


    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )    

}


export { UserContext, UserProvider }