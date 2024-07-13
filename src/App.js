import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Display from "./Components/Display";
import axios from "axios";
import apiConfig from "./server";
function App() {
  const [set, get] = React.useState({
    _id: "",
    movie: "",
    year: "",
    Genre: "",
    url: "",
  });
  const deleteMe = () => {
    get((set) => ({
      ...set,
      ...{ _id: "", movie: "", year: "", Genre: "", url: "" },
    }));
  };
  const equalItem = (a) => {
    axios.get(`${apiConfig.moviesapi}/getMovie/${a}`).then((values) => {
      get((set) => ({
        ...set,
        ...values.data,
      }));
    });
  };
  return (
    <>
      <Header equalItem={equalItem} />
      {set._id !== "" ? <Display value={set} deleteMe={deleteMe} /> : <></>}
    </>
  );
}

export default App;
