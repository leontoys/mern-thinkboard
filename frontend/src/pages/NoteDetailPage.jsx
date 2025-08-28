import React, { useState, useEffect} from 'react'
import { useNavigate, useParams, Link } from "react-router";
import api from "../lib/axios";
import toast from 'react-hot-toast'
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null)
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(id)

  useEffect(()=>{
    const fetchNote = async () => {
      try {

        const result = await api.get(`/notes/${id}`)
        setNote(result.data )
        
      } catch (error) {
        console.error(error)
        toast.error('Error showing note')
      }
      finally {
        setLoading(false)
      }
    }

    fetchNote()

  },[id])

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete?")) return

    try {
      await api.delete(`/notes/${id}`)
      toast.success('Note deleted successfully')

    } catch (error) {
      console.error(error)
      toast.error('Error while deleting note')
    }
  }

  const handleSave = async () => {
    if (!note.title || !note.content) {
      toast.error("All fields are required")
      return
    }
    setSaving(true)

    try {
      await api.put(`/notes/${id}`, note)
      toast.success("Note updated successfully")
      navigate('/')
    } catch (error) {
      console.log(error)
      if (error.response.status == 429) {
        toast.error("Too many requests created")
      }
      else {
        toast.error('Error while updating note')
      }
    }
    finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className='animate-spin size-10'/>
      </div>
    )
  }
  
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to="/" className='btn btn-ghost'>
            <ArrowLeftIcon className='h-5 w-5' />
            Back to Notes
          </Link>
          <button onClick={handleDelete} className='btn btn-error btn-outline'>
            <Trash2Icon className='h-5 w-5' />
            Delete Note
          </button>
        </div>

        <div className='card bg-base-100'>
          <div className='card-body'>
            <div className='form-control mb-4'>
              <label className='label'>
                <span className='label-text'>Title</span>
              </label>
              <input type='text'
                placeholder='Note title'
                className='input input-bordered'
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}></input>
            </div>

            <div className='form-control mb-4'>
              <label className='label'>
                <span className='label-text'>Content</span>
              </label>
              <textarea type='text'
                placeholder='Note content'
                className='textarea textarea-bordered h-32'
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}></textarea>
            </div>

            <div className='card-actions justify-end'>
              <button className='btn btn-primary'
                onClick={handleSave}
                disabled={saving}>
                {loading ? "Saving...." : "Save Note"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage