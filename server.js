//Filsystem - UNDERSØG
const fs = require("fs")

const express = require('express');
// var bodyParser = require('body-parser');
//const data = require('./data');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, "funkt")));
app.use(express.json());

//Forstå det der står i min body
app.use(express.urlencoded({extended:false}));

//Jeg laver nu en PORT
const PORT = 5001;
app.listen(PORT, () => {
    //dobbelttjeker via dette at min port virker
    console.log(`Server lytter til http://localhost:${PORT}`)
});

//Hele stien til filen - Profil
const ABSOLUTE_PATH = __dirname + "/profiles.json";

//Hele stien til filen - Annonce
const ABSOLUTE_PATH_ANN = __dirname + "/products.json";



//                                   PROFIL                                   \\

//Opret profil
app.get("/opret_profil", (req,res) => {
    res.sendFile(path.join(__dirname,'/funkt/opret_profil.html'))
})

//Opret profil - part 2
app.post("/opret_profil", (req,res) => {
    
    console.log('File recieved', req.body);

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
app.post("/opdater_profil", (req,res) => {
    console.log('File recieved', req.body);

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

    res.status(200).json("ok")
});

//Slet profil
app.delete("/slet_profil", (req,res) => {

    //Overskriver det som en streng
    fs.writeFile(ABSOLUTE_PATH, '', (err) => {
        // throws an error, you could also catch it here
        if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync(ABSOLUTE_PATH, "utf8"));
      }
});

    res.status(200).json("Slet profil succes")
});

//Min profil
app.get('/min_profil', (req, res) => {
    res.sendFile(path.join(__dirname, '/funkt/min_profil.html'))
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/funkt/index.html'))
})

//Login
app.get("/login2", (req, res) =>{

    res.sendFile(__dirname+"/funkt/login.html");
});


//Login 
app.post("/login2", (req,res) => {

    // console.log('Logget ind', req.body);

    //Læser fra min JSON fil 
    let storedUser = fs.readFileSync(ABSOLUTE_PATH, "utf8");
    let requestUser = JSON.stringify(req.body);

    //Sammenligner login med min JSON fil
    if(storedUser === requestUser){
        res.status(200).json('ok');
    } else {
        res.status(200).json('fail');
    }

    // fs.writeFile(ABSOLUTE_PATH, JSON.stringify(req.body), (err) => {
    //     // throws an error, you could also catch it here
    //     if (err)
    //     console.log(err);
    //   else {
    //     console.log("Login succesful\n");
    //     console.log("The written has the following contents:");
    //     console.log(fs.readFileSync(ABSOLUTE_PATH, "utf8"));
    //   }
    // });

    res.status(200).json("login");
});

//Login
// app.post('../login', (req, res) => {
//     res.sendFile(path.join(__dirname, './funkt/login/login.html'));
// });

//Henter vores username + password
app.post('/login', (req, res) =>{
//     const username = req.body.username
//     const password = req.body.password
//     data.userLogin(username, password, res)
// });

//Logud
app.post("/logud", (req,res) => {
    res.status(200).json("logud")
});

//                                    ANNONCE                                            \\

//Opret annonce
app.get("/opret_annonce", (req,res) => {
    res.sendFile(path.join(__dirname,'/funkt/opret_annonce.html'))
})

app.post("/opret_annonce", (req,res) => {

    let products = fs.readFileSync(ABSOLUTE_PATH_ANN, "utf8")

if()



    fs.writeFile(ABSOLUTE_PATH_ANN, JSON.stringify(req.body), (err) => {
        // throws an error, you could also catch it here
        if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync(ABSOLUTE_PATH_ANN, "utf8"));
      }
});

    res.status(200).json("opret annonce succes")
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
})