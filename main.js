const API_key = `bd31e2922bc347eca4213e8067358fef`;
let newsList = [];

const getLatesNews = async () => {
  const url = new URL(`https://newsallnewsallv.netlify.app/top-headlines?country=kr `);

  //const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_key}`);
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  render();
  console.log("기사모음", newsList);
};
const render = () => {
  const newHTML = newsList
    .map(
      (news) => ` <div class="row news">
    <div class="col-lg-4">
    <img class ="news-img-size" src=${
        news.urlToImage ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
}/>
    </div>
    <div class="col-lg-8">
    <h2>
      ${news.description}
    </h2>
    <p>
      ${news.title};
    </p>
    <div>
        ${news.source.name} *  ${news.publishedAt} *${news.rights || "no source"} * ${moment(
            news.published_date
         ).fromNow()}
    </div>
    </div>
</div>`
    )
    .join("");

  document.getElementById("news-board").innerHTML = newHTML;
};

getLatesNews();

const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
};

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};

const openSearchBox = () => {
  let inputArea = document.getElementById("input-area");
  if (inputArea.style.display === "inline") {
    inputArea.style.display = "none";
  } else {
    inputArea.style.display = "inline";
  }
};
