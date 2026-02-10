import { Box, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useFetchProducts } from "../hooks/useFetchProducts"

export const WirelessHeadphonesPage = () => {
    const navigate = useNavigate()
    const { addToCart, removeFromCart } = useCart()
    const products = useFetchProducts();

    const product = products.find(p => p.name === "Wireless Headphones")

    if (!product) return null

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, p: 4 }}>
            <Typography variant="h2">{product.name}</Typography>
            <Box
                component="img"
                src={product.imagePath}
                alt={product.name}
                sx={{ maxWidth: 500, width: "100%", borderRadius: 2 }}
            />
            <Typography variant="h6" sx={{ maxWidth: 600, textAlign: "center" }}>
                {product.description}
            </Typography>
            <Typography variant="h3" fontWeight={600} color="primary">
                ${product.price}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained" onClick={() => navigate("/")}>Voltar</Button>
                <Button variant="contained" onClick={addToCart}>Add to Cart</Button>
                <Button variant="contained" color="error" onClick={removeFromCart}>Remove from Cart</Button>
            </Box>
        </Box>
    )
}
