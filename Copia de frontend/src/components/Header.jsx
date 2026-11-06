// src/components/Header.jsx

const headerStyle = {
    backgroundImage: 'url("/img/header.jpg")', // cambia a tu imagen
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  };
  
  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  };
  
  const Header = () => {
    return (
      <header style={headerStyle} className="py-5">
        <div className="container" style={overlayStyle}>
          <div className="text-center py-5">
            <h1 className="display-4">¡Pizzería Mamma Mía!</h1>
            <p className="lead">
              Las mejores pizzas que podrás encontrar, con ingredientes frescos y
              sabores irresistibles. ¡Haz tu pedido y disfruta!
            </p>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  