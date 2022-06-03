let pass = document.querySelector("#passInput");
let passConfirm = document.querySelector("#passConfirmationInput");
pass.addEventListener("input", passMatch)
passConfirm.addEventListener("input", passMatch)

function passMatch(){
    // let pswd = pass.value;
    if(passConfirm.value==pass.value){
        passConfirm.style.border = "2px solid green";
    }
    else{
        passConfirm.style.border = "2px solid red";
    };
};