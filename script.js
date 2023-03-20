// header
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  nav.classList.toggle("active");
});


const footer = document.querySelector("footer p");

footer.innerHTML += new Date().getFullYear();


let get_started_btn_UI =  document.querySelector(".main-btn");
get_started_btn_UI.onclick = () =>{
  window.open("https://www.facebook.com/profile.php?id=100090867099566")
}

let facebook_icon = document.querySelector(".facebook")
facebook_icon.onclick = () =>{
  window.open("https://www.facebook.com/profile.php?id=100090867099566")
}

let whatsApp_icon = document.querySelector(".whatsApp")

whatsApp_icon.onclick = ()=>{
  alert("Thanks for your Visit 😃😃")
  window.open("https://wa.me/message/6IZY2XJO2XFQN1?src=qr")
}

linkedin_icon = document.querySelector(".linkedin")

linkedin_icon.onclick = () =>{
  alert("Thanks for your Visit 😃😃 ")
  window.open("https://www.linkedin.com/in/hamdy-abdal-majeed-b67b32246/")
} 

// change color


let change = document.querySelector(".change_color");

document.addEventListener("change",function(){
  let changeColor = change.value;
  
  document.body.style.backgroundColor = changeColor
});