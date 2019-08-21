import './app.global.css';

import * as React from 'react';

import { configureStore, history } from './redux/configureStore';

import { ApolloProvider } from '@apollo/react-hooks'
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import client from './apollo/Client'
import { render } from 'react-dom';

const store = configureStore();

render(
  <ApolloProvider client={ client }>
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>
  </ApolloProvider>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <ApolloProvider>
        <AppContainer>
          <NextRoot store={store} history={history} />
        </AppContainer>
      </ApolloProvider>,
      document.getElementById('root')
    );
  });
}
