import { useQuery } from "@tanstack/react-query"
import type { Product } from "../types"
import { BASE_URL } from "../constants";

export const useProductById = (id: number) => {

    return useQuery<Product>({
        queryKey: ["product", id],
        queryFn: async () => {
            const response = await fetch(`${BASE_URL}products/${id}`)

            if (!response.ok) {
                throw new Error("Error searching product by ID");
            }

            return response.json();
        },

        enabled: !!id,
    })
};
