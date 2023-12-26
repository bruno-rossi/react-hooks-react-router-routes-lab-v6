import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Director from "../components/Director";

function Directors() {

  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(res => res.json())
    .then(data => setDirectors(data))
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director => <Director key={director.id} director={director} /> )}
      </main>
    </>
  );
};

export default Directors;
