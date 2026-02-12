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

