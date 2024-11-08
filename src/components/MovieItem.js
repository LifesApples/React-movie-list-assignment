import React from 'react';

//Komponent som visar titeln, betyg och en delete knapp för en film
function MovieItem({ movie, index, showStars, handleDelete }) {
  return (
    <div className="d-flex justify-content-between align-items-center bg-light m-1 rounded-1 p-1">
      <div>{movie.title} {showStars(parseInt(movie.rating))}</div>
      <button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm">✖</button>
    </div>
  );
}

export default MovieItem;
