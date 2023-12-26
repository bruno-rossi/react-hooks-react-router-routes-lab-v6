import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Actor from "../components/Actor";

function Actors() {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(res => res.json())
    .then(data => setActors(data))
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map(actor => <Actor key={actor.id} actor={actor} /> )}
      </main>
    </>
  );
};

export default Actors;
