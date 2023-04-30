import {useDispatch, useSelector} from "react-redux";
import {getCart} from "../store/selectors";
import {Container, Link, Grid, Typography, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {products} from "../products";
import ProductItem from "./ProductItem";
import {makeOrder} from '../store/cartSlice'

const CartPage = () => {
    const cart = useSelector(getCart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let cartList = [];
    const chekсPizzaInCart = id => {
        const pizza = cart.filter(pizza => pizza.id === id)
        return pizza.length > 0
    }

    const getPizzaQuantity = id => {
        const [pizza] = cart.filter(pizza => pizza.id === id);
        return pizza.quantity
    }

    cartList = products.filter(pizza => chekсPizzaInCart(pizza.id))

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartList.forEach(({id, price}) => {
            totalPrice += price * getPizzaQuantity(id)
        })
        return totalPrice
    }
    return (
        <Container>
            {cart.length === 0 ? <Typography>Please, choose pizza <Link sx={{cursor: "pointer"}} underline="hover"
                                                                        onClick={() => navigate('/pizza')}>here</Link></Typography> : null}
            {cart.length > 0 ?
                <>
                    <Grid container spacing={3} sx={{marginBottom: "80px"}}
                          justifyContent="center"
                          alignItems="center">
                        {cartList.map((pizza) => <Grid item key={pizza.id}>
                                <ProductItem pizza={pizza}/>
                            </Grid>
                        )}
                    </Grid>
                    <Typography paragraph variant='h4'> Total: {calculateTotalPrice()} UAH</Typography>
                    <Button onClick={()=>dispatch(makeOrder())}>Make an order</Button>
                </>
                : null}


        </Container>
    )
}
export default CartPage