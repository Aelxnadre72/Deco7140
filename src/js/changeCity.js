const changeCity = () => {
    alert("Unfortunately, we are currently not operating in your city.");
    document.getElementsByClassName('dropdown-menu')[0].querySelector('option[value="brisbane"]').selected = true;
}