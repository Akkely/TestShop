import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import CartView from "./views/CartView"; // Antag att denna komponent är skapad enligt tidigare instruktioner
import { CartProvider } from './common/CartContext';

function App() {
	const [cartItems, setCartItems] = useState([]);

	return (
		<>
			<CartProvider>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							<Link to='/'>WebbShop</Link>
						</Typography>
						<Button color='inherit'>
							<Link to='/products/new'>Skapa ny produkt</Link>
						</Button>
					
						<Button color='inherit'>
							<Link to='/cart'>Visa Varukorg</Link>
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<CartView />
			<Outlet context={{ cartItems, setCartItems }} />
      </CartProvider>
		</>
	);
}

export default App;
