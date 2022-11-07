let arr = JSON.parse(localStorage.getItem("sign-up")) || []

let login_btn = document.getElementById('login_btn')
login_btn.addEventListener('click', login)

function login(e) {
    let count1 = 0
    let login_email = document.getElementById('login_email').value
    let login_pass = document.getElementById("login_pass").value
    if (login_email === '' && login_pass === '') {
        alert('dont leave empty ')
        return
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].email1 === login_email && arr[i].password1 === login_pass) {

            count1++
        }
    }
    if (count1 >= 1) {
        alert("login Successful")
        window.location.href = '/feature/featured.html'
    } else {
        login_email.inneText = "Wrong E-mail"
        alert("login fail try again")
    }
}
