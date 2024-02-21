import ProductApi from "./productApi";

class BnexApi {
  static baseUrl = "http://localhost:8000/api/";
  static product = new ProductApi(BnexApi.baseUrl);
}

export { BnexApi };
