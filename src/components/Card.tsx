import { Card, CardActionArea, CardActions, CardContent, Typography, CardMedia } from "@mui/material";

export interface Product {
    name: string;
    description: string;
    price: number;
    imagePath: string;
}

export const CardItem = ({ name, description, price, imagePath }: Product) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    sx={{
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                    }}
                    component="img"
                    image={imagePath}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography>
                    {price}
                </Typography>
            </CardActions>
        </Card>
    );
}