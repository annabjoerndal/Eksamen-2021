 const user = localStorage.getItem("user");
 if (user){
     location.href= "/min_profil";
 }
 document.getElementById("login-btn").addEventListener("submit", (event) => {
    event.preventDefault ();
    const email = document.getElementById("input-profile-login-navn").value; 
    const password = ocument.getElementById("input-profile-login-password").value;
    const emails = JSON.stringify(email);
    const passwords = JSON.stringify(password);

    const user = {
        email: email, 
        password: password
    }
 }
 )

 //Kalder serveren
 fetch("http://localhost:5001/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        //'Content-Type': 'application/json'
    },
//Kører på 2 forskellige porte - sikkerhedsfunktion
    mode: 'no-cors',
    //sender vores user videre i bodyen, sender det som en streng
    body: JSON.stringify(user)

    //kalder vores endpoint, jeg lover at der kommer en værdi tilbage, så laver vi "Then"
}) 
.then((response) => response.text())
.then((response) => {
  if (response) {
    // Gemme oplysninger
    localStorage.setItem("user", JSON.stringify(user));
    location.href = "/login";
    console.log(response);
  }
})
.catch(() => {
    window.alert("Der skete en fejl!")
});


//Nichlas
/*
document.getElementById("login-btn").addEventListener("submit", (event) => {
    event.preventDefault();
    let username = document.getElementById("input-profile-login-navn").value
    let password = document.getElementById("input-profile-login-password").value
    let emails = JSON.stringify(email);
    let passwords = JSON.stringify(password);

 var login = new Object();  
 login.username = username;
 login.password = password;
 
 console.log(JSON.stringify(login))
 */
