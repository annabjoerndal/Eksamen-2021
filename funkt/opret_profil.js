// Opret profil
document.getElementById("opret-btn").addEventListener("click", () => {
    
    //Definerer vores data inputs
    let email = document.getElementById("input-profile-navn").value
    let password = document.getElementById("input-profile-password").value

    //Definerer vores egenskaber med tilhørende værdier
    const user = {
        email: email, 
        password: password
    }
    
    console.log(JSON.stringify(user))

    //Kalder serveren
    fetch('/opret_profil', {
        method: "POST",
        headers: {
            //"Content-Type": "application/x-www-form-urlencoded"
            'Content-Type': 'application/json'
        },
    //Kører på 2 forskellige porte - sikkerhedsfunktion
        //mode: 'no-cors',
        //sender vores user videre i bodyen, sender det som en streng
        body: JSON.stringify(user)
    // }) 

    //kalder vores endpoint, jeg lover at der kommer en værdi tilbage, så laver vi "Then"
    }).then((response) => response.json())
    .then((response) => {
        alert("Du er oprettet i systemet!");
    location.href = "/login2";
})

    //Hvis noget går galt
    .catch((error) => {
        window.alert(error)
    });
})
