import { useEffect, useState } from "react"
import type { Product } from "../types";
import { BASE_URL } from "../constants";

export const useFetchProducts = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const url = BASE_URL + "products";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                setProducts(data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts();
    }, [url]);

    return products;
};

