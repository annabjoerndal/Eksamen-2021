// Opret profil
document.getElementById("opret-btn").addEventListener("click", () => {
    
    let varekategori = document.getElementById("input-varekategori").value
    let pris = document.getElementById("input-pris").value
    let billede = document.getElementById("input-billede").value

    var annonce = new Object();  
    annonce.varekategori = varekategori;
    annonce.pris = pris;
    annonce.billede = billede;
    
    let newAnnonce = { 
        "varekategori": varekategori, 
        "pris": pris,
        "billede": billede
    }
    console.log(JSON.stringify(newAnnonce))

    //const ABSOLUTE_PATH = __dirname + "/products.json";

    //Kalder serveren
    fetch('/opret_annonce', {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
            // 'Content-Type': 'application/json'
        },
    //Kører på 2 forskellige porte - sikkerhedsfunktion
        mode: 'no-cors',
        //sender vores user videre i bodyen, sender det som en streng
        body: JSON.stringify(profiles)

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

    .then(function(data) {
        if(data.statusText=="ok") {
            document.location.href="/";
        }
    })
    .catch((error) => {
        window.alert("Der skete en fejl!")
        window.alert(error)
    });
})


