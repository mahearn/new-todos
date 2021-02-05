import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalState from './store/globalState';
import Context from './store/context';

const Index = () => {
  const store = GlobalState();
  return (
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
  )
}

ReactDOM.render(<Index />,
  document.getElementById('root')
);

