import { Grid, Typography } from "@mui/material"
import { CardItem } from "../components/Card"
import { useFetchProducts } from "../hooks/useFetchProducts"

export const ProductPage = () => {

    const products = useFetchProducts();

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
                        <Grid key={product.id}>
                            <CardItem id={product.id} name={product.name} description={product.description} price={product.price} imagePath={product.imagePath} />
                        </Grid>
                )))}
            </Grid>
        </Grid>

    )
}