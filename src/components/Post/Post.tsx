import React from 'react';
import { Link } from 'react-router-dom';
import { IData } from 'interfaces';
import './Post.scss';

const Post = ({ post }: { post: IData }) => {
  const arr = post?.fields?.content?.content[0]?.content.map((item: any) => item.value);
  return (
    <div className="post">
      <div>
        <Link to={`/post/${post?.sys?.id}`} className="todo-list__label">{post?.fields?.title}</Link>
      </div>
      <div>
        <img
          className="post__img"
          src={post?.fields?.image?.fields?.file?.url}
          alt={post?.fields?.title}
        />
      </div>
      <section>
        {arr}
      </section>
    </div>
  );
};

export default Post;
