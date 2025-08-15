function Elokuvalista({ movies, onDeleteMovie }) {
  return (
    <ul>
      {movies.map((movie, idx) => (
        <li key={idx}>
          {movie.title} ({movie.year}) - {movie.genre}
          <button onClick={() => onDeleteMovie(idx)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default Elokuvalista;
