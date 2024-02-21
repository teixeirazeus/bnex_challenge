import axios from "axios";
import { JWTHeader } from "./api-tools";
import Product from "../models/product";

class ProductApi {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getAll(token: string) {
    const failMessage = "Fail to get product list";
    return new Promise((resolve, reject) => {
      return axios
        .get(this.baseUrl + "v1/products/", JWTHeader(token))
        .then((response) => {
          const produtoList = response.data.map((productData: any) => {
            return Product.fromJson(productData);
          });
          resolve(produtoList);
        })
        .catch((error) => {
          reject(Error(failMessage));
        });
    });
  }

  get(token: string, productId: string) {
    const failMessage = "Fail to get product";
    return new Promise((resolve, reject) => {
      return axios
        .get(this.baseUrl + "v1/products/" + productId + "/", JWTHeader(token))
        .then((response) => {
          resolve(Product.fromJson(response));
        })
        .catch((error) => {
          reject(Error(failMessage));
        });
    });
  }

  update(token: string, product: Product) {
    const failMessage = "Fail to update product";
    return new Promise((resolve, reject) => {
      return axios
        .put(
          this.baseUrl + "v1/products/" + product.id + "/",
          product,
          JWTHeader(token)
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(Error(failMessage));
        });
    });
  }

  create(token: string, product: Product) {
    const failMessage = "Fail to create product";
    console.log("Create product");
    console.log("product", product);
    return new Promise((resolve, reject) => {
      return axios
        .post(this.baseUrl + "v1/products/", product, JWTHeader(token))
        .then((response) => {
          resolve(Product.fromJson(response));
        })
        .catch((error) => {
          reject(Error(failMessage));
        });
    });
  }

  delete(token: string, product: Product) {
    const failMessage = "Fail to delete product";
    return new Promise((resolve, reject) => {
      return axios
        .delete(
          this.baseUrl + "v1/products/" + product.id + "/",
          JWTHeader(token)
        )
        .then((response) => {
          // const produtoList = response.data.map((productData: any) => {
          //   return Product.fromJson(productData);
          // });
          resolve(null);
        })
        .catch((error) => {
          reject(Error(failMessage));
        });
    });
  }
}
export default ProductApi;
