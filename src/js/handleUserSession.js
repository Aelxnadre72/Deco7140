const emailFromSession = sessionStorage.getItem('email');
if(emailFromSession === "" || emailFromSession === null) {
    document.getElementsByClassName("mytickets-btn")[0].style.display = "none";
    document.getElementsByClassName("signin-btn")[0].style.display = "block";
    document.getElementsByClassName("signout-btn")[0].style.display = "none";
} else {
    document.getElementsByClassName("mytickets-btn")[0].style.display = "block";
    document.getElementsByClassName("signin-btn")[0].style.display = "none";
    document.getElementsByClassName("signout-btn")[0].style.display = "block";
}

const signOut = () => {
    sessionStorage.setItem("email", "");
    location.reload(true);
}

const signOutMyTickets = () => {
    sessionStorage.setItem("email", "");
    window.location.href = 'index.html';
}