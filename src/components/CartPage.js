import {useSelector} from "react-redux";
import {getCart} from "../store/selectors";
import {Container, Link, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const CartPage = () => {
const cart = useSelector(getCart);
const navigate = useNavigate()
console.log(cart)
    return (
        <Container>
            {cart.length === 0 ? <Typography>Please, choose pizza <Link sx={{cursor:"pointer"}} underline="hover" onClick={()=>navigate('/pizza')}>here</Link></Typography>:null}
        </Container>
    )
}
export default CartPage