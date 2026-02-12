import { Card, CardActionArea, CardActions, CardContent, Typography, CardMedia } from "@mui/material";
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { Product } from "../types";

export const CardItem = ({ id, name, description, price, imagePath }: Product) => {
    const navigate = useNavigate();
    const [favorite, setToFavorite] = useState(false);

    const handleClick = () => {
        if (id) {
            navigate(`/product/${id}`);
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
                <Button
                    onClick={addToFavorite}
                >
                    {favorite ? <FavoriteIcon sx={{ color: "red" }}  /> : <FavoriteBorderIcon sx={{color: "black" }} />}
                </Button>
            </CardActions>
        </Card >
    );
}