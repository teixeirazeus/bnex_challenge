class Product {
  id: number;
  name: string;
  description: string;
  price: number;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
  }

  static fromJson(json: any): Product {
    return new Product(json);
  }
}

export default Product;
