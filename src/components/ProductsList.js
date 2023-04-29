import {products} from '../products';
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
                            <Grid key={pizza.id} item xs={'auto'}><ProductItem pizza={pizza}/></Grid>
                    )}

            </Grid>
        </Container>)
}
export default ProductsList