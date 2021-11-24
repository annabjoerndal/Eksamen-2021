//Filsystem - UNDERSØG
const fs = require("fs")

const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(express.static("funkt"));
app.use(express.json());

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Jeg laver nu en PORT
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server lytter til http://localhost:${PORT}`)
});

const ABSOLUTE_PATH = __dirname + "/profiles.json";


//Forside - Her den tager alt info fra
app.get("/", (req,res) => {

    res.status(200).json("Forside");

});

//Opret profil
app.post("/opret_profil", (req,res) => {

    console.log('File recieved', req.body);
    
let bob = JSON.stringify(req.body);

    fs.writeFile(ABSOLUTE_PATH, JSON.stringify(req.body), (err) => {
        // throws an error, you could also catch it here
        if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync(ABSOLUTE_PATH, "utf8"));
      }
    });

    res.status(200);


    // res.status(200).json("opret profil")
});

//Opdater profil
app.put("/opdater_profil", (req,res) => {
    res.status(200).json("opdater profil")
});

//Login 
app.post("/login", (req,res) => {
    res.status(200).json("login")
});

//Logud
app.post("/logud", (req,res) => {
    res.status(200).json("logud")
});


//her er databasen
//Her vi henter data
const loadProfileDatabase = () => {
    const rawdata = fs.readFileSync("profiles.json");
    const profiles = JSON.parse(rawdata);
    return profiles
}

//Gemmer profil i databasen - her ændringer forekommer
//Her vi gemmer data
const saveProfileDatabase = (changedProfiles) => {
    const data = JSON.stringify(changedProfiles);
    fs.writeFileSync("profiles.json", data);
}