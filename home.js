//6c2a558df21347598813809a6ccb8e61
    //https://newsapi.org/v2/top-headlines?country=us&apiKey=6c2a558df21347598813809a6ccb8e61

    async function showNews() {
        let res = await fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=6c2a558df21347598813809a6ccb8e61');
        let data = await res.json();
        // console.log(data);
        appendNews(data.articles);
    }
    showNews();

    function appendNews(a) {

        a.forEach((n) => {

            let news = document.getElementById('news');

            let div = document.createElement('div');
            let heading = document.createElement('p');
            let writer = document.createElement('p');
            let img = document.createElement('img');
            let date = document.createElement('p');
            let des = document.createElement('p');

            heading.textContent = n.title.name;
            writer.textContent = n.author;
            date.textContent = n.publishedAt;
            des.textContent = n.description;
            img.src = n.urlToImage;

            img.onclick = () => {
                detail(n);
            }

            div.append(img, heading, writer, des, date);

            news.append(div);

        });


    }

    function detail(n) {
        if (localStorage.getItem("news") == null) {
            localStorage.setItem("news", JSON.stringify([]));
        } else {
            let news = JSON.parse(localStorage.getItem("news"));
            news=[];
            news.push(n);

            localStorage.setItem("news", JSON.stringify(news));

            window.location.href = "news.html";

        }


    }