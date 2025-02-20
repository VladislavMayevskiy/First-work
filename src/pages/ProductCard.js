import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box, Container } from "@mui/material";
import { useNavigate } from "react-router";


const ProductCard = ({ image, title, description }) => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box position="absolute" top={20} left={1040} zIndex={1}  width="100">
        <Button 
          variant="contained" 
          color="secondary"
          onClick={() => navigate(-1)} 
          sx={{
            backgroundColor: "rgb(192, 190, 190)",  
            color: "rgb(255, 255, 255)",              
            "&:hover": {
              backgroundColor: "rgb(0, 0, 0)",  }}}>
        
          На головну 
        </Button>
      </Box>

      <Card sx={{ 
        maxWidth: 345, 
        borderRadius: 3, 
        boxShadow: 3, 
        textAlign: "center", 
        paddingBottom: 3, 
        marginTop: 5 
      }}>
        <CardMedia 
          component="img" 
          height="200" 
          image={image} 
          alt={title} 
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {description}
          </Typography>
          <Box>
            <Button variant="outlined" color="primary">
              Детальніше
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductCard;
