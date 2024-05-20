const baseURLMovies = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/movies/";

const requestOptionsMovies = { 
    method: 'GET',
    redirect: 'follow'
};

 const fetchMovies = async () => {
    const response = await fetch(baseURLMovies, requestOptionsMovies);
    const data = await response.json();
    return data;
}