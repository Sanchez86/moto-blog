import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IData } from 'interfaces';
import { Container } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { selectSinglePost } from 'store/selectors';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './SinglePost.scss';

const SinglePost = ({ match: { params: { postId } } }: any) => {
  const item:IData = useSelector(selectSinglePost(postId));

  return (
    <Container>
      <div className="single-post">
        <h1>
          <Link to="/"><ArrowBackIosIcon fontSize="large" /></Link>
          {item.fields.title}
        </h1>
        <div>

          <img
            className="single-post__img"
            src={item?.fields?.image?.fields?.file?.url}
            alt={item?.fields?.title}
          />
        </div>
        {documentToReactComponents(item?.fields?.content)}
      </div>
    </Container>
  );
};

export default SinglePost;
