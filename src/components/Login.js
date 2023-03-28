import { onNavigate } from '../main.js';

export const Login = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  button.textContent = 'Enter';
  buttonBack.textContent = 'Regresa';
  title.textContent = 'Inicia Sesión';

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  button.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputEmail, inputPass, button, buttonBack);
  return div; // Investigar el uso de nodos
};
