import React from 'react';
import { useSelector } from 'react-redux';
import { IData, IState } from 'interfaces';
import { selectSinglePost } from 'store/selectors';

const SinglePost: React.FC = ({ match: { params: { postId } } }: any) => {
  const item:IData = useSelector(selectSinglePost(postId));

  const arr = item?.fields?.content?.content[0]?.content.map((elem: any) => elem.value);

  return (
    <div className="single-post">
      <h1>{item.fields.title}</h1>
      <div>

        <img
          className="single-post__img"
          src={item?.fields?.image?.fields?.file?.url}
          alt={item?.fields?.title}
        />
      </div>
      <p>{arr}</p>
    </div>
  );
};

export default SinglePost;
