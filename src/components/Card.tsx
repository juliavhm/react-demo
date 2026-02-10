import { Card, CardActionArea, CardActions, CardContent, Typography, CardMedia, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export interface Product {
    name: string;
    description: string;
    price: number;
    imagePath: string;
}

export const CardItem = ({ name, description, price, imagePath }: Product) => {
    const navigate = useNavigate();
    const [favorite, setToFavorite] = useState(false);

    const handleClick = () => {
        if (name === "Wireless Headphones") {
            navigate("/wireless-headphones");
        }
    };

    const addToFavorite = () => {
        setToFavorite(prev => !prev);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={handleClick}>
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
                <IconButton onClick={addToFavorite} disableRipple>
                    { /* ternary and useState */}
                    {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
            </CardActions>
        </Card>
    );
}