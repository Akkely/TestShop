import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
  Rating 
} from '@mui/material';
import Cart from './Cart';
/* import UserItemSmall from './UserItemSmall'; */
import { toDateTimeString } from '../common/formatHelpers';
import placeholderImage from '../assets/placeholder.png';
import { calculateAverageRating } from '../common/helpers';
import React, { useState } from 'react';

function ProductItemLarge({ product }) {
  console.log(product);
 

  const averageRating = product ? calculateAverageRating(product.reviews) : 0;




  // Exempel på funktion i ProductItemLarge.jsx för att hantera lägg till i varukorgen
const [cartItems, setCartItems] = useState([]);
const addToCart = (product) => {
  // Antag att vi har en funktion setCartItems för att uppdatera varukorgen
  // Och en cartItems stat som håller i alla produkter i varukorgen
  setCartItems(currentItems => {
    const itemExists = currentItems.find(item => item.id === product.id);
    if (itemExists) {
      // Öka antalet om produkten redan finns
      return currentItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Lägg till ny produkt i varukorgen
      return [...currentItems, { ...product, quantity: 1 }];
    }
  });
};
  
  return (
    
    <Paper sx={{ my: 4, p: 4, borderRadius: 2 }} elevation={3}>
      <Box>
     
        {/* <UserItemSmall style={{ marginBottom: '.3rem' }} user={product.author} /> */}
        <Typography variant="h2">{product.title}</Typography>
        <Typography>
          Produkten publicerades: {toDateTimeString(product.createdAt)}
          
        </Typography>
   
        {/* {product.reviews && product.reviews.length > 0 && ( */}
       {/* <Typography component="legend">Genomsnittsbetyg</Typography> */}

       <Rating name="read-only" value={averageRating} readOnly />

      </Box>
      <Card elevation={0}>
        <CardMedia component="img" image={product.imageUrl || placeholderImage} />



        <CardContent>
          {product.carts &&
            product.carts.map((cart) => <Cart key={`cart_${cart}`} text={cart} />)}
            



          <Typography variant="body1">{product.body}</Typography>
          <Typography variant="body2">{product.price} kr</Typography>
          <button onClick={() => addToCart(product)}>Lägg till i varukorg</button>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default ProductItemLarge;
