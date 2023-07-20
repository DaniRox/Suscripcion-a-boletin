const btnCard = document.getElementById("btn-form");
const emailClient = document.getElementById("email");
const email = document.getElementsByClassName("card-email");


btnCard.addEventListener("click", desabilitarBtn);

function desabilitarBtn() {
    if(emailClient.value === "") {
        btnForm.style = "disabled";
    } else {
        email.innerHTML = emailClient.value;
    }
}
