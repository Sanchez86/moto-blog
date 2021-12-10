import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import './Alert.scss';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const AlertDialog: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setOpen(false);
  };

  return (
    <div>
      <Fab
        className="modal-btn"
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog
        className="modal-window"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={handleSubmit} className="testt">
          <Typography variant="h4">Create new post</Typography>
          <Box m={3}>
            <TextField
              id="post-title"
              name="post-title"
              label="Title your post"
              variant="outlined"
              required
              autoFocus
              fullWidth
            />
          </Box>
          <Box m={3}>
            <TextField
              id="post-content"
              name="post-content"
              label="Your post content"
              multiline
              maxRows={4}
              required
              fullWidth
            />
          </Box>
          <Box m={3}>
            <DialogActions>
              <Button type="reset">Reset</Button>
              <Button type="submit">Create</Button>
            </DialogActions>
          </Box>
        </form>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
