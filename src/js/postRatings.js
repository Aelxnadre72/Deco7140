 function postRatings (movie, email, index) {
    const postCommentURL = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/comments/";
    const postCommentMethod = "POST";
    
    const postCommentHeaders = {
        'Content-Type': 'application/json'
    };

    const postCommentBody = JSON.stringify({
        username: movie.title,
        comment: email,
        website_code: "watchies2024",
        rating: index
    });
    

    const requestOptionsRatingsPost = { 
        method: postCommentMethod,
        headers: postCommentHeaders,
        body: postCommentBody
    };

    fetch(postCommentURL, requestOptionsRatingsPost)
    .then(response => response.json())
    .then(data => console.log(data));
}
