//Filsystem - UNDERSØG
const fs = require("fs")

const express = require('express');
var bodyParser = require('body-parser');
const data = require('./data');
const app = express();

app.use(express.static("funkt"));
app.use(express.json());

//Forstå det der står i min body
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Jeg laver nu en PORT
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server lytter til http://localhost:${PORT}`)
});

//Hele stien til filen 
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

    res.status(200).json("opret profil succes")
});

//Opdater profil
app.put("/opdater_profil", (req,res) => {
    res.status(200).json("opdater profil")
});


//Slet profil
app.delete("/slet_profil", (req,res) => {
    res.status(200).json("slet profil")
});

//Min profil
app.get('/min_profil', (req, res) => {
    res.sendFile(path.join(__dirname, './funkt/min_profil/min_profil.html'))
})

//Login 
/*
app.post("/login", (req,res) => {

    console.log('Logget ind', req.body);

    let bob = JSON.stringify(req.body);

    fs.writeFile(ABSOLUTE_PATH, JSON.stringify(req.body), (err) => {
        // throws an error, you could also catch it here
        if (err)
        console.log(err);
      else {
        console.log("Login succesful\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync(ABSOLUTE_PATH, "utf8"));
      }
    });

    res.status(200).json("login")

});
*/

//Login
app.post('../login', (req, res) => {
    res.sendFile(path.join(__dirname, './funkt/login/login.html'));
});

//Henter vores username + password
app.post('/login', (req, res) =>{
    const username = req.body.username
    const password = req.body.password
    data.userLogin(username, password, res)
});

//Logud
app.post("/logud", (req,res) => {
    res.status(200).json("logud")
});

//Opret annonce
app.post("/opret_annonce", (req,res) => {
    res.status(200).json("opret annonce")
});

//Opdater annonce
app.put("/opdater_annonce", (req,res) => {
    res.status(200).json("opdater annonce")
});

//Slet annonce
app.delete("/slet_annonce", (req,res) => {
    res.status(200).json("slet annonce")
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