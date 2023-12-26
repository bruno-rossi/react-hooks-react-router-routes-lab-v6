import React from "react";

function Actor({actor}) {
    return (
        <article>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>
          </article>
    );
};

export default Actor;