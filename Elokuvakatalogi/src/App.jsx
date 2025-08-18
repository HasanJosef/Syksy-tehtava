import { useContext, useEffect, useState } from "react";
import "./App.css";
import Elokuvalista from "./Elokuvakalista";
import ElokuvaLomake from "./elokuvalomake";
import ElokuvaHaku from "./ElokuvaHaku";
import { ThemeContext } from "./ThemeContext";
import Header from "./Header";

const initialMovies = [
  { title: "Inception", year: "2010", genre: "Sci-Fi" },
  { title: "Parasite", year: "2019", genre: "Drama" },
  { title: "The Matrix", year: "1999", genre: "Action" },
];

function App() {
  const { theme } = useContext(ThemeContext);
  const [movies, setMovies] = useState(initialMovies);
  const [search, setSearch] = useState("");

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, idx) => idx !== index));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Header />
      <h1>Movie Catalog</h1>
      <ElokuvaHaku search={search} onSearchChange={setSearch} />
      <ElokuvaLomake onAddMovie={addMovie} />
      <Elokuvalista movies={filteredMovies} onDeleteMovie={deleteMovie} />
    </div>
  );
}

export default App;
