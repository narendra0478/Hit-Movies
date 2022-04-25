import MovieList from '../components/MovieList'
import MovieForm from '../components/MovieForm'

import { useCollection } from '../hooks/useCollection';

export default function Home() {

  const { documents: movies } = useCollection('movies')

  return (
    <div>
      {movies && <MovieList movies={movies} />}
      <MovieForm />
    </div>
  )
}
