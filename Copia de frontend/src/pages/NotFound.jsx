import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="container text-center my-5">
      <h1 className="display-1">404 🍕</h1>
      <h2>¡Esta porción no existe!</h2>
      <p>La página que buscas no está disponible.</p>

      <Link to="/" className="btn btn-dark">
        Volver al inicio
      </Link>
    </main>
  );
};

export default NotFound;