import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import ProductList from "./ProductList";
import { useNavigate } from "react-router-dom";
import forHome from "../images/forHome.png";
import tableBefore from "../images/tableBefore.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: `"Montserrat", "Roboto", "Arial", sans-serif`,
  },
});

const Home = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box textAlign="center" my={4}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Виготовлення професійних спортивних тренажерів
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Ми спеціалізуємося на виробництві якісного обладнання для тренажерних залів та домашніх тренувань.
          </Typography>
        </Box>

        <Box textAlign="center" mb={4}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={() => navigate("/products")}
          >
            Переглянути каталог
          </Button>
        </Box>

        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center"
          flexWrap="wrap"
          mb={4}
          gap={2} 
        >
          <Box textAlign="center" maxWidth="45%">
            <img 
              src={tableBefore} 
              alt="Станок перед обробкою" 
              style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }} 
            />
            <Typography variant="h6" mt={2}>
              Ось це каркас столу для боротьби з армреслінгу. Зроблений з металопрофілю.
            </Typography>
          </Box>

          <Box textAlign="center" maxWidth="45%"> 
            <img 
              src={forHome} 
              alt="Процес виготовлення" 
              style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }} 
            />
            <Typography variant="h6" mt={2}>
              На цьому станку робляться більшість виробів.
            </Typography>
          </Box>
        </Box>

        <Typography variant="h4" fontWeight="bold" mb={2}>
          Популярні товари
        </Typography>
        <ProductList />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
