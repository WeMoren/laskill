const sideNav = document.getElementById("side-nav-container");
const openNav = document.getElementById("open-icon");
const closeNav = document.getElementById("close-icon");

openNav.addEventListener("click", () => {
    sideNav.style.right = "0";
});

closeNav.addEventListener("click", () => {
    sideNav.style.right = "-100vw";
});

window.onclick = (e) => {
    if(e.target === sideNav){
        sideNav.style.right = "-100vw";
    }
}