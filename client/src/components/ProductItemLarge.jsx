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


function ProductItemLarge({ product }) {
  console.log(product);
  const averageRating = product ? calculateAverageRating(product.reviews) : 0;
  
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
        </CardContent>
      </Card>
    </Paper>
  );
}

export default ProductItemLarge;
