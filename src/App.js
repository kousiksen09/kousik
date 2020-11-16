import React from 'react';
import Loadable from 'react-loadable';
import { withStyles } from '@material-ui/core/styles';
import theme from './utils/theme';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import LazyLoader from './common/loader';

const styles = () => ({
  root: {
    padding: '5%',
  },
});

function App() {
  const loader = () => (
    <div stlye={{ height: '100%' }}>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </div>
    </div>
  );
  const AsyncProfile = Loadable({
    loader: () => import('./views/Kousik'),
    loading: LazyLoader,
  });
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <AsyncProfile />
      </Provider>
    </MuiThemeProvider>
  );
}

export default withStyles(styles, { withTheme: true })(App);
