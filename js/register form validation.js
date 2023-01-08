/*let id =(id) =>{
    document.getElementById(id)
}

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
*/

let id =(id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let fullnames =id("fullnames"),
    username = id("username"),
    email = id("email"),
    confirmemail =id("confirmemail"),
    phone = id("phone"),
    password = id("password"),
    confirmpassword = id("confirmpassword"),
    errorMsg =classes('error'),
    succesIcon =classes('succes-icon'),
    failureIcon =classes('failure-icon');

    
    form.addEventListener("submit", (e) =>{
        e.preventDefault();

        //fullnames validation
        if (fullnames.value.trim() === "") {
            errorMsg[0].innerHTML ="Name cannot be blank";
            failureIcon[0].style.opacity = "1";
            succesIcon[0].style.opacity = "0";
            
        }
        else{
            errorMsg[0].innerHTML ="";
            failureIcon[0].style.opacity = "0";
            succesIcon[0].style.opacity = "1";
        }
        

        //username validation
        if (username.value.trim() === "") {
            errorMsg[1].innerHTML ="Username cannot be blank";
            failureIcon[1].style.opacity = "1";
            succesIcon[1].style.opacity = "0";
            
        }
        else{
            errorMsg[1].innerHTML ="";
            failureIcon[1].style.opacity = "0";
            succesIcon[1].style.opacity = "1";

        }

        //Email validation
        if (email.value.trim() === "") {
            errorMsg[2].innerHTML ="Email cannot be blank";
            failureIcon[2].style.opacity = "1";
            succesIcon[2].style.opacity = "0";
        }
        else{
            errorMsg[2].innerHTML ="";
            failureIcon[2].style.opacity = "0";
            succesIcon[2].style.opacity = "1";
        }
        //confirm  email validation
        if (confirmemail.value.trim() === "") {
            errorMsg[3].innerHTML ="Email cannot be blank";
            failureIcon[3].style.opacity = "1";
            succesIcon[3].style.opacity = "0";
        }
        else{
            errorMsg[3].innerHTML ="";
            failureIcon[3].style.opacity = "0";
            succesIcon[3].style.opacity = "1";
        }
        //phone validation
        if (phone.value.trim() === "") {
            errorMsg[4].innerHTML ="Phone cannot be blank";
            failureIcon[4].style.opacity = "1";
            succesIcon[4].style.opacity = "0";
        }
        else{
            errorMsg[4].innerHTML ="";
            failureIcon[4].style.opacity = "0";
            succesIcon[4].style.opacity = "1";
        }
        //password validation
        if (password.value.trim() === "") {
            errorMsg[5].innerHTML ="Password cannot be blank";
            failureIcon[5].style.opacity = "1";
            succesIcon[5].style.opacity = "0";
        }
        else{
            errorMsg[5].innerHTML ="";
            failureIcon[5].style.opacity = "0";
            succesIcon[5].style.opacity = "1";
        }
        //confirm password validation
        if (confirmpassword.value.trim() === "") {
            errorMsg[6].innerHTML ="Password cannot be blank";
            failureIcon[6].style.opacity = "1";
            succesIcon[6].style.opacity = "0";
        }
        else{
            errorMsg[6].innerHTML ="";
            failureIcon[6].style.opacity = "0";
            succesIcon[6].style.opacity = "1";
        }
    }
);
