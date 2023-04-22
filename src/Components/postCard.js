import { updateTask } from '../Firebase/firestore.js';

// eslint-disable-next-line consistent-return
export const setupPosts = (data, user) => {
  // if (data.length || user.length) {
  let html = '';
  data.forEach((doc) => {
    console.log('postCard', doc.data());
    // const userA = currentUser();
    const post = doc.data();
    // const likeCounter = post.likes;
    const section = `
        <article class="post-box">
          <section class="user-box">
            <aside class="info">
                
              <aside class="auto-layout">
                <p class="username-post"> ${post.name} </p>
                <p class="date-post"> ${post.date} </p>
              </aside>
            </aside>
            <aside class="options-post">
              <button class='btn-delete' data-id="${doc.id}"> delete </button> <br>
            <button class = 'btn-edit' data id = "${doc.id} "> edit </button>
          </section>
          <section class="card">
           
            <section class="description-box">
              <p class="pp">${post.description}</p>
               </section>  
          </section>
          <section class="interaction-box">
            <figure class=" item">
            <img id="like" src="./images/like-icon.svg" alt="" class="icon-post">
             
            </figure>
           
          </section>
        </article>
              `;
    html += section;
  });

  return html;
  //   posts.innerHTML = html;
  // }
/**
  // Get the post container elementl
  const postContainer = document.getElementById('card');

  // Get the post content text
  const postText = postContainer.textContent;

  // Calculate the length of the post text
  const postLength = postText.length;

  // Set the padding and border-radius based on the length of the post text
  if (postLength < 20) {
    postContainer.style.padding = '10px';
    postContainer.style.borderRadius = '15px';
  } else if (postLength < 50) {
    postContainer.style.padding = '20px';
    postContainer.style.borderRadius = '20px';
  } else {
    postContainer.style.padding = '30px';
    postContainer.style.borderRadius = '25px';
  }

  // posts.innerHTML = '<p> Post vacio </p>';
  console.log('no posts');
  */
};

// <img src="./images/like.png" alt="" class="icon-post">
