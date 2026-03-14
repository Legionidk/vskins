document.body.addEventListener("click", (e) => {
    if (e.target.closest("#card") !== null) {
        document.body.querySelector("#popup-container").classList.remove("hidden");
    }
});

document.body.querySelector("#background-popup").addEventListener("click", () => {
    document.body.querySelector("#popup-container").classList.add("hidden");
})
