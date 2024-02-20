const API_key=`bd31e2922bc347eca4213e8067358fef`
let news = []

const getLatesNews = async () =>{
    const url = new URL(`https://newsallnewsallv.netlify.app/top-headlines?`);
    
    //const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_key}`);
    const response = await fetch(url);
    const data = await response.json()
    news = data.articles;
    console.log("기사모음",news);
}
getLatesNews();

