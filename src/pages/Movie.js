import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom"

function Movie() {

  const [movie, setMovie] = useState({});

  // Define params variable to store URL params.
  const params = useParams();
  // Define movieId variable with the id from the URL param, which was set in the routes file.
  const movieId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => res.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error))
  }, [movieId]);

  // Conditionally render a loading state to prevent erroring out while fetch is happening:
  if(!movie.title){
    return <h1>Loading...</h1>;
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        {movie.genres.map(genre => <span key={genre}>{genre}</span>)}
      </main>
    </>
  );
};

export default Movie;
