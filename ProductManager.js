const fs = require('fs');

class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 1;
    this.loadProductsFromFile(); 
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
    this.saveProductsToFile(); 
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

    this.saveProductsToFile(); 
  }

  deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      throw new Error('Producto no encontrado.');
    }

    this.products.splice(index, 1);
    this.saveProductsToFile(); 
  }

  saveProductsToFile() {
    const data = JSON.stringify(this.products, null, 2);

    
    fs.writeFileSync('products.json', data, 'utf8');
  }

  loadProductsFromFile() {
    try {
      
      const data = fs.readFileSync('products.json', 'utf8');

      
      this.products = JSON.parse(data);
    } catch (error) {
      
      this.products = [];
    }
  }
}

module.exports = ProductManager;
