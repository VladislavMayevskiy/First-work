import React from "react";
import { Container, Box } from "@mui/material";
import ProductCard from "../pages/ProductCard";
import product1 from "../images/product1.png";
import product2 from "../images/product2.png";
import logo from "../images/logo.png"

const products = [
  { image: product1, title: "Трансформер", description: "Професійний тренажер для армрестлінгу." },
  { image: product2, title: "Сила кісті", description: "Тренажер для кісті" },
  { image: logo, title: "Самсон", description: "" },
];

const ProductList = () => {
  

  return (
    <Container sx={{ mt: 5 }}>
      
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
         
          gap: 2,
          p: 2,
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        
      >
        {products.map((product, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
              width: 350,
          
    
              textAlign : "center"
            }}
          >
            <ProductCard {...product} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ProductList;
