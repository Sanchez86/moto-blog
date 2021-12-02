import React from 'react';
import { Link } from 'react-router-dom';
import { IData } from 'interfaces';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import './Post.scss';

const Post: React.FC<{ post: IData }> = ({ post }) => {
  const arr = post?.fields?.content?.content[0]?.content.map((item: any) => item.value);

  return (
    <Grid className="post" item xs={6} md={4} lg={3}>
      <Card className="post__card" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Link to={`/post/${post?.sys?.id}`} className="post__label">
            <CardMedia
              component="img"
              height="140"
              image={post?.fields?.image?.fields?.file?.url}
              alt={post?.fields?.title}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="post__header">
              <Link to={`/post/${post?.sys?.id}`} className="post__label">{post?.fields?.title}</Link>
            </Typography>
            <Typography variant="body2" className="post__description">
              {arr}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>

  );
};

export default Post;
