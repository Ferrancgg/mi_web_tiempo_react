import "./Prevision_card.css";

const Prevision_card = ({ fecha, temperatura, sensacion, icono }) => {
  return (
    <div className="fg-prevision-card">
      <p>{fecha}</p>
      <div className="fg-hora-img">
        {icono == "Clouds" ? (
          <img
            src="https://res.cloudinary.com/di49fnkc8/image/upload/v1695053462/web%20tiempo/nubes_pbraal.png"
            alt="clouds"
          />
        ) : icono == "Clear" ? (
          <img
            src="https://res.cloudinary.com/di49fnkc8/image/upload/v1694412053/web%20tiempo/sol_lxxcge.png"
            alt="Clear"
          />
        ) : icono == "Snow" ? (
          <img
            src="https://res.cloudinary.com/di49fnkc8/image/upload/v1695053599/web%20tiempo/nieve_1_gu9lqf.png"
            alt="snow"
          />
        ) : icono == "Rain" ? (
          <img
            src="https://res.cloudinary.com/di49fnkc8/image/upload/v1694412287/web%20tiempo/lluvia_ev1mw5.png"
            alt="rain"
          />
        ) : icono == "Drizzle" ? (
          <img
            src="https://res.cloudinary.com/di49fnkc8/image/upload/v1694412418/web%20tiempo/niebla_thumnf.png"
            alt="Drizzle"
          />
        ) : icono == "Thunderstorm" ? (
          <img
            src="https://res.cloudinary.com/di49fnkc8/image/upload/v1694412331/web%20tiempo/tormenta_kugafd.png"
            alt="Thunderstorm"
          />
        ) : (
          <p>no tengo icono</p>
        //   <img
        //   src="https://res.cloudinary.com/di49fnkc8/image/upload/v1694412053/web%20tiempo/sol_lxxcge.png"
        //   alt="Clear"
        // />
        )}
      </div>
      <div className="fg-information">
        <p className="fg-temperatura-prevision">Temperatura: {temperatura}ºC</p>
        <p className="fg-temperatura-prevision">Sensacion: {sensacion}ªC</p>
       
      </div>
    </div>
  );
};

export default Prevision_card;
