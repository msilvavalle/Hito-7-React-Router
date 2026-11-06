import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");

        if (!response.ok) {
          throw new Error("No se pudieron obtener las pizzas");
        }

        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
      }
    };

    getPizzas();
  }, []);

  return (
    <main>
      <Header />

      <section className="container my-4">
        <div className="row g-3">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4">
             
<CardPizza
  id={pizza.id}
  name={pizza.name}
  price={pizza.price}
  ingredients={pizza.ingredients}
  img={pizza.img}
/>

            </div>
          ))}
        </div>|
      </section>
    </main>
  );
};

export default Home;