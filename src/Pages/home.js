import {
  collection, doc, onSnapshot, query,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/auth.js';
import {
  deleteTask, updateTask, getTask, db,
} from '../Firebase/firestore.js';
import { onNavigate } from '../router.js';
import { setupPosts } from '../Components/postCard.js';
import { nav } from '../Components/nav.js';
import wispIcon from '../Images/iconosombra.png';

// import { auth, db } from '../firebase/config.js';

export const home = () => {
  /* UN CONTENEDOR Q CONTENGA A LOS BOTONES */
  const div = document.createElement('div');
  const section = document.createElement('div');
  section.innerHTML = `
  <header class='header-home'>
    <nav id="nav">  
      <picture id="logo-home" class="logo-container">
        <img src=${wispIcon} alt="Wisp icon">
      </picture> 
      
    </nav>
    <h2> We can Hear you</h2>
          <button id='createPost' class="create-home">
          Post</button>    
                        
  </header>
  <aside class='aside'>
      <article class="posts"></article>
    </aside>
    `;

  const logoHome = section.querySelector('#nav');
  logoHome.addEventListener('click', () => {
    document.querySelector('.nav-container').classList.toggle('show');
  });

  /// Editar
  function EditPosts(postsContainer, dataPost) {
    const Repost = [];
    dataPost.forEach((post) => { Repost.push({ id: post.id, ...post.data() }); });
    console.log(Repost);
    const btnEdit = postsContainer.querySelectorAll('.btn-edit');
    btnEdit.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        console.log('este es dataset', dataset.id);
        const encontrarDescription = Repost.find((post) => post.id === dataset.id);
        console.log(encontrarDescription);
        // crear un elemento input
        const input = document.createElement('input');
        input.classList.add('edit-input');
        input.value = encontrarDescription.description;
        // set initial value to the current description
        input.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
          // update the post description when the user presses enter
            updateTask(dataset.id, { description: event.target.value });
            input.remove();
            // remove the input element
          }
        });

        // append the input element to the DOM
        btn.parentElement.appendChild(input);
      });
    });
  }
  /// ELIMINAR
  function EliminarPosts(postsContainer) {
    const btnDelete = postsContainer.querySelectorAll('.btn-delete');

    btnDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deleteTask(dataset.id);
      });
    });
  }

  /// MOSTRAR
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const myQuery = query(collection(db, 'post'));
      onSnapshot(myQuery, (data) => {
        data.forEach((d) => d.data());
        console.log('revisando data', data);
        const htmlPosts = setupPosts(data, user);
        const postsContainer = section.querySelector('.posts'); // se repite
        postsContainer.innerHTML = htmlPosts;
        EliminarPosts(postsContainer);
        EditPosts(postsContainer, data);
      });
    } else {
      console.log('USUER : ', user);
    }

    /// like

    // const likeIcon = postsContainer.querySelector('#like');
    /**  likeIcon.addEventListener('click', () => {
      console.log('contando');
      likeIcon.classList.toggle('red');
      const querySnapshot = getDocs(collection(db, 'post'));
      let likeCounter = querySnapshot.docs.data().likes;
      if (likeIcon.classList.contains('red')) {
        console.log(likeCounter += 1);
      } else {
        console.log(likeCounter -= 1);
      }
    });
    */
  });

  const createPost = section.querySelector('#createPost');
  createPost.addEventListener('click', async () => {
    onNavigate('/createpost');
  });

  /* INSERTA append */
  div.append(section);

  return div;
};
