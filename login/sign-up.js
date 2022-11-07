let form_btn = document.getElementById("form-btn");
let arr = JSON.parse(localStorage.getItem("sign-up")) || []

form_btn.addEventListener("click", (e) => {
    let count1 = 0
    e.preventDefault()
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let conpass = document.getElementById("conpass").value

    if (name === '' && password === '' && email === '' && conpass === '') {
        alert('dont leave empty ')
        return
    }
    arr.forEach((ele) => {
        if (email === ele.email1) {
            count1++
        }
    })
    if (count1 <= 1) {

        let obj = {
            name1: name,
            email1: email,
            password1: password
        }
        arr.push(obj)
        localStorage.setItem("sign-up", JSON.stringify(arr))
        window.location.href = './login.html'
        alert("Account Created successfully")
    } else {
        alert("Duplecate account found")
    }

})

