import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../images/logo.png";

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ padding: "10px",backgroundColor: "#333" }}>
            <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                
                {/* Логотип + Текст */}
                <Box 
                    sx={{ 
                        
                        display: "flex", 
                        alignItems: "center", 
                        flexGrow: 1,
                        background: "linear-gradient(45deg,rgb(0, 0, 0),rgb(246, 246, 246))",
                        padding: "10px",
                        borderRadius: "5px",
                    }}
                >
                    <Box 
                        component="img" 
                        src={logo} 
                        alt="Logo" 
                        sx={{ width: 70, marginRight: 1 }}
                    />
                    <Box sx={{ textAlign: "left" }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                            Виготовлення професійних спортивних тренажерів
                        </Typography>
                        <Typography variant="body2" sx={{ color: "lightgray" }}>
                            0959395791
                        </Typography>
                    </Box>
                </Box>

                {/* Кнопка Instagram */}
                <IconButton 
                    href="https://www.instagram.com/mayevskij_vasili?igsh=MXIxcXE3dmpwN3cwaA==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    sx={{ color: "white", ml: 2 }}
                >
                    <InstagramIcon sx={{ fontSize: 32 }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
