import { saveTask } from '../Firebase/firestore.js';
import { currentUser } from '../Firebase/auth.js';
import { nav } from '../Components/nav.js';
import { onNavigate } from '../router.js';

export const createPost = () => {
  const div = document.createElement('div');
  const section = document.createElement('div');
  section.innerHTML = `
  <header class='header-home'>
    <nav id="nav">  
      <picture id="logo-home" class="logo-container">
        <img src="./images/iconosombra.png" alt="Sonder icon">
      </picture> 
    </nav>
      <h1>Share with us</h1>

  </header>

        <article id="create-box" class="create-box">
          <form id="create-form">
            
            <p class="p-create" >Add a description</p>
            <label for="description"></label>
            
            <input id="post-description" type="text" autocomplete="off" placeholder="Share your feelings" >

            <button id="btn-task-save" class="check">
            <img src="./images/check.png" alt="button check" class="check">
            </button>
        
    </form>
    </article>
    <div id="task-container"></div>
      `;

  const logoCreate = section.querySelector('#nav');
  logoCreate.appendChild(nav());
  logoCreate.addEventListener('click', () => {
    document.querySelector('.nav-container').classList.toggle('show');
  });

  const createForm = section.querySelector('#create-form');

  createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const myLike = [];
    const user = currentUser();
    const dt = new Date().toLocaleDateString();
    const postDescription = createForm['post-description'];
    saveTask(user.displayName, postDescription.value, dt, myLike);
    createForm.reset();
    onNavigate('/home');
  });

  div.append(section);

  return div;
};
