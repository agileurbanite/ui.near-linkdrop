import { StrictMode } from 'react';
import { render } from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { MuiThemeProvider } from '@material-ui/core';
import { createBrowserHistory } from 'history';
import { Initializer } from './ui/providers/Initializer/Initializer';
import { Router } from './ui/providers/Router';
import { App } from './ui/components/App';
import { store } from './store/store';
import { ViewportProvider } from './ui/providers/Viewport';
import { theme } from './ui/config/theme';

const history = createBrowserHistory();

render(
  <StrictMode>
    <StoreProvider store={store}>
      <MuiThemeProvider theme={theme}>
        <Initializer history={history} store={store}>
          <Router>
            <ViewportProvider>
              <App />
            </ViewportProvider>
          </Router>
        </Initializer>
      </MuiThemeProvider>
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root'),
);
