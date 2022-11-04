let mainimg = document.getElementById('pro-under-main');
let mainimg2 = document.getElementsByClassName("sub-img2");


for (let i = 0; i < mainimg2.length; i++) {
    mainimg2[i].addEventListener("click", (e) => {
        mainimg.src = e.target.currentSrc
    })

}