// Opret profil

document.getElementById("opret-btn").addEventListener("click", () => {
    
    let username = document.getElementById("input-profile-navn").value
    let password = document.getElementById("input-profile-password").value

    var profile = new Object();  
    profile.username = username;
    profile.password = password;
    
    console.log(JSON.stringify(profile))

    //Kalder serveren
    fetch('http://localhost:5001/opret_profil', {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
            // 'Content-Type': 'application/json'
        },
    //Kører på 2 forskellige porte - sikkerhedsfunktion
        mode: 'no-cors',
        //sender vores user videre i bodyen, sender det som en streng
        body: JSON.stringify(profile)

        //kalder vores endpoint, jeg lover at der kommer en værdi tilbage, så laver vi "Then"
    }) 
    // }).then((response) => response.json())
    // .then((response) => {
    //     //hvad gør vi når vi har lavet en bruger, tilbage til login
    //     //hvis respons er succesfuldt
    //     console.log(response)
    //     if (response) {
    //         alert(response)
    //     }
    // })
    //hvis noget går galt
    .catch((error) => {
        window.alert("Der skete en fejl!")
        window.alert(error)
    });
})


