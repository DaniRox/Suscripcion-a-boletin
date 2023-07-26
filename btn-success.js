
function captureEmail(){
    let emailForm = document.getElementById("email").value;
    sessionStorage.setItem("emailForm", emailForm);
}

function displayEmail(){
    let email = sessionStorage.getItem("emailForm");
    document.getElementById("span-email").innerHTML = email;
}
