var fs = require("fs")

function saveUser(user, res) {
    const everyUser = fs.readFileSync('users.json');
    const parsedUsers = JSON.parse(everyUser)
    let found = false; 

    for (var i = 0; i < parsedUsers.length; i++) {
        if (user.email === parsedUsers[i].email) {
            found = true; 
    }
}

if (!found) { 
    parsedUsers.push(user)
    
    const jsonUsers = JSON.stringify(parsedUsers)
    fs.writeFileSync('users.json', jsonUsers);
    res.status(200).send(true);
} else {
    console.log('brugeren eksistere allerede - data.js')
    res.status(404).end()
}
};

//login
function userLogin(username, password, res) {
    const everyUser = fs.readFileSync('profiles.json');
    const parsedUsers = JSON.parse(everyUser)

    //tjekker om det er en bruger, som er i min json fil
    for (var i = 0; i < parsedUsers.length; i++) {
        if (username === parsedUsers [i].username && password === parsedUsers[i].password) {
            res.send("Brugeren er logget ind")
        }
    }
    res.status(401).end
}

module.exports = {saveUser, userLogin};