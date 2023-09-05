class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log(`Código duplicado: ${code}`);
        return;
      }
  
      if (this.products.some((product) => product.code === code)) {
        console.error(`Código ya existe: ${code}`);
        return;
      }
  
      const product = {
        id: this.generateProductId(),
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock,
      };
      this.products.push(product);
    }
  
    generateProductId() {
      return this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
    }
  
    getProductById(idProduct) {
      const product = this.products.find((product) => product.id === idProduct);
  
      if (!product) {
        console.error("Producto no encontrado.");
        return null;
      }
  
      return product;
    }
  }
  
  const manager = new ProductManager();
  
  console.log("getProducts (arreglo vacío):");
  console.log(manager.getProducts());
  
  // Agregar un producto 
  manager.addProduct(
    "Alimento Pro Plan Perro Adulto Pequeño",
    "Su ingrediente principal es el pollo, que aporta un alto contenido de proteínas y la cantidad adecuada de grasa",
    20000,
    "http://imagen.jpg",
    "PROD-001",
    4
  );
  manager.addProduct(
    "Excellent Smart Gato Adulto",
    "Alimento completo y balanceado a base de proteínas de alta calidad provenientes del pollo y el arroz como principales ingredientes.",
    15000,
    "http://imagen.jpg",
    "PROD-002",
    5
  );
  
  
  console.log("getProducts (producto recién agregado):");
  console.log(manager.getProducts());
  
  // Mismo producto nuevamente
  manager.addProduct(
    "Alimento Pro Plan Perro Adulto Pequeño",
    "Su ingrediente principal es el pollo, que aporta un alto contenido de proteínas y la cantidad adecuada de grasa",
    20000,
    "http://imagen.jpg",
    "PROD-001",
    4
  );
  
  console.log("producto no encontrado");
  const productNotFound = manager.getProductById(999); 
  console.log(productNotFound);
  
  console.log("producto encontrado");
  const productFound = manager.getProductById(1); 
  console.log(productFound);
  
  