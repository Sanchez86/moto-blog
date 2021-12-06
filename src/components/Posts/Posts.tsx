import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostsRequest } from 'store/actions/load-posts';
import { IData } from 'interfaces';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import { Container } from '@mui/material';
import { selectPosts, selectMarkup } from 'store/selectors';
import Post from '../Post';
import PostList from '../PostList';
import Header from '../Header';

interface Props {
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#header-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

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
      <ScrollTop {...Header}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Posts;
