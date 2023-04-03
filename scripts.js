const container = document.querySelector(".results");

const url = "https://www.rrencat.one/wp-json/wp/v2/posts?_embed&per_page=3";

async function getBlogPosts() {
    try{
        const response = await fetch(url);
        const getPosts = await response.json();
    
        console.log(getPosts);

        container.innerHTML = ""; 

        for (let i = 0; i < getPosts.length; i++) {
            const blogPost = getPosts[i].content.rendered;

            container.innerHTML += `<div>
                                    ${blogPost}
                                </div>`;
        }
    }
    catch(error) {
        console.log(error);
        container.innerHTML = message("error", error);
    } 
}

getBlogPosts();

