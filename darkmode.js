document.addEventListener("DOMContentLoaded", (event) => {
    const html = document.documentElement;
    
    const themeToogle = document.querySelector('#themeToogle');
    const toDarkIcon = document.querySelector('#toDarkIcon');
    const toLightIcon = document.querySelector('#toLightIcon');

    verifyTheme(toDarkIcon, toLightIcon, html);
    
    themeToogle.addEventListener('click', function () {
        const theme = localStorage.getItem('theme')
        changeTheme(theme, toDarkIcon, toLightIcon, html)
    });
});

function changeTheme(theme, toDarkIcon, toLightIcon){
    if (theme === 'light') {
        toogleToDark(toDarkIcon, toLightIcon, html);
    } else {
        toogleToLight(toDarkIcon, toLightIcon, html);
    }
}

function verifyTheme(toDarkIcon, toLightIcon, html){
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
        toogleToLight(toDarkIcon, toLightIcon, html);
    } else if (theme === 'dark'){
        toogleToDark(toDarkIcon, toLightIcon, html);
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function toogleToDark(toDarkIcon, toLightIcon, html){
    toDarkIcon.classList.add('hidden');
    toLightIcon.classList.remove('hidden');

    localStorage.setItem('theme', 'dark');
    html.classList.add("dark");
}

function toogleToLight(toDarkIcon, toLightIcon, html){
    toLightIcon.classList.add('hidden');
    toDarkIcon.classList.remove('hidden');

    localStorage.setItem('theme', 'light');
    html.classList.remove("dark");
}
