import React ,{useState,useEffect}from 'react'
import axios from 'axios'

function DataFetchin() {
    const [posts,setPosts] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8080/rtmandal', { withCredentials: true })
            .then(res =>{
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
    })
  return (
    <div>
      
    </div>
  )
}

export default DataFetchin
