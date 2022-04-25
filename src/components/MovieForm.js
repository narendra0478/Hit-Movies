import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

// firebase imports
import { database } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export default function MovieForm() {
  const [newMovie, setNewMovie] = useState('')
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await addDoc(collection(database, 'movies'), {
      title: newMovie,
      uid: user.uid
    })

    setNewMovie('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new movie title:</span>
        <input 
          required
          type="text"
          onChange={(e) => setNewMovie(e.target.value)}
          value={newMovie}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
