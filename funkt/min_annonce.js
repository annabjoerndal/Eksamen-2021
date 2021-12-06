
//Kalder serveren
fetch('/annoncer', {
    method: "GET",
    headers: {
        //"Content-Type": "application/x-www-form-urlencoded"
        'Content-Type': 'application/json'
    },

    //kalder vores endpoint, jeg lover at der kommer en værdi tilbage, så laver vi "Then"
}).then((response) => response.json())
    .then((response) => {
        let products = JSON.parse(response);
        console.log(response);


        products.forEach(myFunction);



        // let product = products[1];

        // // Find a <table> element with id="myTable":
        // var table = document.getElementById("table");

        // // Create an empty <tr> element and add it to the 1st position of the table:
        // var row = table.insertRow(-1);

        // // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        // var cell3 = row.insertCell(2);

        // // Add some text to the new cells:
        // cell1.innerHTML = product.varekategori;
        // cell2.innerHTML = product.pris;
        // cell3.innerHTML = "<img src=" + product.billede + " width='250' height='200'>"
    })

    //Hvis noget går galt
    .catch((error) => {
        window.alert(error)
    });


function myFunction(product) {
            // Find a <table> element with id="myTable":
            var table = document.getElementById("table");

            // Create an empty <tr> element and add it to the 1st position of the table:
            var row = table.insertRow(-1);
    
            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
    
            // Add some text to the new cells:
            cell1.innerHTML = product.varekategori;
            cell2.innerHTML = product.pris;
            cell3.innerHTML = "<img src='" + product.billede + "' width='250' height='200'>"
            cell4.innerHTML = "text input"
            cell5.innerHTML = "opdater knap"
            cell6.innerHTML = "slet knap"
}
