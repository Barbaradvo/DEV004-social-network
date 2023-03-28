import { onNavigate } from '../main.js';

export const Welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'Inicia Sesión';
  buttonRegister.textContent = 'Registrate';
  title.textContent = 'Somos la mejor red Social del mundo';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
  div.append(title, buttonLogin, buttonRegister);

  return div; // Investigar el uso de nodos
};
