import { ReactNode, createContext, useEffect, useState } from "react";
import Product from "../models/product";
import { BnexApi } from "../api/bnexApi";

type ProductRepositoryProps = { children: ReactNode };

type ProductRepositoryType = {
    products: Array<Product> | null;
    setProducts: (products: Array<Product>) => void;
    getProducts: () => Promise<Array<Product>>;
  };
  
export const ProductRepository = createContext<ProductRepositoryType>(
  {} as ProductRepositoryType
);

export const ProductRepositoryProvider = ({ children }: ProductRepositoryProps) => {

  const [products, setProducts] = useState<Array<Product> | null>(null);

  const getProducts = async () => {

    return BnexApi.product.getAll("token")
      .then((products: any) => {
        setProducts(products);
        return products;
      })
      .catch((error: any) => {
        console.error(error);
        return [];
      });
  };

return (
    <ProductRepository.Provider
        value={{
            products,
            setProducts,
            getProducts,
        }}
    >
        {children}
    </ProductRepository.Provider>
);
};
