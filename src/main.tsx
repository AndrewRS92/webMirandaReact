import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './features/store';
import { UserProvider } from './components/context/UserContext';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
