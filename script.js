// DARK MODE
document.querySelector(".toggle").onclick = function(){
document.body.classList.toggle("light");
}

// PARTICLES
particlesJS.load('particles-js','https://cdn.jsdelivr.net/particles.js/2.0.0/particles.json');

// MODAL
function openModal(id){
document.getElementById(id).style.display="block";
}

function closeModal(id){
document.getElementById(id).style.display="none";
}

// CONTACT FORM
document.getElementById("contact-form").addEventListener("submit",function(e){
e.preventDefault();
alert("Message Sent Successfully!");
});

