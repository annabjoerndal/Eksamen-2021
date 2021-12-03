/*
document.getElementById("slet-profil").addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.setItem('slet', '');
});
*/

window.addEventListener("load", () = {
    document.getElementById("slet profil").addEventListener("click", () => {

        fetch("/slet_profil"), {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })

    .then(function(data) {
        if(data.statusText == "OK") {
            document.location.href="/login";
        } else }
        document.getElementById("fejlmeddelse").innerHTML = data.statusText;
    )
}
)