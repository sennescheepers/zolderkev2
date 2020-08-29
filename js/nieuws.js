function loadNews() {
    let container = document.getElementById('news-container');
    for(let i = 0; i < news.length; i++) {
        let element = news[i];
        let article = document.createElement("article");
        article.className = "article"
        let image = document.createElement("img");
        image.src = element.image;
        article.appendChild(image);
        let title = document.createElement("span");
        title.className = "title";
        title.innerHTML = element.title;
        article.appendChild(title);
        let date = document.createElement("span");
        date.className = "date";
        date.innerHTML = element.date;
        article.appendChild(date);
        let text = document.createElement("p");
        text.className = "text";
        text.innerHTML = element.article;
        article.appendChild(text);
        let button = document.createElement("button");
        button.className = "read-more-button";
        button.innerHTML = "Lees meer";
        button.addEventListener('click', () => {
            openArticle(i);
        });
        article.appendChild(button);
        container.appendChild(article);
    };
}

function openArticle(index) {
    let modal = document.createElement("div");
    modal.id = "modal";
    let modalBox = document.createElement("article");
    modalBox.id="modal-box";
    let closeBtn = document.createElement("i");
    closeBtn.className = "fa fa-times";
    closeBtn.addEventListener('click', () => {
        document.getElementsByTagName('body')[0].removeChild(document.getElementById('modal'));
    });
    modalBox.appendChild(closeBtn);
    let title = document.createElement('h1');
    title.innerHTML = news[index].title;
    modalBox.appendChild(title);
    let date = document.createElement('span');
    date.className = "date";
    date.innerHTML = news[index].date;
    modalBox.appendChild(date);
    let text = document.createElement('p');
    text.innerHTML = news[index].article;
    modalBox.appendChild(text);

    modal.appendChild(modalBox);
    document.getElementsByTagName('body')[0].appendChild(modal);
}

const news = [
    {
        title: "Zolderke momenteel gesloten wegens COVID-19",
        article: "Wegens de huidige omstandigheden zijn we genoodzaakt om de lessen voor onbepaalde tijd te annuleren.",
        date: "25/08/2020",
        image: "assets/img/corona.jpg"
    }
];

window.addEventListener('load', loadNews);