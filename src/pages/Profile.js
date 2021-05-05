import {useEffect, useState} from 'react'
import axios from 'axios'
import Journal from './Journal'

const Profile = ()=>{
  const [allPost, setAllPost] = useState('')

  const getJournal = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/journal`, {
        headers: {
          authorization: localStorage.getItem('userId')
        }
      })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getJournal()
},[])
  return(
      <div>
          Welcome to profile
          {/* {allPosts && allPosts.map((question, i) => 
            <Journal
                question = {question}
                key={question.id}
                preview = "true"
            />
        )} */}
      </div>
  )
}

export default Profile