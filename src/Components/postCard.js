// eslint-disable-next-line consistent-return
export const setupPosts = (data) => {
  let html = '';
  data.forEach((doc) => {
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
              <button class='btn-delete' data-id="${doc.id}"> DELETE </button> <br>
            <button id="botonEditar${doc.id}" class= 'btn-edit' data-id = "${doc.id}"> EDIT </button>
          </section>
          <section class="card">
           
            <section class="description-box">
              <p class="pp">${post.description}</p>
               </section>  
          </section>
          <section class="interaction-box">
            <figure class=" item">
    
             
            </figure>
           
          </section>
        </article>
              `;
    html += section;
  });

  return html;
};
