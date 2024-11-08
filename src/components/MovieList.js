import React from 'react';
import MovieItem from './MovieItem';

//Komponent för listan av filmer samt knappar för att sortera filmerna alfabetiskt och efter betyg.
function MovieList({ movies, handleDelete, sortAlphabetically, sortByRating, showStars }) {
  return (
    <div className="mt-4">
      <h2>Inlagda filmer</h2>
      {movies.map((movie, index) => (
        <MovieItem
          key={index}
          movie={movie}
          index={index}
          showStars={showStars}
          handleDelete={handleDelete}
        />
      ))}
      <button className="btn btn-primary m-1" onClick={sortAlphabetically}>Alfabetisk ordning</button>
      <button className="btn btn-primary m-1" onClick={sortByRating}>Betygsordning</button>
    </div>
  );
}

export default MovieList;
