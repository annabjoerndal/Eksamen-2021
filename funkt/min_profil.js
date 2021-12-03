document.getElementById("logud-btn").addEventListener("click", (event) => {
    event.preventDefault ();

    localStorage.clear();

    location.href = "/"
});

