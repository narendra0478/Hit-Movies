import MovieList from '../components/MovieList'
import MovieForm from '../components/MovieForm'

import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Home() {

  const { user } = useAuthContext()

  const { documents: movies } = useCollection(
    'movies',
    ["uid", "==", user.uid]
    )

  return (
    <div>
      {movies && <MovieList movies={movies} />}
      <MovieForm />
    </div>
  )
}
