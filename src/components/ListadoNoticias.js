import React from "react";
import PropTypes from "prop-types";

import Noticia from "./Noticia";

const ListadoNoticias = ({ noticias }) => {
  return (
    <div className="row">
      {noticias.map((noticia) => {
        return <Noticia key={noticia.url} noticia={noticia} />;
      })}
    </div>
  );
};

ListadoNoticias.propTypes = {
  noticia: PropTypes.array.isRequired,
};
export default ListadoNoticias;
