import React from 'react';
import { Link } from 'react-router-dom';
import { IData } from 'interfaces';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import useStyles from './style';

const AdminListItem: React.FC<{ post: IData }> = ({ post }) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        wrap="nowrap"
        className={classes.item}
      >
        <Grid item>
          <Link
            to={`/post/${post?.sys?.id}`}
            target="blank"
            className={classes.link}
          >
            {post?.fields?.title}
          </Link>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminListItem;
