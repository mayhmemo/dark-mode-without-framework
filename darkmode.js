function onloads() {
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    var darkmode = localStorage.getItem("Darkmode");
    const html = document.getElementById("html");

    localStorage.setItem("Vision", 1);
    var vision = localStorage.getItem("Vision");
    console.log("Vision onloads: " + vision);
    console.log("Darkmode onloads: " + darkmode);
    
    if (darkmode == "true") {
        themeToggleDarkIcon.classList.add('hidden');
        themeToggleLightIcon.classList.remove('hidden');
        html.classList.add("dark");
        localStorage.setItem("Darkmode", true);
        vision = parseInt(vision);
        vision = vision + 1;
        localStorage.setItem("Vision", vision);
    } else if (darkmode == "false" || darkmode == null) {
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
        html.classList.remove("dark");
        localStorage.setItem("Darkmode", false);
    }
}

function variable() {
    var vision = localStorage.getItem("Vision");

    console.log("Vision variable: " + vision);
    
    if (vision == "1") {
        localStorage.setItem("Darkmode", false);
    }
}

function darkbtn() {
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    themeToggleLightIcon.classList.remove('hidden');
}

function dark() {
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    var darkmode = localStorage.getItem("Darkmode");
    const html = document.getElementById("html");

    var vision = localStorage.getItem("Vision");
    vision = parseInt(vision);
    vision = vision + 1;
    localStorage.setItem("Vision", vision);
    
    if (darkmode == "true") {
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
        html.classList.remove("dark");
        localStorage.setItem("Darkmode", false);
    } else if (darkmode == "false") {
        themeToggleDarkIcon.classList.add('hidden');
        themeToggleLightIcon.classList.remove('hidden');
        html.classList.add("dark");
        localStorage.setItem("Darkmode", true);
    }
}