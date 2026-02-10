import { IconButton, Typography, Toolbar, AppBar } from "@mui/material"

export const Header = () => {
    return (
        <AppBar style={{backgroundColor: "grey"}}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Demo
                </Typography>
                <button>Login</button>
            </Toolbar>
        </AppBar>
    )
}