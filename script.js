let mobile = document.querySelectorAll(".mobile");
let banner = document.querySelector(".banner");
let x = document.querySelector(".close");
let menu = document.querySelector(".open");
let black = document.querySelector(".black");

menu.addEventListener('click', () => {
    for(let i = 0; i < mobile.length; i++){
        mobile[i].style.display = "block";
    }
});

x.addEventListener('click', () => {
    for(let i = 0; i < mobile.length; i++){
        mobile[i].style.display = "none";
    }
});
