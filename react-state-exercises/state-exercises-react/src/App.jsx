import { useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'The Dark Knight', genre: 'Action' },
    { id: 2, title: 'Interstellar', genre: 'Sci-fi' },
    { id: 3, title: 'Remember the Titans', genre: 'Drama' },
  ]);

  const movieOptions = [
    { title: 'Inception', genre: 'Sci-Fi' },
    { title: 'Top Gun Maverick', genre: 'Action' },
    { title: 'Whiplash', genre: 'Drama' },
    { title: 'The Matrix', genre: 'Sci-Fi' },
    { title: 'Creed', genre: 'Sports' },
  ];

  const handleAddMovie = () => {
    const randomMovie =
      movieOptions[Math.floor(Math.random() * movieOptions.length)];

    const newMovie = {
      id: crypto.randomUUID(),
      title: randomMovie.title,
      genre: randomMovie.genre,
    };
    setMovies((prevMovies) => {
      return [...prevMovies, newMovie];
    });
  };

  const handleRemoveMovie = (id) => {
    setMovies((prevMovies) => {
      return prevMovies.filter((movie) => {
        return movie.id !== id;
      });
    });
  };

  return (
    <main className="page">
      <section className="status-card">
        <p className="eyebrow">React State Exercises</p>
        <h1>Favorite Movies</h1>
        <p className="role">Practice rendering arrays from state.</p>

        <ul className="movie-list">
          {movies.map((movie) => {
            return (
              <li key={movie.id} className="movie-item">
                <div>
                  <span>{movie.title}</span>
                  <small>{movie.genre}</small>
                </div>

                <button
                  className="delete-button"
                  onClick={() => handleRemoveMovie(movie.id)}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>

        <button className="toggle-button" onClick={handleAddMovie}>
          Add Movie
        </button>
      </section>
    </main>
  );
};

export default App;
