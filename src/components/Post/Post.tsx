import React from 'react';
import { IData } from 'interfaces';
import './Post.scss';

const Post = ({ post }: { post: IData }) => {
  const arr = post?.fields?.content?.content[0]?.content.map((item: any) => item.value);
  console.log('post', post);
  console.log('arr', arr);
  return (
    <div className="post">
      <p>{post?.fields?.title}</p>
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
