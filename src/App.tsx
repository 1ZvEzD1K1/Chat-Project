import React from 'react';
import { Provider } from "react-redux";
import store from "./redux-sagas/store";
import MainNavigator from './screns/MainNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

export default App;
