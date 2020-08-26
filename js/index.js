const handleLoad = () => {
    document.getElementById("open-close").addEventListener('click', openClose);
    document.getElementById("lees-meer").addEventListener('click', () => {
        window.location.href = "overons.html"
    });
};

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