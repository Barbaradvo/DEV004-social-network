// import { getDatabase, set, ref } from 'firebase/database';
import { onNavigate } from '../router.js';
import { addUser } from '../Firebase/auth.js';
import { showMessage } from '../Components/ShowMessage.js';
import wispIcon from '../Images/iconosombra.png';

export const signUp = () => {
  /* UN CONTENEDOR Q CONTENGA A LOS BOTONES */
  const div = document.createElement('div');
  const title = document.createElement('h2');
  /* crear botones createElement */
  const buttonBack = document.createElement('button');
  const section = document.createElement('div');
  section.innerHTML = `
    <div class="wrapper">
      <div class="img-container">
        <img src=${wispIcon} alt="">
      </div>
      <h1>Sign Up</h1>
      <p class="text-sign">Someone out there is willing to hear you!</p>
      <form id="signup-form" >
        <input id="singup-name" type="text" class="" placeholder="Name">
        <input id="singup-lastname" type="text" class="" placeholder="Last Name">
        <input id="singup-email" type="email" class="" placeholder="Email">
        <input id="singup-password" type="password" class="" placeholder="Password">
        <input type="password" class="" placeholder="Confirm Password">
      <button type="submit" class="submit">Sign Up</button>
      </form>  
  
          Already have an account yet? <a class="link" href="/login">Log in</a>
        </p> 
    </div>
    `;
  /* FIREBASE FORM */
  const signupForm = section.querySelector('#signup-form');
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = signupForm['singup-name'].value;
    const lastname = signupForm['singup-lastname'].value;
    const email = signupForm['singup-email'].value;
    const password = signupForm['singup-password'].value;
    // eslint-disable-next-line no-console
    console.log(username, lastname, email, password);

    try {
      addUser(email, password);
      onNavigate('/profile');
      showMessage(`Welcome ${addUser.user.email}`, 'success');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        showMessage('Email already in use', 'error'); // despues de la coma viene el tipo (estilo que le cambia el color al msg)
      } else if (error.code === 'auth/invalid-email') {
        showMessage('Invalid email', 'error');
      } else if (error.code === 'auth/weak-password') {
        showMessage('Weak password', 'error');
      } else if (error.code) {
        showMessage(error.message, 'error');
      }
    }
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  /* INSERTA append */
  div.append(title, buttonBack, section);

  return div;
};
// inputEmail, inputPass, button,
