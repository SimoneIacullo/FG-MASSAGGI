let elem = document.querySelectorAll(".watch");
let callback = function(items) {
    items.forEach(item => {
        if(item.isIntersecting) {
            item.target.classList.add("in-page");
        }
        else {
            item.target.classList.remove("in-page");
        }        
    });
}
let observer = new IntersectionObserver(callback, { threshold: 0.33});
elem.forEach((element) => {
    observer.observe(element)
});


let navbarCallback = function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.getElementById("barra").style.backgroundColor = "transparent";
            document.getElementById("navbar").style.display = "none";
            document.getElementById("logo").style.display = "none";
            document.getElementById("tastoNavbar").style.display = "none";
        } else {
            document.getElementById("barra").style.backgroundColor = "black";
            document.getElementById("navbar").style.display = "grid";
            document.getElementById("logo").style.display = "inline-block";
            document.getElementById("tastoNavbar").style.display = "";
        }
    });
};
let navbarObserver = new IntersectionObserver(navbarCallback, { threshold: 0.4});
navbarObserver.observe(document.getElementById('presentazione'));


      
let tastoNavbar = document.querySelector("#tastoNavbar");
let navbar = document.querySelector("#navbar");
tastoNavbar.addEventListener("click", () => {
    tastoNavbar.classList.toggle("toggle");
    navbar.classList.toggle("toggle");
})
