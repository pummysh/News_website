async function search(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;

    let res = await fetch(`http://newsapi.org/v2/everything?q=${name}&from=2021-10-18&sortBy=popularity&apiKey=6c2a558df21347598813809a6ccb8e61`);
    let data = await res.json();
    append(data.articles);
}
let news = document.getElementById('news');
const append = (a) => {
    news.innerHTML=null;
    a.forEach(({ author, publishedAt, description, source: title, urlToImage }) => {


        let div = document.createElement('div');
        let heading = document.createElement('p');
        let writer = document.createElement('p');
        let img = document.createElement('img');
        let date = document.createElement('p');
        let des = document.createElement('p');

        heading.textContent = title.name;
        writer.textContent = author;
        date.textContent = publishedAt;
        des.textContent = description;
        img.src = urlToImage;

        div.append(img, heading, writer, des, date);

        news.append(div);

    });
}