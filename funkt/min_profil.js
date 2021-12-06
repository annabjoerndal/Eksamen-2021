//Log ud
document.getElementById("logud-btn").addEventListener("click", (event) => {
    event.preventDefault ();

    localStorage.clear();

    location.href = "/"
});

//Slet profil 
document.getElementById("slet-btn").addEventListener("click", (event) => {
    event.preventDefault ();

  //Kalder serveren
  fetch('/slet_profil', {
    method: "DELETE",
    headers: {
        //"Content-Type": "application/x-www-form-urlencoded"
        'Content-Type': 'application/json'
    },
//Kører på 2 forskellige porte - sikkerhedsfunktion
    //mode: 'no-cors',
    //sender vores user videre i bodyen, sender det som en streng
    //body: JSON.stringify(user)
// }) 

//kalder vores endpoint, jeg lover at der kommer en værdi tilbage, så laver vi "Then"
}).then((response) => response.json())
.then((response) => {
    alert("Du er slettet i systemet!");
    localStorage.clear();

    location.href = "/"
})

//Hvis noget går galt
.catch((error) => {
    window.alert(error)
});
});


