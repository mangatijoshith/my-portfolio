// ==========================
// Scroll To Top Button
// ==========================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollTopBtn.style.display = "block";

    }

    else{

        scrollTopBtn.style.display = "none";

    }

});


scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ==========================
// Fade Animation
// ==========================

const fadeElements = document.querySelectorAll(

".about, .skills, .projects, .education, .contact"

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.2

}

);

fadeElements.forEach(element=>{

element.classList.add("fade");

observer.observe(element);

});