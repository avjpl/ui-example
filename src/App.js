import '@babel/polyfill';
import React, { Fragment } from 'react';


import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { routes } from './routes/syncRoutes';

import styles from './App.css';

const httpLink = createHttpLink({ uri: "http://snowtooth.moonhighway.com" });
const authLink = setContext((_, { headers }) => {
  console.log({ headers });

  return {
    headers: {
      // 'x-api-key': 'some-key'
    }
  };
});

const client = new ApolloClient({
  link:  authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <nav>
          <ul>
            <li>
              <a target="_blank" href='https://reactjs.org/docs/getting-started.html'>React docs</a>
            </li>
            <li>
              <Link to='/ui'>Ui Elements</Link>
            </li>
          </ul>
        </nav>

        <main>
          {renderRoutes(routes)}
        </main>
      </Fragment>
    </Router>

  </ApolloProvider>
);

export default App;
