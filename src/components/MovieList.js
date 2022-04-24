export default function MovieList({ movies }) {

    const handleClick = async (id) => {
      console.log(id)
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