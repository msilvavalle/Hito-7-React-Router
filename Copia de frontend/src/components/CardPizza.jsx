// src/components/CardPizza.jsx
import { Link } from "react-router-dom";
import pizzaDefault from "../assets/pizza-default.jpg";
import napolitana from "../assets/pizzas/napolitana.jpg";
import espanola from "../assets/pizzas/espanola.jpg";
import salame from "../assets/pizzas/salamee.jpg";
import cuatroEstaciones from "../assets/pizzas/cuatro-estaciones.jpg";
import bacon from "../assets/pizzas/bacon.jpg";
import polloPicante from "../assets/pizzas/Pollo picante.jpg";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const formatCurrency = (value) =>
    value.toLocaleString("es-CL", { minimumFractionDigits: 0 });

  const imagenes = {
    napolitana: napolitana,
    española: espanola,
    salame: salame,
    "cuatro estaciones": cuatroEstaciones,
    bacon: bacon,
    "pollo picante": polloPicante,
  };
  
  const imagenLocal = imagenes[name.toLowerCase()] || napolitana;

  return (
    <div className="card h-100">
      <img
  src={img}
  className="card-img-top"
  alt={name}
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = imagenLocal;
  }}
        
      />


      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>

        <p className="fw-bold mb-1">Ingredientes:</p>

        <ul className="list-unstyled flex-grow-1">
          {ingredients.map((ing, i) => (
            <li key={i}>🍕 {ing}</li>
          ))}
        </ul>

        <p className="fw-bold mt-2">
          Precio: ${formatCurrency(price)}
        </p>

        <div className="d-flex justify-content-between mt-2">
        <Link
  to={`/pizza/${id}`}
  className="btn btn-outline-secondary btn-sm"
>
  Ver más 👀
</Link>

          <button className="btn btn-dark btn-sm">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;