class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 1;
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error('Todos los campos son obligatorios.');
    }

    if (this.products.some((product) => product.code === code)) {
      throw new Error(`Código duplicado: ${code}`);
    }

    const product = {
      id: this.generateProductId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(product);
    return product;
  }

  generateProductId() {
    return this.productIdCounter++;
  }

  getProductById(idProduct) {
    const product = this.products.find((product) => product.id === idProduct);

    if (!product) {
      throw new Error('Producto no encontrado.');
    }

    return product;
  }

  updateProduct(id, updatedFields) {
    const product = this.getProductById(id);

   
    for (const key in updatedFields) {
      if (key !== 'id' && product.hasOwnProperty(key)) {
        product[key] = updatedFields[key];
      }
    }
  }

  deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      throw new Error('Producto no encontrado.');
    }

    this.products.splice(index, 1);
  }
}

const manager = new ProductManager();

// Agregar productos
const product1 = manager.addProduct(
  "Alimento Pro Plan Perro Adulto Pequeño",
  "Su ingrediente principal es el pollo, que aporta un alto contenido de proteínas y la cantidad adecuada de grasa",
  20000,
  "http://imagen.jpg",
  "PROD-001",
  4
);
const product2 = manager.addProduct(
  "Excellent Smart Gato Adulto",
  "Alimento completo y balanceado a base de proteínas de alta calidad provenientes del pollo y el arroz como principales ingredientes.",
  15000,
  "http://imagen.jpg",
  "PROD-002",
  5
);

console.log("Productos agregados:");
console.log(manager.getProducts());


console.log("Intentar agregar un producto con código duplicado:");
try {
  manager.addProduct(
    "Alimento Duplicado",
    "Este producto tiene el mismo código que otro",
    30000,
    "http://imagen.jpg",
    "PROD-001",
    2
  );
} catch (error) {
  console.error(error.message); 
}

console.log("Producto no encontrado:");
try {
  const productNotFound = manager.getProductById(999);
  console.log(productNotFound);
} catch (error) {
  console.error(error.message); 
}

console.log("Producto encontrado:");
const productFound = manager.getProductById(product1.id);
console.log(productFound);

// Actualizacion
manager.updateProduct(product1.id, { price: 25000, description: 'Nuevo descripción' });
const updatedProduct = manager.getProductById(product1.id);
console.log("Producto actualizado:");
console.log(updatedProduct);

// Eliminar 
manager.deleteProduct(product2.id);
console.log("Productos después de eliminar uno:");
console.log(manager.getProducts());
