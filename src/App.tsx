import React from 'react';
import { Provider } from "react-redux";
import store from "./redux-sagas/store";
import MainNavigator from './screns/MainNavigator';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

export default App;
