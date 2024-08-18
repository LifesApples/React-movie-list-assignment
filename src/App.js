import React, { useState } from 'react';

// Använder React-komponent med state-hantering
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
    setNewMovie({ title: '', rating: '' }); // Återställer formuläret efter inskickning
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
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titel:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={newMovie.title}
            onChange={handleTitleChange}
            placeholder="Titel här..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Betyg:</label>
          <select
            className="form-select"
            id="rating"
            value={newMovie.rating}
            onChange={handleRatingChange}
          >
            <option value="">Välj betyg här...</option>
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Spara film</button>
      </form>
      <div className="mt-4">
        <h2>Inlagda filmer</h2>
        {movies.map((movie, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center bg-light m-1 rounded-1 p-1">
            <div>{movie.title} {showStars(parseInt(movie.rating))}</div>
            <button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm">✖</button>
          </div>
        ))}
        <button className="btn btn-primary m-1" onClick={sortAlphabetically}>Alfabetisk ordning</button>
        <button className="btn btn-primary m-1" onClick={sortByRating}>Betygsordning</button>
      </div>
    </div>
  );
}

export default App;
