import {useSelector} from "react-redux";
import {getCart} from "../store/selectors";
import {Container, Link, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {products} from "../products";
import ProductItem from "./ProductItem";

const CartPage = () => {
    const cart = useSelector(getCart);
    const navigate = useNavigate();
    let cartList = [];
    const chekсPizzaInCart = id => {
        const pizza = cart.filter(pizza => pizza.id === id)
        return pizza.length > 0
    }
    const getPizzaQuantity = id => {
        const [pizza] = cart.filter(pizza=>pizza.id === id);
        return pizza.quantity
    }

    cartList = products.filter(pizza => chekсPizzaInCart(pizza.id))
    const calculateTotalPrice =()=>{
        let totalPrice = 0;
        cartList.forEach(pizza=>{
            totalPrice += pizza.price * getPizzaQuantity(pizza.id)
        })
        return totalPrice

    }

    return (
        <Container>
            {cart.length === 0 ? <Typography>Please, choose pizza <Link sx={{cursor: "pointer"}} underline="hover"
                                                                        onClick={() => navigate('/pizza')}>here</Link></Typography> : null}
            {cart.length > 0 ?
                <>
                <Grid container spacing={3}
                      justifyContent="center"
                      alignItems="center">
                    {cartList.map((pizza) => <Grid item key={pizza.id}>
                            <ProductItem pizza={pizza}/>
                        </Grid>
                    )}
                </Grid>
                <Typography>{calculateTotalPrice()}</Typography>
                </>
                : null}


        </Container>
    )
}
export default CartPage