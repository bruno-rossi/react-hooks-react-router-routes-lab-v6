import React from "react";

function Director({director}) {
    return (
        <article>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>
          </article>
    );
};

export default Director;