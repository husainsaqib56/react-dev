import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating maxRating={5} onSetRating={setMovieRating} />
      <p>This move was rated {movieRating} Stars</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
    {/* <StarRating maxRating={10} />
    <StarRating /> */}
    <StarRating color="#ff0000" size={48} />
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Great"]}
      defaultRating={3}
    />

    <Test maxRating={5} />
  </React.StrictMode>,
);
