// Opret profil

document.getElementById("opret-btn").addEventListener("click", () => {
    
    fetch('http://localhost:5000/opret_profil', {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        mode: 'no-cors',
        //sender vores user videre i bodyen, sender det som en streng
        body: JSON.stringify("bob")

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


    alert("bob");
})


