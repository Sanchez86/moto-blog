import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import { loadPostsRequest } from 'store/actions/load-posts';
import { selectPosts } from 'store/selectors';
import AdminListItem from 'components/AdminListItem';
import { IData } from 'interfaces/index';
import AlertDialog from '../../components/Alert';

const AdminPanel: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsRequest());
  }, [dispatch]);

  const posts = useSelector(selectPosts);

  return (
    <Container>
      <AlertDialog />
      <Typography variant="h4" my={3}>All posts</Typography>
      {posts.map((post: IData) => (<AdminListItem key={post?.sys?.id} post={post} />))}
    </Container>
  );
};

export default AdminPanel;
