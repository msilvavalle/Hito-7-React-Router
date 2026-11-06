
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const total = 0;

  const formatCurrency = (value) =>
    value.toLocaleString("es-CL", {
      minimumFractionDigits: 0,
    });

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4 gap-3">
      <Link to="/" className="navbar-brand">
        Pizzería Mamma Mía
      </Link>

      <div className="d-flex flex-wrap gap-2">
        <Link to="/" className="btn btn-outline-light">
          🏠 Home
        </Link>

        {token ? (
          <>
            <Link
              to="/profile"
              className="btn btn-outline-light"
            >
              👤 Profile
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-outline-light"
            >
              🔓 Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline-light"
            >
              🔐 Login
            </Link>

            <Link
              to="/register"
              className="btn btn-outline-light"
            >
              📝 Register
            </Link>
          </>
        )}

        <Link to="/404" className="btn btn-outline-light">
          404
        </Link>

        <Link to="/cart" className="btn btn-warning">
          🛒 Total: ${formatCurrency(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
