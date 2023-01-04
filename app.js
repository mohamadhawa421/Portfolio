const emailBtn = document.querySelector("#email-btn");
const emailBtn2 = document.querySelector("#email-btn2");
const currentValue = emailBtn.innerHTML;
const currentValue2 = emailBtn2.innerHTML;


emailBtn.addEventListener("click", () => {

    navigator.clipboard.writeText("mohamadhawa421@gmail.com")
    emailBtn.innerHTML="Copied !"
    setTimeout( ()=> {
        emailBtn.innerHTML = currentValue;
    }, 2000)
})

emailBtn2.addEventListener("click", () => {

    navigator.clipboard.writeText("mohamadhawa421@gmail.com")
    emailBtn2.innerHTML="Copied !"
    setTimeout( ()=> {
        emailBtn2.innerHTML = currentValue2;
    }, 2000)
})
