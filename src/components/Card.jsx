import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img from "../images/CardImage.jpeg";
export default function CardItem() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <p className="text-lg font-semibold">AI Charater Demo Storyboard</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <p className="text-xs font-semibold ml-2 text-gray-400">
          Updated 19 Mar 24
        </p>
      </CardActions>
    </Card>
  );
}
