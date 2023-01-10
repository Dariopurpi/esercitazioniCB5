import { Fragment, useEffect, useState } from "react";

const API_ENDPOINT = {
  BASE: `https://random-data-api.com/api/v2`,
  ADDRESS: `addresses`,
};

const URL = `${API_ENDPOINT.BASE}/${API_ENDPOINT.ADDRESS}`;

export const Fetch = () => {
  const [randomCity, setRandomCity] = useState(0);
  const singleCity = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((randomCity) => setRandomCity(randomCity));
  };

  useEffect(() => {
    singleCity();
  }, []);
  const { city, country } = randomCity;
  return (
    <div>
      <h1>Esercitazione fetch</h1>
      <h1>Città:{city}</h1>
      <p>Stato:{country}</p>
    </div>
  );
};
