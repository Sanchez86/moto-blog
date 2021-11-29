import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IData, IState } from 'interfaces';
import { Container } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './SinglePost.scss';

const SinglePost = ({ match: { params: { postId } } }: any) => {
  const item:IData = useSelector((state:IState) => (
    state.data.find((elem) => elem.sys.id === postId)
  ));

  const arr = item?.fields?.content?.content[0]?.content.map((elem: any) => elem.value);

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
        <p>{arr}</p>
      </div>
    </Container>
  );
};

export default SinglePost;
