import "./CitySelector.css";
import React from "react";
import useCityData from "../../hooks/useCityData/useCityData";
import PaginaCarga from "../../components/PaginaCarga/PaginaCarga";
import Prevision_card from "../../components/Prevision_card/Prevision_card";

const CitySelector = () => {
  const { city, data, loading, dataWeather, buscar } = useCityData();

  return (
    <main>
      <section className="search-container">
        <div className="search">
          <input type="text" id="cityInput" placeholder="Escribe la capital" />
          <button onClick={buscar}>Buscar</button>
        </div>
        <div className="response">
          <h2>{city}</h2>
        </div>
        <div className="response-information">
          <p>Pais: {data ? data[0].name.common : ""}</p>
          <p>Continente: {data ? data[0].region : ""}</p>
        </div>
      </section>

      <section>
        {loading && <PaginaCarga />}
        {data && console.log(data)}
        {dataWeather && console.log(dataWeather)}
        {dataWeather !== null ? (
          <div className="fg-prevision-container">
            {[0, 8, 16, 24, 32].map((index) => (
              <Prevision_card
                key={index}
                fecha={dataWeather.list[index].dt_txt.slice(0, 10)}
                temperatura={dataWeather.list[index].main.temp}
                sensacion={dataWeather.list[index].main.feels_like}
                icono={dataWeather.list[index].weather[0].main}
              />
            ))}
          </div>
        ) : (
          <PaginaCarga />
        )}

     
      </section>
    </main>
  );
};

export default CitySelector;
