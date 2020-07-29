const handleLoad = () => {
    document.getElementById("open-close").addEventListener('click', openClose);
    //window.addEventListener('scroll', changePage, false);
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

let lastScrollTop = 0;

const changePage = (e) => {
    let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
        window.scrollTo({
            top: document.getElementById('team').offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    } else {
        console.log("up");
    }
    lastScrollTop = st <= 0 ? 0 : st;
}

window.addEventListener('load', handleLoad);