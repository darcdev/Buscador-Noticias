import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

const API_KEY = "e302bb6b91da47cdab9e70bdf504e38a";

function App() {
  // definit categoria y noticias

  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${API_KEY}`;
      const noticias = await (await fetch(url)).json();
      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);
  return (
    <>
      <Header titulo="Buscador de Noticias" />

      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />

        <ListadoNoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
