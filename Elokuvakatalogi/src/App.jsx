import { useState, useEffect } from "react";
import "./App.css";
import Elokuvalista from "./Elokuvakalista";
import ElokuvaLomake from "./elokuvalomake";
import ElokuvaHaku from "./ElokuvaHaku";

const initialMovies = [
  { title: "Inception", year: "2010", genre: "Sci-Fi" },
  { title: "Parasite", year: "2019", genre: "Drama" },
  { title: "The Matrix", year: "1999", genre: "Action" },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, idx) => idx !== index));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <h1>Movie Catalog</h1>
      <ElokuvaHaku search={search} onSearchChange={setSearch} />
      <ElokuvaLomake onAddMovie={addMovie} />
      <Elokuvalista movies={filteredMovies} onDeleteMovie={deleteMovie} />
    </div>
  );
}

export default App;
