import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function PostComponent({id,title,summary,content,imageurls}) {
  const navigate = useNavigate();
  const handleCardClick = () =>{
    navigate('/post/' + id);
  }
  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleCardClick}>
          <CardMedia
            component="img"
            height="140"
            image="https://mdbootstrap.com/img/new/slides/041.webp"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {summary}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}

export default PostComponent;