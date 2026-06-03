// NAV SHADOW ON SCROLL
window.addEventListener("scroll", () => {
const nav = document.getElementById("nav");
if(window.scrollY > 50){
nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
}
});

// SCROLL REVEAL
const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
elements.forEach(el => {
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.style.opacity = 1;
el.style.transform = "translateY(0)";
}
});
});

// FORM
document.getElementById("contactForm")?.addEventListener("submit", function(e){
e.preventDefault();
alert("Message sent! I will contact you soon.");
this.reset();
});
