import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from "react-redux";
import {addPizzaQuantity, removePizzaQuantity} from "../store/cartSlice";
import {getCart} from "../store/selectors";

export default function ProductItem({pizza}) {
    const {id, title, description, price, image} = pizza;
    const dispatch = useDispatch();
    const cart = useSelector(getCart);
    const [cartPizza] = cart.filter(pizza => pizza.id === id);
    const quantity = cartPizza?.quantity ?? 0
    return (
        <Card sx={{maxWidth: 360, borderRadius: 6}}>
            <CardMedia
                component="img"
                alt="pizza photo"
                height='400px'
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" height='40px'>
                    {description}
                </Typography>
                <Typography>
                    Price {price} ₴
                </Typography>
            </CardContent>
            <CardActions>
                {quantity === 0 ? <Button onClick={() => dispatch(addPizzaQuantity({
                    id,
                    quantity: quantity + 1
                }))}>Add to cart</Button> : null}
                {quantity > 0 ? <Button size="large" style={{fontSize: "20px", fontStyle: "bold", lineHeight: "1.0"}}
                                        onClick={() => dispatch(addPizzaQuantity({
                                            id,
                                            quantity: quantity + 1
                                        }))}>+</Button> : null}
                {quantity > 0 ? <Button size="large" style={{fontSize: "20px", fontStyle: "bold", lineHeight: "1.0"}}
                                        onClick={() => dispatch(removePizzaQuantity({
                                            id,
                                            quantity: quantity - 1
                                        }))}>-</Button> : null}
                {quantity > 0 ? <Typography>{quantity}</Typography> : null}
            </CardActions>
        </Card>
    );
}