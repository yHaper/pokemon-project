const buttonChangeDarkTheme = document.getElementById("change-dark-theme");
const body = document.querySelector("body");
const imageThemeSwitchButton = document.querySelector(".dark-theme-button");

buttonChangeDarkTheme.addEventListener("click", () => {

    const darkThemeActive = body.classList.contains("dark-theme-button");

    if (darkThemeActive) {
        body.classList.remove("dark-theme-button");

        imageThemeSwitchButton.setAttribute("src", "./src/imagens/sun.png");
    } else {
        body.classList.add("dark-theme-button");

        imageThemeSwitchButton.setAttribute("src", "./src/imagens/moon.png");
    }

});