/*let id =(id) =>{
    document.getElementById(id)
}

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
*/

let id =(id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    errorMsg =classes('error'),
    succesIcon =classes('succes-icon'),
    failureIcon =classes('failure-icon');

    
    form.addEventListener("submit", (e) =>{
        e.preventDefault();

        //username validation
        if (username.value.trim() === "") {
            errorMsg[0].innerHTML ="Username cannot be blank";
            failureIcon[0].style.opacity = "1";
            succesIcon[0].style.opacity = "0";
            
        }
        else{
            errorMsg[0].innerHTML ="";
            failureIcon[0].style.opacity = "0";
            succesIcon[0].style.opacity = "1";
        }
        

        //Email validation
        if (email.value.trim() === "") {
            errorMsg[1].innerHTML ="Email cannot be blank";
            failureIcon[1].style.opacity = "1";
            succesIcon[1].style.opacity = "0";
            
        }
        else{
            errorMsg[1].innerHTML ="";
            failureIcon[1].style.opacity = "0";
            succesIcon[1].style.opacity = "1";

        }

        //Password validation
        if (password.value.trim() === "") {
            errorMsg[2].innerHTML ="Password cannot be blank";
            failureIcon[2].style.opacity = "1";
            succesIcon[2].style.opacity = "0";
        }
        else{
            errorMsg[2].innerHTML ="";
            failureIcon[2].style.opacity = "0";
            succesIcon[2].style.opacity = "1";
        }
    }
);
