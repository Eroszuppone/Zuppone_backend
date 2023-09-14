const ProductManager = require('./ProductManager'); 
const manager = new ProductManager();


const productId1 = 1; 
const productId2 = 2; 


const updatedProduct1 = {
  title: "Alimento Pro Plan Perro Adulto Pequeño",
  description: "Su ingrediente principal es el pollo, que aporta un alto contenido de proteínas y la cantidad adecuada de grasa",
  price: 20000,
  thumbnail: "http://imagen.jpg",
  code: "PROD-001",
  stock: 4,
};

const updatedProduct2 = {
  title: "Excellent Smart Gato Adulto",
  description: "Alimento completo y balanceado a base de proteínas de alta calidad provenientes del pollo y el arroz como principales ingredientes.",
  price: 15000,
  thumbnail: "http://imagen.jpg",
  code: "PROD-002",
  stock: 5,
};


manager.updateProduct(productId1, updatedProduct1);
manager.updateProduct(productId2, updatedProduct2);

// Agregar un nuevo producto
manager.addProduct(
  "Nuevo producto",
  "Descripción del nuevo producto",
  300,
  "Imagen del nuevo producto",
  "DEF-789", 
  10
);


const products = manager.getProducts();
console.log("Productos:", products);

