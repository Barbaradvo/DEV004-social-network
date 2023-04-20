import { login } from '../Firebase/auth.js';
import { showMessage } from '../Components/ShowMessage.js';
import { onNavigate } from '../router.js';

export const Login = () => {
  /* UN CONTENEDOR Q CONTENGA A LOS BOTONES */
  const div = document.createElement('div');
  const title = document.createElement('h2');
  /* crear botones createElement */
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const buttonProfile = document.createElement('button');
  const section = document.createElement('div');
  section.innerHTML = `
    <div class="wrapper">
      <div class="img-container">
        <img src="./images/iconosombra.png" alt="">
      </div>
      <h1>Log In</h1>
      <p class="text" >Hello Wisper, so glad to see you!</p>
      
      <form id="login-form" class="login-form">
        <label for="email"></label>
        <input type="email" id="login-email" class="" placeholder="Email" required>
        <input type="password" id="login-password"  class="" placeholder="Password" required>
        <p class="recover"> <a href="" >Forgot password?</a></p> 
        <button type="submit" id="log" class="submit">Log in</button>
      </form> 
       
          Dont have an account yet? <a class="link" href="/signup">Sign Up</a>
        </p> 
   </div>
  `;

  /* FIREBASE FORM */
  const loginForm = section.querySelector('#login-form');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    // eslint-disable-next-line no-console
    console.log(email, password);

    try {
      await login(email, password)
      onNavigate('/home');

      showMessage(`Welcome ${login.user.email}`, 'success');
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        showMessage('Wrong password', 'error'); 
      } else if (error.code === 'auth/user-not-found') {
        showMessage('User not found', 'error');
      } else if (error.code) {
        showMessage(error.message, 'error');
      }
    }
  });

  /* AGREGAR TEXTO A LOS BOTONES textContent */
  button.textContent = 'Entrar';
  buttonBack.textContent = 'Regresa';
  buttonProfile.textContent = 'Profile';
  title.textContent = 'Inicia secion LOGIN';

  button.addEventListener('click', () => {
    onNavigate('/home');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });
  buttonProfile.addEventListener('click', () => {
    onNavigate('/profile');
  });

  /* INSERTA append */
  div.append(title, buttonProfile, button, buttonBack, section);

  return div;
};
