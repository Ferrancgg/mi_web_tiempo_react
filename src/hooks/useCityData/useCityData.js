import { useState, useEffect } from "react";
import { APIkeyWeather } from "../../data/apiKey";



const useCityData = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataWeather, setDataWeather] = useState(null);

  const buscar = () => {
    setCity(document.getElementById("cityInput").value);
  };

  const obtenerDatosMeteorologicos = (lat1, lon1) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat1}&lon=${lon1}&appid=${APIkeyWeather}&units=metric`
    )
      .then((response) => response.json())
      .then((dataWeather) => {
        setDataWeather(dataWeather);
      })
      .catch((error) => {
        setError(`Error al obtener datos meteorológicos: ${error.message}`);
      });
  };

  useEffect(() => {
    if (city === "") {
      setData(null);
      return;
    }
    setLoading(true);
    setError(null);

    fetch(`https://restcountries.com/v3.1/capital/${city}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${city} no es una capital`);
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        obtenerDatosMeteorologicos(
          responseData[0].capitalInfo.latlng[0],
          responseData[0].capitalInfo.latlng[1]
        );
      })
      .catch((error) => {
        setError(`Error al buscar la capital: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city]);

  return { city, data, loading, error, dataWeather, buscar };
};

export default useCityData;
