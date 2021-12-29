import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './Header.scss';
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import markupPosts from 'store/actions/markup-posts';
import { useDispatch } from 'react-redux';

const Header: React.FC = () => {
  const [view, setView] = useState('module');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };

  const dispatch = useDispatch();

  const onList = () => {
    dispatch(markupPosts('list'));
  };

  const onModule = () => {
    dispatch(markupPosts('module'));
  };

  return (
    <div id="header-anchor">
      <AppBar>
        <Container>
          <Grid
            container
            direction="row"
            alignItems="center"
          >
            <Grid item>
              <Link to="/" className="link-home">
                <Toolbar>
                  <Typography>Home</Typography>
                </Toolbar>
              </Link>
            </Grid>
            <Grid item>

              <ToggleButtonGroup
                value={view}
                exclusive
                onChange={handleChange}
              >
                <ToggleButton
                  onClick={onModule}
                  value="module"
                  aria-label="module"
                  className="icon-block"
                >
                  <ViewModuleIcon />
                </ToggleButton>

                <ToggleButton
                  onClick={onList}
                  value="list"
                  aria-label="list"
                  className="icon-block"
                >
                  <ViewListIcon />
                </ToggleButton>

              </ToggleButtonGroup>

            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
