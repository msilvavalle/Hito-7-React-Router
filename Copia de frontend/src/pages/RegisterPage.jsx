import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !pass1 || !pass2) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (pass1.length < 6) {
      alert("El password debe tener al menos 6 caracteres.");
      return;
    }

    if (pass1 !== pass2) {
      alert("El password y su confirmación deben ser iguales.");
      return;
    }

    alert("Registro exitoso ✅");
  };

  return (
    <div className="container my-5" style={{ maxWidth: 520 }}>
      <h2 className="text-center mb-4">Register</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter your password"
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Confirm your password"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
          />
        </div>

        <button className="btn btn-dark w-100" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
