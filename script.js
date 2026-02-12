function login(){
let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "Karthik_123" && pass === "Karthik123"){
document.getElementById("loginBox").style.display="none";
document.getElementById("mainContent").style.display="block";
}else{
document.getElementById("error").innerText="Invalid Credentials!";
}
}

function openModal(id){
document.getElementById(id).style.display="block";
}

function closeModal(id){
document.getElementById(id).style.display="none";
}

// Typing Effect
const text = ["Software Engineer", "AI & ML Enthusiast", "Full Stack Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
if(count === text.length){
count = 0;
}
currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;
if(letter.length === currentText.length){
count++;
index = 0;
}
setTimeout(type, 150);
})();

// Scroll Reveal
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{
cards.forEach(card=>{
const top = card.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
card.style.opacity="1";
card.style.transform="translateY(0)";
}
});
});
