
let body = document.querySelector('body');

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

//typing text animation script
var typed = new Typed(".typing", {
    strings: ["A Full Stack Developer",  "A JAVA Backend Developer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true,
})


document.querySelector('#resume-link-1').addEventListener("click", () => {
    // console.log("OPENinig.....")
   // window.location.assign("https://drive.google.com/file/d/1vgOhH9mlzxn8doT0WA3ZkXD8IDcvi3Ed/view?usp=drive_link", "_blank");
    window.open(
        (href= "https://drive.google.com/file/d/1vgOhH9mlzxn8doT0WA3ZkXD8IDcvi3Ed/view?usp=drive_link")
    );
})

document.querySelector('#resume-link-2').addEventListener("click", () => {
    // console.log("OPENinig.....")
    //window.location.assign("https://drive.google.com/file/d/1vgOhH9mlzxn8doT0WA3ZkXD8IDcvi3Ed/view?usp=drive_link", "_blank");
    window.open(
        (href= "https://drive.google.com/file/d/1vgOhH9mlzxn8doT0WA3ZkXD8IDcvi3Ed/view?usp=drive_link")
    );
})

const sr = ScrollReveal({
    origin: 'left',
    distance: '0px',
    duration: 2000,
    reset: true
})

sr.reveal('#about h1', { delay: 50})
sr.reveal('.home-img', { delay: 50 })
sr.reveal('#user-detail-intro', { delay: 50 })
sr.reveal('.skill', { delay: 50 })

sr.reveal('.project', {})
sr.reveal('.project-card img', { delay: 50 })
sr.reveal('.project-title', { delay: 50 })
sr.reveal('.project-description', { delay: 50 })
sr.reveal('.project-tech-stack', { delay: 50 })
sr.reveal('.repo-links', { delay: 50 })

sr.reveal('#github-streak-stats', { delay: 50 })
sr.reveal('#github-top-langs', { delay: 50 })
sr.reveal('#github-stats-card', { delay: 50 })

 sr.reveal('.calendar', { delay: 50 })

 document.querySelector('.hamburger-icon').addEventListener('click', function() {
    document.getElementById('sidemenu').classList.toggle('open');
});
