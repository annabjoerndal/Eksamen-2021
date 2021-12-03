//En listeneter 
document.getElementById("submitNewPassword").addEventListener("click", () => {

    const userJson = localStorage.getItem("user");

    let storedUser = JSON.parse(userJson);

    const password = document.getElementById("newPassword").value;

    const user = {
        email:  storedUser.email, 
        password: password
    }

    fetch("/opdater_profil", {
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
  
      if (response.includes("ok")) {
        // Gemme oplysninger
        localStorage.setItem("user", JSON.stringify(user));
         location.href = "/min_profil";
        console.log(response);
      }
       else {
           alert('Update failed')
       }
    })
    .catch(() => {
        window.alert("Der skete en fejl!")
    });
});
