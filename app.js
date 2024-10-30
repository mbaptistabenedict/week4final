const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', function(e) {
    const query = e.target.value;
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=${query}`)
        .then(res => res.json())
        .then(data => {
            document.querySelector('.post').innerHTML = ''; // Clear previous results
            data.data.forEach(artworks => {
                const markup =
                `<div class="artist-container">
                    <p><strong>${artworks.title}</strong></p>
                    <p>Artist: ${artworks.artist_title}</p>
                    <img src="${artworks.thumbnail.lqip}" alt="${artworks.title} artwork"></img>
                    <p>Date: ${artworks.date_start}</p>
                </div>`;
                
                document.querySelector('.post').insertAdjacentHTML("beforeend", markup);
            });
        })
        .catch(err => console.error(err));
});


// fetch(`https://api.artic.edu/api/v1/artworks`)
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         data.data.forEach(artworks => {
//             const markup = 
//             `<p><strong>${artworks.title}</strong></p>
//             <p>Title: ${artworks.artist_title}</p>
//             <img src="${artworks.thumbnail.lqip}"></img>
//             <p>Date: ${artworks.date_start}</p>`;

//             document.querySelector('.post').insertAdjacentHTML("beforeend", markup)
//         }).join('');
//     });


// const postSearchEl = document.querySelector(".post-list");
// const id = localStorage.getItem("id");

// async function onSearchChange(event) {
//   const id = event.target.value;
//   renderPosts(postSearchEl);
// }

// async function renderPosts(id) {
//   const posts = await fetch(`https://api.artic.edu/api/v1/artworks${id}`);
//   const postsData = await posts.json();
//   postListEl.innerHTML = postsData.map((post) => postHTML(post)).join("");
// }

// function postHTML(post) {
//   return `
//     <div class="post">
//         <div class="post__title">
//             ${post.title}
//         </div>
//         <p class="post__body"
//             ${post.body}
//         </p>
//      </div>   `;
// }

// renderPosts(id);
