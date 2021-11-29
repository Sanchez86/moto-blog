import React from 'react';
import { Link } from 'react-router-dom';
import { IData, IState } from 'interfaces';
import {
  Container,
  Grid,
  Typography,
} from '@mui/material';
import './PostList.scss';

const PostList = ({ post }: { post: IData }) => {
  const arr = post?.fields?.content?.content[0]?.content.map((item: any) => item.value);

  return (
    <>
      <Grid item className="post-list">
        <Grid container spacing={0} className="post-list__card">
          <Grid item xs={12} md={6} className="post-list__item__left">
            <Link to={`/post/${post?.sys?.id}`} className="post-list__link">
              <img
                className="post-list__img"
                src={post?.fields?.image?.fields?.file?.url}
                alt={post?.fields?.title}
              />
            </Link>
          </Grid>
          <Grid item xs={12} md={6} className="post-list__item__right">
            <Typography gutterBottom variant="h5" component="div" className="post-list__header">
              <Link to={`/post/${post?.sys?.id}`} className="post-list__label">{post?.fields?.title}</Link>
            </Typography>
            <Typography variant="body2" className="post-list__description">
              {arr}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PostList;
