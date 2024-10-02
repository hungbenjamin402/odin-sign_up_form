let sign_up_password = ''
let confirm_signup_password = ''

function createElement(tags, className='', style='', content='') {
    const element = document.createElement(tags)
    
    if (className) { element.classList.add(className) }
    if (style) { element.setAttribute('style', style) }
    if (content) { element.textContent = content }
    
    return element
}

function receiveSignUpPassword(e) {
    sign_up_password = e.target.value;
}

function receiveConfirmSignUpPassword(e) {
    confirm_signup_password = e.target.value;
}

function checkMatchSignUpPassword() {
    var password = document.querySelector("#password")
    var confirm_password = document.querySelector("#confirm_password")

    let confirm_password_div = document.querySelector(".confirm-password")
    let unmatched_confirm_password_textAlert = document.querySelector(".unmatched_password_alert")

    if (!unmatched_confirm_password_textAlert) {
        unmatched_confirm_password_textAlert = createElement("p", "unmatched_password_alert", "", "Password do not match");
    }

    if (confirm_signup_password === sign_up_password) {
        console.log("Password and Confirm Password are matched")

        password.style.border = "1px solid black"
        confirm_password.style.border = "1px solid black"

        if (unmatched_confirm_password_textAlert) {
            unmatched_confirm_password_textAlert.remove()
        }
    }
    else if (confirm_signup_password != '') {
        if (confirm_signup_password != sign_up_password) {
            password.style.border = "3px solid red"
            confirm_password.style.border = "3px solid red"
        
            if (!document.querySelector(".unmatched_password_alert")) {
                confirm_password_div.append(unmatched_confirm_password_textAlert);
            }
        }
    }
}

const passwordInputBox = document.getElementsByClassName("confirm_password")


