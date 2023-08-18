// nếu đúng => return TRUE. Không thì return FALSE
function kiemTraRong(idErr, value ){
    if (value.trim().length == 0){
        document.getElementById(idErr).innerText = "Cannot be blank";
        return false;
    } else {
        document.getElementById(idErr).innerText = "";
        return true;
    }
}

function kiemTraDoDai(min, max, idErr, value){
    // trim() removes white spaces
    var length = value.trim().length;
    if (length < min || length > max){
        document.getElementById(idErr).innerText = `Input must be must from ${min} to ${max} in length.`;
        return false;
    } else {
        document.getElementById(idErr).innerText = '';
        return true;
    }
}

function kiemTraEmail (idErr, value){
    // REGEX (verify email, password, etc)
    // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (re.test(value)){
        document.getElementById(idErr).innerText = "";
        return true;
    } else {
        document.getElementById(idErr).innerText = "Invalid email";
        return false;
    }

}