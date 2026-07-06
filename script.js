// ===============================
// Smooth Scroll
// ===============================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===============================
// Dark / Light Theme
// ===============================
const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML="🌞";
    }
    else{
        themeBtn.innerHTML="🌙";
    }

};

// ===============================
// Fade Animation on Scroll
// ===============================
const cards = document.querySelectorAll(".card,.skill,.timeline-item,.certificate-grid img");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.2});

cards.forEach(card=>{

    card.classList.add("hidden");

    observer.observe(card);

});

// ===============================
// Scroll To Top Button
// ===============================
const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===============================
// Active Navigation
// ===============================
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Certificate Popup
// ===============================
const images=document.querySelectorAll(".certificate-grid img");

const popup=document.createElement("div");
popup.id="popup";

popup.innerHTML="<img id='popup-img'>";

document.body.appendChild(popup);

const popupImg=document.getElementById("popup-img");

images.forEach(img=>{

    img.onclick=()=>{

        popup.style.display="flex";

        popupImg.src=img.src;

    }

});

popup.onclick=()=>{

    popup.style.display="none";

};

// ===============================
// Typing Effect
// ===============================
const text="Computer Science Student | AI & ML Enthusiast";

let i=0;

const typing=document.querySelector(".hero h3");

typing.innerHTML="";

function type(){

    if(i<text.length){

        typing.innerHTML+=text.charAt(i);

        i++;

        setTimeout(type,70);

    }

}

type();

// ===============================
// Hero Image Hover
// ===============================
const heroImg=document.querySelector(".hero-image img");

heroImg.addEventListener("mousemove",()=>{

    heroImg.style.transform="scale(1.05) rotate(2deg)";

});

heroImg.addEventListener("mouseleave",()=>{

    heroImg.style.transform="scale(1)";

});

// ===============================
// Dynamic Footer Year
// ===============================
document.querySelector("footer p").innerHTML =
`© ${new Date().getFullYear()} Pavithra Kilari | All Rights Reserved.`;
