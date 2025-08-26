import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import RateLimitedUI from '../components/RateLimitedUI';
import axios from "axios"
import toast from 'react-hot-toast';


const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const[loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/notes")
        console.log(response.data)
        setNotes(response.data)
        setIsRateLimited(false)
      } catch (error) {
        console.log(error)
        if (error.response.status == 429) {
          setIsRateLimited(true)
        }
        else {
          toast(error.response.message)
        }
      } finally {
        setLoading(false)
      }
    }
    fetchNotes()
  },[])

  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
      {notes.length > 0 && !isRateLimited && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {notes.map((note) => (
            <div>
              {note.title}|{note.content}
              </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage