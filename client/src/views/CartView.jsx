import React from "react";
import { useCart } from "../common/CartContext";
import {
	Alert,
	Box,
	Button,
	Container,
	List,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	Avatar,
	TableRow,
	Typography,
	ListItem,
	ListItemText,
} from "@mui/material";

function CartView() {
	const { cartItems } = useCart();
	const totalCost = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<Box>
			<Typography variant='h2'>Varukorg</Typography>

			{cartItems.length === 0 ? (
				<Typography variant='p'>Din varukorg är tom.</Typography>
			) : (
				<>
					<TableContainer>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Bild</TableCell>
									<TableCell>Produktnamn</TableCell>
									<TableCell>Antal</TableCell>
									<TableCell>Pris</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{cartItems.map((item) => (
									<TableRow key={item.id}>
										<TableCell>
											<Avatar
												sx={{ width: 60, height: 60 }}
												variant='square'
												alt={item.title}
												src={item.imageUrl}
											/>
										</TableCell>
										<TableCell>{item.title}</TableCell>
										<TableCell>{item.quantity}</TableCell>
										<TableCell>{item.price} kr</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
					<br />
					<strong>Totalt: {totalCost} kr</strong>
				</>
			)}
		</Box>
	);
}

export default CartView;

/*
 */
