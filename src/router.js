import { welcome } from './Pages/welcome';
import { Login } from './Pages/login';
import { signUp } from './Pages/signup';
import { home } from './Pages/home';
import { profile } from './Pages/profile';
import { createPost } from './Pages/createpost';

const root = document.getElementById('root');

const routes = {
  '/': welcome,
  '/login': Login,
  '/signup': signUp,
  '/home': home,
  '/profile': profile,
  '/createpost': createPost,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.append(component());
