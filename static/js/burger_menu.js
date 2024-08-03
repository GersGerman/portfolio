const links = document.querySelectorAll(".navigation a");
const nav = document.querySelector(".navigation");
const burger = document.querySelector(".burger");
const lines = document.querySelectorAll(".burger-hr")

burger.addEventListener("click", () =>{
    nav.classList.toggle("showed");
    burger.classList.toggle("rotated");

    lines.forEach((line) => {
        line.classList.toggle("rotated");
    });
    
});

document.querySelector(".wrapper").addEventListener("click", () => {
    nav.classList.remove("showed");
    burger.classList.remove("rotated");
    lines.forEach((line) => {
        line.classList.remove("rotated");
    });
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.toggle("showed");
        burger.classList.remove("rotated");
        lines.forEach((line) => {
            line.classList.toggle("rotated");
        });

})});

