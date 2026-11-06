import { useContext, useMemo, useState } from "react";
import { pizzaCart } from "../pizzas";
import { UserContext } from "../context/UserContext.jsx";

const Cart = () => {
  const { token } = useContext(UserContext);
  const [cart, setCart] = useState(pizzaCart);

  const add = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p))
    );
  };

  const sub = (id) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p))
        .filter((p) => p.count > 0) // si llega a 0, se elimina
    );
  };

  const total = useMemo(
    () => cart.reduce((acc, p) => acc + p.price * p.count, 0),
    [cart]
  );

  const formatCurrency = (value) =>
    value.toLocaleString("es-CL", { minimumFractionDigits: 0 });

  return (
    <div className="container my-4" style={{ maxWidth: 720 }}>
      <h4 className="fw-bold mb-3">Detalles del pedido:</h4>

      {cart.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="d-flex flex-column gap-3">
            {cart.map((p) => (
              <div
                key={p.id}
                className="d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={p.img}
                    alt={p.name}
                    width="55"
                    height="55"
                    style={{ objectFit: "cover", borderRadius: 8 }}
                  />
                  <div className="fw-semibold">{p.name}</div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="fw-bold">${formatCurrency(p.price)}</div>

                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => sub(p.id)}
                  >
                    −
                  </button>

                  <span className="fw-bold">{p.count}</span>

                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => add(p.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <hr />

          <h4 className="fw-bold">Total: ${formatCurrency(total)}</h4>

         
<button
  className="btn btn-dark mt-3"
  disabled={!token}
>
  Pagar
</button>

{!token && (
  <p className="text-danger mt-2">
    Debes iniciar sesión para realizar el pago.
  </p>
)}

        </>
      )}
    </div>
  );
};

export default Cart;
