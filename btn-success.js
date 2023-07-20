const btnForm = document.getElementById("form-btn");


btnForm.addEventListener("click", desabilitarBtn)

function desabilitarBtn() {
    if(formEmail.value === "") {
        btnForm.style = "disabled";
    }
}
