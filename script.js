// header 
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active")
    nav.classList.toggle("active")
})
// image member
const imageMember = document.querySelector(".image-member");
imageMember.addEventListener("click", () => {
    window.open("https://google.com")
})
