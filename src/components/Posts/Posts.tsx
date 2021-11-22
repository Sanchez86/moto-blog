import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostsRequest } from 'store/actions/load-posts';
import { IState, IData } from 'interfaces';
import Post from '../Post';

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsRequest());
  }, [dispatch]);

  const posts:IData[] = useSelector((state:IState) => state.data);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post: IData) => (<Post key={post.sys.id} post={post} />))}
    </div>
  );
};

export default Posts;
