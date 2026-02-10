import { useEffect, useState } from "react"
import type { Product } from "../types";

export const useFetchProducts = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const PRODUCTS_URL = "http://localhost:3000/products";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(PRODUCTS_URL);
                const data = await response.json();

                setProducts(data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts();
    }, [])

    return products;
};

