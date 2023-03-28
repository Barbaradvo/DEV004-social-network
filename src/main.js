import './app/firebase.js';
import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register';

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/login': Login,
  '/register': Register,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    // window history guarda toda la historia de browser
    {},
    pathname,
    window.location.orgin + pathname,
  );

  root.removeChild(root.firstChild);

  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
root.appendChild(component());
