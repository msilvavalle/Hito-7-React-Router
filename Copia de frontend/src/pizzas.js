// src/pizzas.js
export const pizzas = [
    {
      id: "p001",
      name: "Napolitana",
      price: 5950,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    },
    {
      id: "p002",
      name: "Española",
      price: 7250,
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    },
    {
      id: "p003",
      name: "Salame",
      price: 5990,
      ingredients: ["mozzarella", "salame", "orégano"],
      img: "https://cdn.pedix.app/bzQ1KmPlactsBj0He8ZD/products/1606237798752.png?size=800x800",
    },
    {
      id: "p004",
      name: "Cuatro Quesos",
      price: 8450,
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "ricotta"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALM6T0DJ54ks2HgXpLAW2yWCRRH-CAy00cA&s",
    },
    {
      id: "p005",
      name: "Hawaiana",
      price: 7450,
      ingredients: ["mozzarella", "piña", "jamón"],
      img: "https://cdn.papajohns.cl/thumbnails/pizzas/hawaiana_1691158484_large.jpg",
    },
    {
      id: "p006",
      name: "Vegetariana",
      price: 6990,
      ingredients: ["mozzarella", "pimentón", "aceitunas", "champiñones"],
      img: "https://www.revistapancaliente.co/wp-content/uploads/2024/09/Pizza_vegetariana.jpg",
    },
  ];
  
  // Simula el carrito (puedes cambiar cantidades/precios si tu guía trae otros)
  export const pizzaCart = [
    { id: "p001", name: "Napolitana", price: 5950, img: pizzas[0].img, count: 1 },
    { id: "p002", name: "Española", price: 7250, img: pizzas[1].img, count: 1 },
    { id: "p003", name: "Salame", price: 5990, img: pizzas[2].img, count: 1 },
    { id: "p003", name: "Vegetariana", price: 6990, img: pizzas[1].img, count: 1 },
  ];
  