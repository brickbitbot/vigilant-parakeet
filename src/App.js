import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { routes } from './routes';

axios.defaults.baseURL = "https://swapi.dev/api/";

function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {
            routes.map((route, index) => {
              return(
                <Route
                  exact
                  key={index}
                  path={route.path}
                  component={route.component}
                />
              )
            })
          }
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
