//For at tjekke om brugeren er logget ind
const user = localStorage.getItem("user")
if (!user) {
    window.alert("du skal være logget ind for at være her")
    location.href = "/login";
}