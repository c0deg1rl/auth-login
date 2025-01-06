// src/theme.js
import { createTheme } from '@mui/material/styles';
import { grey, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
        main: grey[500],
        light: grey[300],
        dark: grey[400],
        darker: grey[800],
    },
    secondary: purple,
  },
});

export default theme;
