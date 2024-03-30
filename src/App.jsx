import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [meteo, setmeteo] = useState("");
  const [icon, seticon] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=conakry&units=Metric&appid=345ace78bd38d73a66e10f79953b394b"
      )
      .then((response) => {
        console.log(response.data.weather[0].icon);
        seticon(response.data.weather[0].icon);
        setmeteo(response.data.main.temp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="box">
        <h1>Conakry </h1>
        <p style={{ fontSize: "32px" }}> Méteo : {meteo} °C</p>

        <img
          src={
            icon
              ? `https://openweathermap.org/img/wn/${icon}@2x.png`
              : "./tube-spinner.svg"
          }
          alt="meteo icone"
        />

        <button className="btn">Découvrir plus </button>
      </div>
    </>
  );
}

export default App;
