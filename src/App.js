import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from './utils/theme';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Kousik from './views/Kousik';

const styles = () => ({
  root: {
    padding: '5%',
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Kousik />
      </Provider>
    </MuiThemeProvider>
  );
}

export default withStyles(styles, { withTheme: true })(App);
