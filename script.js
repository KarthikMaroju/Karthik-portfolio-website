const loginBtn = document.getElementById("loginBtn");
const container = document.getElementById("container");

loginBtn.addEventListener("click", login);

document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        login();
    }
});

function login(){
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if(username === "Karthik_123" && password === "Karthik123"){
        error.innerText = "";
        container.classList.add("flip"); // 3D Flip animation
    }else{
        error.innerText = "Incorrect Username or Password!";
    }
}
