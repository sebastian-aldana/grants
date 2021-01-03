/* eslint-disable no-bitwise */
import { createMuiTheme } from '@material-ui/core/styles';
import palette from './global-styles/palette';
import reactGridLayout from './global-styles/react-grid-layout';
import scrollbar from './global-styles/scrollbar';

const theme = createMuiTheme({
  palette,
  scrollbar,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        ...reactGridLayout,
      },
    },
  },
});

export default theme;
