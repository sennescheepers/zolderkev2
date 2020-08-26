const handleLoad = () => {
    document.getElementById("open-close").addEventListener('click', openClose);
    window.addEventListener('scroll', handleScroll);
    document.getElementById("lees-meer").addEventListener('click', () => {
        window.location.href = "overons.html"
    });
}

function handleScroll(e) {
    if (window.scrollY > 0 && window.innerWidth > 900) {
        document.getElementById('nav-bar').className = "background";
    } else {
        document.getElementById('nav-bar').className = "";
    }
}

const openClose = () => {
    let button = document.getElementById("open-close");
    let nav = document.getElementById("nav-bar");
    let open = button.className == "fa fa-bars";
    if (open) {
        button.className = "fa fa-times";
        nav.className = "active";
    } else {
        button.className = "fa fa-bars";
        nav.className = "";
    }
};

window.addEventListener('load', handleLoad);