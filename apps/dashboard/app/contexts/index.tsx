import { Product } from "@repo/types";
import React, { useCallback, useMemo } from "react";

export interface ProductInterface {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export interface ProductProviderProps {}

const ProductContext = React.createContext<ProductInterface>(
  {} as ProductInterface
);
ProductContext.displayName = "Product";

const ProductProvider = ({
  ...props
}: React.PropsWithChildren<ProductProviderProps>) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  const memoValue = useMemo(
    () => ({
      products,
      setProducts,
    }),
    [products, setProducts]
  );

  return <ProductContext.Provider value={memoValue} {...props} />;
};

function useProduct() {
  return React.useContext(ProductContext);
}

export { ProductProvider, useProduct };
