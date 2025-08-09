// hambuger in the navbar
function toggleNavMenu() {
    const menuBox = document.getElementById("menuBox");
    const currentDisplay = window.getComputedStyle(menuBox).display;

    console.log(menuBox)
    if (currentDisplay === "none") {
        menuBox.style.display = "block";
    } else {
        menuBox.style.display = "none";
    }
}
