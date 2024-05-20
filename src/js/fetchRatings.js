const baseURLRatings = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/comments/";

const getCommentsURL = `${baseURLRatings}?website_code=watchies2024`;

const requestOptionsRatings = { 
    method: 'GET',
    redirect: 'follow'
};

 const fetchRatings = async () => {
    const response = await fetch(getCommentsURL, requestOptionsRatings);
    const data = await response.json();
    return data;
}