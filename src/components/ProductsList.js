import {products} from '../products';
import List from '@mui/material/List';
import ProductItem from "./ProductItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

const ProductsList = () => {
    console.log(products)
    return (
        <Container>
            <Grid container spacing={3}
                  justifyContent="center"
                  alignItems="center" >
                    {products.map(
                        pizza =>
                            <Grid item xs={'auto'}><ProductItem key={pizza.id} pizza={pizza}/></Grid>
                    )}

            </Grid>
        </Container>)
}
export default ProductsList