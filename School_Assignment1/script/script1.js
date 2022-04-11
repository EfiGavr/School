// Function for opening the Popup forms and hidding the rest 
// ElementInternals(expept of footernnav bar and header)
function openForm(open) {
    document.getElementById(open).style.display = "block";
    document.getElementById('openBtn').style.display = "none";
}
// Function for closing the Popup forms and appearing the rest 
// ElementInternals(expept of footernnav bar and header)
function closeForm(close, paragraphId2) {
    document.getElementById(close).style.display = "none";
    document.getElementById(paragraphId2).innerHTML = " ";
    document.getElementById('openBtn').style.display = "block";
}
//Function for turning lowercase letters to uppercase
function upperCase(name) {
    var x = document.getElementById(name);
    x.value = x.value.toUpperCase();
}
//Function for validating the pattern of the password before submiting
function allnumeric(ps, paragraphId) {
    var numbers = /[^0-9]/;
    var password = document.getElementById(ps).value;
    if (password.match(numbers)) {
        document.getElementById(paragraphId).innerHTML = "Your password must contains only numerical characters !";
        return false;
    }
    else {
        document.getElementById(paragraphId).innerHTML = " ";
        return true;
    }
}
