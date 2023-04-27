import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductItem({pizza}) {
    const {id, title, description, price, image} = pizza;
    return (
        <Card sx={{ maxWidth: 345, borderRadius: 6 }}>
            <CardMedia
                component="img"
                alt="pizza photo"
                height={'auto'}
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" height='20px'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" style={{fontSize:"20px", fontStyle:"bold", lineHeight:"1.0"}}>+</Button>
                <Button size="large" size="large" style={{fontSize:"20px", fontStyle:"bold", lineHeight:"1.0"}}>-</Button>
            </CardActions>
        </Card>
    );
}