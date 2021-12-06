 const user = localStorage.getItem("user");
 if (user){
     location.href= "/min_profil";
 }
 document.getElementById("login-btn").addEventListener("click", (event) => {
    event.preventDefault ();


    const email = document.getElementById("input-profile-login-navn").value; 
    const password = document.getElementById("input-profile-login-password").value;
    const emails = JSON.stringify(email);
    const passwords = JSON.stringify(password);

    const user = {
        email: email, 
        password: password
    }

    //tjek hvad der er sket her 
    console.log(JSON.stringify(user))

 //Kalder serveren
 fetch("/login2", {
    method: "POST",
    headers: {
        // "Content-Type": "application/x-www-form-urlencoded"
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': "*"

    },
//Kører på 2 forskellige porte - sikkerhedsfunktion
    // mode: 'no-cors',
    //sender vores user videre i bodyen, sender det som en streng
    body: JSON.stringify(user)

    //kalder vores endpoint, jeg lover at der kommer en værdi tilbage, så laver vi "Then"
}) 
.then((response) => response.text())
.then((response) => {
    let res = response;
  if (response.includes("ok")) {
    // Gemme oplysninger
    localStorage.setItem("user", JSON.stringify(user));
     location.href = "/min_profil";
    console.log(response);
  }
   else {
       alert('Login failed')
   }
})
.catch(() => {
    window.alert("Der skete en fejl!")
});
})
 
