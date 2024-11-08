import React from 'react';

//Komponent som visar forumläret för användaren
function MovieForm({ newMovie, handleTitleChange, handleRatingChange, handleSubmit }) {
  return (
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
  );
}

export default MovieForm;
