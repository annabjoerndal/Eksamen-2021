// Opret annonce
document.getElementById("opret-btn1").addEventListener("click", () => {

    let varekategori = document.getElementById("input-varekategori").value
    let pris = document.getElementById("input-pris").value
    let url = document.getElementById("input-billede").value

    //Definerer vores egenskaber med tilhørende værdier
    const products = {
        varekategori: varekategori,
        pris: pris,
        billede: url
    }

    console.log(JSON.stringify(products))

    //Kalder serveren
    fetch('/opret_annonce', {
        method: "POST",
        headers: {
            //"Content-Type": "application/x-www-form-urlencoded"
            'Content-Type': 'application/json'
        },
        //Kører på 2 forskellige porte - sikkerhedsfunktion
        //mode: 'no-cors',
        //sender vores user videre i bodyen, sender det som en streng
        body: JSON.stringify(products)
        // }) 

        //kalder vores endpoint, jeg lover at der kommer en værdi tilbage, så laver vi "Then"
    }).then((response) => response.json())
        .then((response) => {
            alert("Du har oprettet en annonce");
            location.href = "/min_annonce";
        })

        //Hvis noget går galt
        .catch((error) => {
            window.alert(error)
        });
})

