import { Box, Typography, Button, CircularProgress, Alert, CardMedia } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useProductById } from "../hooks/useProductById"

export const ProductDetailsPage = () => {
    const navigate = useNavigate()
    const { addToCart, removeFromCart } = useCart();
    const { id } = useParams<{ id: string }>();
    const productId = id ? Number(id) : undefined;
    const {data: product, isLoading, error} = useProductById(productId ?? 0);

    if (isLoading) {
        return ( <CircularProgress color="secondary" />)
    };

    if (error) {
        return ( <Alert severity="error">Error: Try again later</Alert>)
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, p: 4, backgroundColor: '#e3f2fd', minHeight: '100vh'}}>
            <Typography variant="h2" color="text.secondary">{product?.name}</Typography>
            <CardMedia
                component="img"
                src={product?.imagePath}
                alt={product?.name}
                sx={{ width: "100%", borderRadius: 2, maxWidth: 400 }}
            />
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, textAlign: "center"}}>
                {product?.description}
            </Typography>
            <Typography variant="h4" fontWeight={600} color="primary">
                ${product?.price}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" onClick={() => navigate("/")}>Go back</Button>
                <Button variant="contained" onClick={addToCart}>Add to Cart</Button>
                <Button variant="contained" color="error" onClick={removeFromCart}>Remove from Cart</Button>
            </Box>
        </Box>
    )
}
