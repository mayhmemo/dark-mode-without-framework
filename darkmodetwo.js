function onloads() {
    var darkmode = localStorage.getItem("Darkmode");
    const html = document.getElementById("html");
    localStorage.setItem("Vision", 1);
    var vision = localStorage.getItem("Vision");
    if (darkmode == "true") {
        html.classList.add("dark");
        localStorage.setItem("Darkmode", true);
        vision = parseInt(vision);
        vision = vision + 1;
        localStorage.setItem("Vision", vision);
    } else if (darkmode == "false" || darkmode == null) {
        html.classList.remove("dark");
        localStorage.setItem("Darkmode", false);
    }
}

function variable() {
    var vision = localStorage.getItem("Vision");
    if (vision == "1") {
        localStorage.setItem("Darkmode", false);
    }
}

function dark() {
    var darkmode = localStorage.getItem("Darkmode");
    const html = document.getElementById("html");
    var vision = localStorage.getItem("Vision");
    vision = parseInt(vision);
    vision = vision + 1;
    localStorage.setItem("Vision", vision);

    if (darkmode == "true") {
        html.classList.remove("dark");
        localStorage.setItem("Darkmode", false);
    } else if (darkmode == "false") {
        html.classList.add("dark");
        localStorage.setItem("Darkmode", true);
    }
}