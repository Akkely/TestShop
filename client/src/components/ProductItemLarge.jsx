import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Paper,
	Typography,
	Rating,
} from "@mui/material";
import Cart from "./Cart";
/* import UserItemSmall from './UserItemSmall'; */
import { toDateTimeString } from "../common/formatHelpers";
import placeholderImage from "../assets/placeholder.png";
import { calculateAverageRating } from "../common/helpers";
import React, { useState } from "react";
import { useCart } from "../common/CartContext";

function ProductItemLarge({ product }) {
	console.log(product);
	console.log(useCart);

	const { addToCart } = useCart();
	const [showNotification, setShowNotification] = useState(false);
	const addToCartHandeler = (product) => {
    addToCart(product);
		// Add product to cart
		setShowNotification(true);

		// Simulate a delay for the notification (optional)
		setTimeout(() => {
			setShowNotification(false);
		}, 2000);
	};

	const averageRating = product ? calculateAverageRating(product.reviews) : 0;

	return (
		<Paper sx={{ my: 4, p: 4, borderRadius: 2 }} elevation={3}>
			<Box>
				<Typography variant='h2'>{product.title}</Typography>
				<Typography>
					Produkten publicerades: {toDateTimeString(product.createdAt)}
				</Typography>
				<Rating name='read-only' value={averageRating} readOnly />
			</Box>
			<Card elevation={0}>
				<CardMedia
					component='img'
					image={product.imageUrl || placeholderImage}
				/>

				<CardContent>
					{product.carts &&
						product.carts.map((cart) => (
							<Cart key={`cart_${cart}`} text={cart} />
						))}

					<Typography variant='body1'>{product.body}</Typography>
					<Typography variant='body2'>{product.price} kr</Typography>

					{showNotification && (
						<p>{product.title} har lagts till i varukorgen!</p>
					)}
					<button onClick={() => addToCartHandeler(product)}>
						Lägg till i varukorg
					</button>
				</CardContent>
			</Card>
		</Paper>
	);
}

export default ProductItemLarge;
