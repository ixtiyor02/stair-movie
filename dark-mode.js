let mainBody = document.getElementsByTagName("body")[0]
let darkMode = document.querySelector(".label")

darkMode.addEventListener("click", () => {
    darkMode.classList.toggle("active")
    mainBody.classList.toggle("night")
})