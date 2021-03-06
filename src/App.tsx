import React, { useEffect, useState } from "react";
import RatingInput from "./components/RatingInput";
import TextInput from "./components/TextInput";
import Submit from "./components/Submit";
import api from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Data from "./components/Data";
import { Form } from "react-bootstrap";

function App() {
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState(1);
  const [duration, setDuration] = useState("2:45");
  const [data, setData] = useState([] as any);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setData(api);
  }, []);

  const setAverage = (
    initialRating: number,
    size: number,
    newRating: number
  ) => {
    console.log({
      initialRating,
      size,
      newRating,
    });
    return (initialRating * size + Number(newRating)) / (Number(size) + 1);
  };

  const handleSubmit = () => {
    const movieList = data.map((item: { title: string }) => item.title);

    if (movieList.includes(movie)) {
      const index = movieList.indexOf(movie);
      const movieData = data[index];
      const newRating = setAverage(movieData.rating, movieData.votes, rating);
      setData([
        ...data.slice(0, index),
        {
          title: movie,
          rating: newRating,
          duration,
          votes: movieData.votes + 1,
        },
        ...data.slice(index + 1),
      ]);
    } else
      setData([
        { title: movie, rating: Number(rating), duration, votes: 1 },
        ...data,
      ]);
  };

  return (
    <Container>
      <h1>Rate your favorite movies</h1>
      <Form>
        <div className="form-group">
          <label className="form-label" htmlFor="formBasicEmail">
            Movie
          </label>
          <input
            type="text"
            id="formBasicEmail"
            className="form-control"
            data-slug-id="movie"
            data-category="user-data"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            placeholder="Title of movie"
            list="myMovies"
          />
        </div>
        <datalist id="myMovies">
          {data.map((item: { title: string }, idx: number) => (
            <option value={item.title} key={idx} />
          ))}
        </datalist>
        <RatingInput
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Scale of 0 to 5"
          label="Rating"
          required
        />
        <TextInput
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="How long the movie took"
          label="Duration"
          required
        />
        <Submit onClick={handleSubmit} />
      </Form>
      <br />
      <TextInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Filter movies"
        label="Search"
      />
      <Data data={data} filter={search} />
    </Container>
  );
}

export default App;
