
import React from "react";
import "./Prevision_card.css";

const iconos = {
  Clouds: "https://res.cloudinary.com/di49fnkc8/image/upload/v1695053462/web%20tiempo/nubes_pbraal.png",
  Clear: "https://res.cloudinary.com/di49fnkc8/image/upload/v1694412053/web%20tiempo/sol_lxxcge.png",
  Snow: "https://res.cloudinary.com/di49fnkc8/image/upload/v1695053599/web%20tiempo/nieve_1_gu9lqf.png",
  Rain: "https://res.cloudinary.com/di49fnkc8/image/upload/v1694412287/web%20tiempo/lluvia_ev1mw5.png",
  Drizzle: "https://res.cloudinary.com/di49fnkc8/image/upload/v1694412418/web%20tiempo/niebla_thumnf.png",
  Thunderstorm: "https://res.cloudinary.com/di49fnkc8/image/upload/v1694412331/web%20tiempo/tormenta_kugafd.png",
};

const Prevision_card = ({ fecha, temperatura, sensacion, icono }) => {
  const iconoURL = iconos[icono] || "URL de la imagen por defecto (si no se encuentra)";

  return (
    <div className="fg-prevision-card">
      <p>{fecha}</p>
      <div className="fg-hora-img">
        <img src={iconoURL} alt={icono} />
      </div>
      <div className="fg-information">
        <p className="fg-temperatura-prevision">Temperatura: {temperatura}ºC</p>
        <p className="fg-temperatura-prevision">Sensacion: {sensacion}ªC</p>
      </div>
    </div>
  );
};

export default Prevision_card;
