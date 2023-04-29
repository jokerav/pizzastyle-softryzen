import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import {useNavigate} from "react-router-dom";
import Badge from '@mui/material/Badge';
import {useSelector} from "react-redux";
import {getCart} from "../store/selectors";
import {useEffect, useState} from "react";

function ResponsiveAppBar() {
    const navigate = useNavigate();

    const handleCloseNavMenu = (e) => {
        if (e.target.innerText === 'PIZZA') {
            navigate('/pizza')
        }
        if (e.target.innerText === 'CART') {
            navigate('/cart')
        }
    };
    let cart = useSelector(getCart)
    console.log(cart)
    let [visibleQuantityPizza, setVisibleQuantityPizza] = useState(cart.length);
    useEffect(()=>{
        setVisibleQuantityPizza((cart.length))
    },[cart])
    return (

        <AppBar position="static" style={{marginBottom: "20px"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LocalPizzaIcon style={{height: "50px", marginRight: "25px"}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        PizzaStyle
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {/*{pages.map((page) => (*/}
                        <Button
                            onClick={e => handleCloseNavMenu(e)}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Pizza
                        </Button>
                            <Button
                                onClick={e => handleCloseNavMenu(e)}
                                sx={{my: 2, color: 'white', display: 'block'}}>
                                cart

                            </Button>
                        <Badge badgeContent={visibleQuantityPizza} color='secondary' sx={{marginLeft: 0, marginTop : 3} }/>

                        {/*))}*/}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;