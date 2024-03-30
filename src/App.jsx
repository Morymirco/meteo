import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [meteo, setmeteo] = useState("");
  const [icon, seticon] = useState("");
  const [info, setinfo] = useState("");
const [error,seterror]=useState(false)
  const [url, seturl] = useState("https://api.openweathermap.org/data/2.5/weather?q=conakry&units=Metric&appid=345ace78bd38d73a66e10f79953b394b");
  function search(){

    seturl(`https://api.openweathermap.org/data/2.5/weather?q=${info}&units=Metric&appid=345ace78bd38d73a66e10f79953b394b`)
    console.log(url)
    console.log(error)
  }
  function handlechange(e){
    setinfo(e.target.value)
  }
  useEffect(() => {
    axios
      .get(
        url
      )
      .then((response) => {
        console.log(response.data.weather[0].icon);
        seticon(response.data.weather[0].icon);
        setmeteo(response.data.main.temp);
        seterror(false)
      })
      .catch((error) => {
        seterror(true)
        console.log(error);
      }); 
  }, [url]);

  return (
    <>
      <div className="box">
        <input type="search" onChange={handlechange} />
        <button className="btn" onClick={search}>Réchercher </button>
        <h1>{error ? <p style={{fontSize:"12px"}}>Aucune correspondance</p> :info}</h1>
        <p style={{ fontSize: "32px" }}> Méteo : {error ? "-" :meteo} °C</p>

        <img
          src={
            icon
              ? `https://openweathermap.org/img/wn/${icon}@2x.png`
              : "./tube-spinner.svg"
          }
          alt="meteo icone"
        />
      
      </div>
    </>
  );
}

export default App;
