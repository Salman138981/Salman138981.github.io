let body = document.querySelector('body');

let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right= "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

//typing text animation script
var typed = new Typed(".typing",{
    strings : ["A Full Stack Developer", "A JAVA Backend Developer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
})

document.querySelector("#resume-link-1").addEventListener("click",()=>{
    window.location.assign("https://mega.nz/file/Otl1GZAA#0GchG0dmbwLCN3-tZJqkpzKTtWOL8kdVRCG71iwcnRo","_blank");
})

document.querySelector("#resume-link-2").addEventListener("click",()=>{

    window.location.assign("https://mega.nz/file/Otl1GZAA#0GchG0dmbwLCN3-tZJqkpzKTtWOL8kdVRCG71iwcnRo","_blank");
})
