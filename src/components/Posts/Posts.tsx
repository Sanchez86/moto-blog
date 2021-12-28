import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollTop from 'components/ScrollTop';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Container } from '@mui/material';
import { loadPostsRequest } from 'store/actions/load-posts';
import { selectPosts, selectMarkup } from 'store/selectors';
import { IData } from 'interfaces';
import Post from '../Post';
import PostList from '../PostList';

const Posts: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsRequest());
  }, [dispatch]);

  const posts = useSelector(selectPosts);
  const markupType = useSelector(selectMarkup);

  return (
    <>
      <Typography textAlign="center" variant="h5" m={3}>Posts</Typography>
      <Container>
        <Grid container spacing={3} mt={0}>
          {markupType === 'list' ? posts.map((post: IData) => (<PostList key={post?.sys?.id} post={post} />)) : posts.map((post: IData) => (<Post key={post?.sys?.id} post={post} />))}
        </Grid>
      </Container>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Posts;
