import { useState } from 'react'
import MovieList from '../components/MovieList'
import MovieForm from '../components/MovieForm'

export default function Home() {
  const [movies, setMovies] = useState([
    { title: 'the name of the wind', id: 1 },
    { title: 'the dragon reborn', id: 2 },
    { title: 'the final empire', id: 3 },
    { title: 'the way of kings', id: 4 }
  ])

  return (
    <div>
      {movies && <MovieList movies={movies} />}
      <MovieForm />
    </div>
  );
}
