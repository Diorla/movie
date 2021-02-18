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
  const [rating, setRating] = useState(0);
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
    return (initialRating * size + newRating) / (size + 1);
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
    } else setData([...data, { title: movie, rating, duration, votes: 1 }]);
  };

  return (
    <Container>
      <h1>Rate your favorite movies</h1>
      <Form>
        <TextInput
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          placeholder="Title of movie"
          label="Movie"
          list="browsers"
          required
        />
        <datalist id="browsers">
          {data.map((item: { title: string }) => (
            <option value={item.title} key={item.title} />
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
