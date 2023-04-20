import { collection, onSnapshot, query } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/auth.js';
import { deleteTask, updateTask, db } from '../Firebase/firestore.js';
import { onNavigate } from '../router.js';
import { setupPosts } from '../Components/postCard.js';
import { nav } from '../Components/nav.js';
// import { auth, db } from '../firebase/config.js';

export const home = () => {
  /* UN CONTENEDOR Q CONTENGA A LOS BOTONES */
  const div = document.createElement('div');
  const section = document.createElement('div');
  section.innerHTML = `
  <header class='header-home'>
    <nav id="nav">  
      <picture id="logo-home" class="logo-container">
        <img src="./images/iconosombra.png" alt="Wisp icon">
      </picture> 
      
    </nav>
    <h2> We can Hear you</h2>
          <button id='createPost' class="create-home">
          Add</button>    
                        
  </header>
  <aside class='aside'>
      <article class="posts"></article>
    </aside>
    `;

  const logoHome = section.querySelector('#nav');
  logoHome.addEventListener('click', () => {
    document.querySelector('.nav-container').classList.toggle('show');
  });

  /// ELIMINAR
  function EliminarPosts(postsContainer) {
    const btnDelete = postsContainer.querySelectorAll('.btn-delete');
    console.log('btnDelete : ', btnDelete);
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        console.log('id: ', dataset.id);
        deleteTask(dataset.id);
      });
    });
  }

  /// MOSTRAR
  onAuthStateChanged(auth, (user) => {
    console.log('USeR : ', user);
    if (user) {
      const myQuery = query(collection(db, 'post'));
      onSnapshot(myQuery, (data) => {
        console.log('mi data', data);
        data.forEach((d) => console.log('probando doc en home', d.data()));
        const htmlPosts = setupPosts(data, user);
        const postsContainer = section.querySelector('.posts'); // se repite
        postsContainer.innerHTML = htmlPosts;
        EliminarPosts(postsContainer);

        const navSelector = section.querySelector('#nav');
        navSelector.appendChild(nav());
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
