import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import RateLimitedUI from '../components/RateLimitedUI';
import axios from "axios"


const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const[loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get("http://localhost:5001/api/notes")
      console.log(response.data)
    }
    fetchNotes()
  },[])

  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage