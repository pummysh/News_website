let a = JSON.parse(localStorage.getItem("news"));

a.forEach(({author,publishedAt,description,source:title,urlToImage}) => {
    let news = document.getElementById('news');

    let div = document.createElement('div');
    let heading = document.createElement('p');
    let writer = document.createElement('p');
    let img = document.createElement('img');
    let date = document.createElement('p');
    let des = document.createElement('p');

    heading.textContent =title.name;
    writer.textContent =author;
    date.textContent =publishedAt;
    des.textContent =description;
    img.src =urlToImage;

    img.onclick = () => {
        detail(n);
    }

    div.append(img, heading, writer, des, date);

    news.append(div);

});