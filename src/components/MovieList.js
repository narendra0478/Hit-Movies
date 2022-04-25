import { database } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function MovieList({ movies }) {

    const handleClick = async (id) => {
      const ref = doc(database, 'movies', id)
      await deleteDoc(ref)
    }
  
    return (
      <div className="movie-list">
        <ul>
          {movies.map(movie => (
            <li key={movie.id} onClick={() => handleClick(movie.id)}>{movie.title}</li>
          ))}
        </ul>
      </div>
    )
  }