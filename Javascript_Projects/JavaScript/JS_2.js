function validateForm() {
    let fname = document.forms["contact"]["fname"].value;
    let lname = document.forms["contact"]["lname"].value;
    let phone_number = document.forms["contact"]["phone_number"].value;
    if (fname == "" || lname == "") {
        alert("Name must be filled out");
        return false;
    }
    if (phone_number == "") {
        alert("Phone number must be filled out");
        return false;
    }
}

