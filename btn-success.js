const btnCard = document.getElementById("btn-form");
const formEmail = document.getElementById("email");


btnCard.addEventListener("click", desabilitarBtn);

function desabilitarBtn() {
    if(formEmail.value === "") {
        btnForm.style = "disabled";
    }
}
