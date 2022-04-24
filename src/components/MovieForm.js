import { useState } from 'react'

export default function MovieForm() {
  const [newMovie, setNewMovie] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(newMovie)

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
