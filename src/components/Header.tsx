import { IconButton, Typography, Toolbar, AppBar, Badge, Box } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';

export const Header = () => {
    const { cartCount } = useCart();

    return (
        <AppBar style={{ backgroundColor: "#ffffffee" }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" color="textPrimary" component="div" sx={{ flexGrow: 1 }}>
                    Demo
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton color="inherit" sx={{ fontSize: 40 }}>
                        <Badge 
                            badgeContent={cartCount} 
                            color="error"
                            sx={{ 
                                '& .MuiBadge-badge': { 
                                    fontSize: 14, 
                                    height: 24, 
                                    minWidth: 24 
                                } 
                            }}
                        >
                            <ShoppingCartIcon sx={{ fontSize: 40, color: "black"}} />
                        </Badge>
                    </IconButton>
                    <button>Login</button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}