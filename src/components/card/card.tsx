import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

interface MediaCardProps {
    photo: string;
    title: string;
    description: string;
    price: string;
    website: 'Mercado Livre' | 'Buscape';
    category: 'tv' | 'mobile' | 'refrigerator';
}

export default function MediaCard(props: MediaCardProps) {
  return (
    <Card sx={{ width: 345, padding: 10 }}>
      <CardMedia
        component="img"
        // sx={{ height: 250 }}
        image={props.photo}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {props.website[0] === 'Mercado Livre' ? `R$ ${props.price}` : props.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-around'}}>
        <Typography variant="body2" >{props.website}</Typography>
        <Typography variant="body2" >{props.category}</Typography>
      </CardActions>
    </Card>
  );
}