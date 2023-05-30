import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function PostComponent({ id, title, summary, content, imageurls }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate('/post/' + id);
  }
  return (
    <>
      {/*<!-- Post preview-->*/}
      <div class="post-preview">
        <a onClick={handleCardClick}>
          <h2 class="post-title">{title}</h2>
          <h3 class="post-subtitle">{summary}</h3>
        </a>
      </div>
      {/*Divider*/}
      <hr class="my-4" />
    </>
  );
}

export default PostComponent;