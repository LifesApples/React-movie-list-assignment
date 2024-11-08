import React, { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

// Komponent med state-hantering
function App() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: '', rating: '' });

  // Hanterar förändringar i titelfältet
  const handleTitleChange = (event) => {
    setNewMovie({ ...newMovie, title: event.target.value });
  };

  // Hanterar förändringar i betygsfältet
  const handleRatingChange = (event) => {
    setNewMovie({ ...newMovie, rating: event.target.value });
  };

  // Skickar formulärdata och lägger till en ny film
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newMovie.title || !newMovie.rating) {
      alert('En titel och ett betyg måste anges');
      return;
    }
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', rating: '' });
  };

  // Funktion för att ta bort en film från listan
  const handleDelete = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  // Sorterar filmer alfabetiskt
  const sortAlphabetically = () => {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
  };

  // Sorterar filmer efter betyg
  const sortByRating = () => {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sortedMovies);
  };

  // Visar stjärnor baserat på betyg
  const showStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="text-warning">★</span>
    ));
  };

  return (
    <div className="container mt-5">
      <h1>Min filmlista</h1>
      <h3>Lägg till en film</h3>
      <hr />
      <MovieForm
        newMovie={newMovie}
        handleTitleChange={handleTitleChange}
        handleRatingChange={handleRatingChange}
        handleSubmit={handleSubmit}
      />
      <MovieList
        movies={movies}
        handleDelete={handleDelete}
        sortAlphabetically={sortAlphabetically}
        sortByRating={sortByRating}
        showStars={showStars}
      />
    </div>
  );
}

export default App;
