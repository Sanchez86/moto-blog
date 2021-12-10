import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHeader.scss';
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';

const AdminHeader: React.FC = () => (
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
                <Typography>Admin</Typography>
              </Toolbar>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  </div>
);

export default AdminHeader;
