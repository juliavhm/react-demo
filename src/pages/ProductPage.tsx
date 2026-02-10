import { Grid, Typography } from "@mui/material"
import { CardItem } from "../components/Card"
import products from "../data/products.json";

export const ProductPage = () => {
    return (
        <Grid container direction="column" spacing={8} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Grid>
                <Typography variant="h2">
                    Products
                </Typography>
            </Grid>

            { /* conditional rendering and map */ }
            <Grid container spacing={8}>
                {products.map((product) => (
                    product.imagePath && product.name && product.description && (
                        <Grid key={product.name}>
                            <CardItem name={product.name} description={product.description} price={product.price} imagePath={product.imagePath} />
                        </Grid>
                )))}
            </Grid>
        </Grid>

    )
}