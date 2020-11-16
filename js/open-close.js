const handleLoad = () => {
    document.getElementById("open-close").addEventListener('click', openClose);
    window.addEventListener('scroll', handleScroll);
    document.getElementById("lees-meer")?.addEventListener('click', () => {
        window.location.href = "overons.html"
    });
    document.getElementById('verstuurButton')?.addEventListener('click', sendEmail);
}

function sendEmail() {
    let name = document.getElementById('voornaam').value;
    let surname = document.getElementById('achternaam').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('bericht').value;
    let body = `naam: ${name} ${surname}, email: ${email}, bericht: ${message}`;
    let href = `mailto:willy.noben@gmail.com?Subject=zolderke&body=${body}`;
    window.location.href = href;
}

function handleScroll(e) {
    if (document.getElementById('nav-bar').className == "active") return;
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