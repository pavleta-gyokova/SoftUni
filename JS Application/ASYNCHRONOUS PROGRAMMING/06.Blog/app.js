function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    loadPostsBtn.addEventListener('click', getPosts);
    const viewCommentsBtn = document.getElementById('btnViewPost');
    viewCommentsBtn.addEventListener('click', getPostId);
    viewCommentsBtn.disabled = true;

}

attachEvents();


async function getPosts() {
    const select = document.getElementById('posts');
    select.innerHTML = "";


    const url = 'http://localhost:3030/jsonstore/blog/posts';
    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).map(addOptions).forEach(element => select.appendChild(element));

    const viewCommentsBtn = document.getElementById('btnViewPost');
    viewCommentsBtn.disabled = false;

}



async function getComments(postId) {
    const commentsUl = document.getElementById('post-comments');
    commentsUl.innerHTML = '';

    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts/' + postId;

    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const [postResponse, commentsResponse] = await Promise.all([
        fetch(postsUrl),
        fetch(commentsUrl)
    ]);


    const postData = await postResponse.json();
    const postBody = document.getElementById('post-body');
    const postTitle = document.getElementById('post-title');
    postTitle.textContent = postData.title;
    postBody.textContent = postData.body;


    const commentsData = await commentsResponse.json();
    const comments = Object.values(commentsData).filter(p => p.postId === postId);
    comments.map(createComments).forEach(comment => commentsUl.appendChild(comment));
    
}
function createComments(comment) {
    const result = document.createElement('li');
    result.id = comment.id;
    result.textContent = comment.text;
    return result;

}


function addOptions(post) {
    const option = document.createElement('option');
    option.value = post.id;
    option.textContent = post.title;
    return option;
}

function getPostId() {
    const postId = document.getElementById('posts').value;
    getComments(postId);
}