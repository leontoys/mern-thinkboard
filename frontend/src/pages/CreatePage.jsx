import React from 'react'
import { ArrowLeftIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import api from "../lib/axios"

const CreatePage = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!title || !content) {
        toast.error("All fields are required")
        return
      }
      setLoading(true)
      await api.post("/notes", { title, content })
      toast.success("Note created successfully")
      navigate('/')
    } catch (error) {
      console.log(error)
      if (error.response.status == 429) {
        toast.error("Too many requests created")
      }
      else {
        toast.error('Error while creating note')
      }
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
                          Back to Notes
          </Link>
          <div className='card  bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl'></h2>
              <form onSubmit={handleSubmit}>
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Title</span>
                  </label>
                  <input className='input input-bordered'
                    type='text'
                    placeholder='Note Title'
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                  />
                </div>
                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Content</span>
                  </label>
                  <textarea className='textarea textarea-bordered h-32'
                    type='text'
                    placeholder='Note Content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className='card-actions justify-end'>
                  <button type='submit' className='btn btn-primary'
                    disabled={loading}>
                    {loading? "Creating....":"Create Note"}
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage