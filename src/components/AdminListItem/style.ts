import { makeStyles } from '@mui/styles';

interface ITheme {
  palette: {
    primary: { main: string },
    secondary: { main: string },
  };
}

const useStyles = makeStyles((theme: ITheme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  item: {
    padding: '5px 15px',
    transition: '.2s',
    '&:nth-child(odd)': {
      backgroundColor: '#f7f7f7',
    },
    '&:hover': {
      backgroundImage: 'linear-gradient(90deg, rgb(1, 36, 0) 0%, rgb(82, 240, 76) 0%, rgb(18, 9, 121) 0%, rgb(184, 10, 177) 100%, rgb(241, 255, 0) 100%)',
    },
    '&:hover a': {
      color: theme.palette.secondary.main,
    },
    '&:hover svg': {
      color: theme.palette.secondary.main,
    },
  },
}
));

export default useStyles;
