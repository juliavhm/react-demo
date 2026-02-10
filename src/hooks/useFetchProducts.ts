import { useEffect, useState } from "react"
import type { Product } from "../types";

export const useFetchProducts = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3000/products");
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

