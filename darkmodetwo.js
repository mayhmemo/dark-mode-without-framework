document.addEventListener("DOMContentLoaded", (event) => {
    const html = document.documentElement;
    
    const themeToogle = document.querySelector('#themeToogle');

    verifyTheme(html);
    
    themeToogle.addEventListener('click', function () {
        const theme = localStorage.getItem('theme')
        changeTheme(theme, html)
    });
});

function changeTheme(theme, html){
    if (theme === 'light') {
        toogleToDark(html);
    } else {
        toogleToLight(html);
    }
}

function verifyTheme(html){
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
        toogleToLight(html);
    } else if (theme === 'dark'){
        toogleToDark(html);
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function toogleToDark(html){
    localStorage.setItem('theme', 'dark');
    html.classList.add("dark");
}

function toogleToLight(html){
    localStorage.setItem('theme', 'light');
    html.classList.remove("dark");
}
