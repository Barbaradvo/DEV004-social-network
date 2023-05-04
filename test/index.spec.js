/**
 * @jest-environment jsdom
 */

import { FirebaseError } from '@firebase/util';
import { addUser } from '../src/Firebase/auth';
import * as barril from '../src/Mocks/barril';
import App from './app';
import firebase from 'firebase/app';


// PRUEBA DE OH CON DAVID
/** describe('pruebas de login', () => {
  it('prueba de ejemplo', () => {
    document.body.append(document.createElement('div'));
    console.log(document.body.innerHTML);
    expect(true).toBe(true);
  });
});
*/
// TEST DE SERGIO
/** describe('Pruebas de login', () => {
  beforeEach(() => {
    authentication.signInWithGoogle = jest.fn();
    authentication.signInWithPassword = jest.fn();
    router.navigateTo = jest.fn(() => console.log('mock de navigateTo usado'));
  });

  it('Autenticación con correo electrónico y contraseña correcta, debería redireccionar a /home', () => {
    // preparamos el mock
    authentication.signInWithPassword.mockResolvedValueOnce({ user: { email: 'ssinuco@gmail.com' } });

    // llamamos a la funcion que vamos a testear
    const loginDiv = Login();
    loginDiv.querySelector('#username').value = 'ssinuco@gmail.com';
    loginDiv.querySelector('#password').value = '123456';
    // simulamos el evento submit del formulario
    loginDiv.querySelector('#loginForm').dispatchEvent(new Event('submit'));
    // confirmar que se llamo a la funcion
    return Promise.resolve().then(() => expect(router.navigateTo).toHaveBeenCalledWith('/home'));
  });

  it('Autenticación con correo electrónico y contraseña incorrecta, NO debería redireccionar a /home', () => {
    // preparamos el mock
    authentication.signInWithPassword.mockRejectedValueOnce(new Error('Error'));

    // llamamos a la funcion que vamos a testear
    const loginDiv = Login();
    loginDiv.querySelector('#username').value = 'ssinuco@gmail.com';
    loginDiv.querySelector('#password').value = '123456';
    // simulamos el evento submit del formulario
    loginDiv.querySelector('#loginForm').dispatchEvent(new Event('submit'));
    // confirmar que no se llamo a la funcion
    return Promise.resolve().then(() => expect(router.navigateTo).not.toHaveBeenCalled());
  });
});
*/

// AYUDA ALEXA USANDO METODO DE BARRIL  // TIRO ERROR ENTONCES TRATE DE CAMBIAR METODO TO BE A TO THROW
/**jest.mock('../src/Mocks/barril.js'), () => ({
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve('usuario registrado')),
});

test('este es una prueba de auth no funciona', async () => {
  await expect(addUser('testmaster@gmail.com', 'papaspokemon21')).resolves.toThrow();

  // await expect(addUser('testmaster@gmail.com', 'papaspokemon21')).toThrow(Error);

  // .rejects.toBe('["FirebaseError: Firebase: Error (auth/email-already-in-use)."]');
});
*/

const userCredentialMock = {
  user: {
    sendEmailVerification: jest.fn(),
  },
};

jest.mock('firebase/app', () => {
  return {
    auth: jest.fn().mockReturnThis(),
    createUserWithEmailAndPassword: jest.fn(() => userCredentialMock),
  };
});

describe('61391590', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    const email = 'example@gmail.com';
    const password = '123';
    const actual = await App.signup(email, password);
    expect(actual).toEqual('Check your email for verification mail before logging in');
    expect(firebase.auth().createUserWithEmailAndPassword).toBeCalledWith(email, password);
    expect(userCredentialMock.user?.sendEmailVerification).toBeCalled();
  });
});