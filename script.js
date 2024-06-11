const API_LINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bb557994596e935e332923e47ae03b8b&page=1";

// /discover/movie?sort_by=popularity.desc
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bb557994596e935e332923e47ae03b8b

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  " https://api.themoviedb.org/3/search/movie?&api_key=bb557994596e935e332923e47ae03b8b&query=";


const main = document.getElementById("main");
const inputbox = document.getElementById("searchbox");
const searchbtn = document.querySelector(".search-btn");
console.log(main);
console.log(inputbox);

getMovies(API_LINK);

function getMovies(api) {
  fetch(api)
    .then((response) => {
      //   console.log(response.json());
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      data.results.forEach((elm) => {
        // console.log(elem)
        const card = document.createElement("div");
        const imagediv = document.createElement("div");
        const img = document.createElement("img");
        const textdiv = document.createElement("div");
        const title = document.createElement("h2");
        const vote=document.createElement("h4");

        card.setAttribute("class", "card");
        imagediv.setAttribute("class", "image");
        textdiv.setAttribute("class","text");

        title.innerHTML = elm.title;
        img.src = IMG_PATH + elm.poster_path;
         vote.innerHTML=` Vote : ${elm.vote_average}`;

        imagediv.appendChild(img);
        card.appendChild(imagediv);


        textdiv.appendChild(title);
        textdiv.appendChild(vote);
        card.appendChild(textdiv);
        main.appendChild(card);
      });
    });
}

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  main.innerHTML = "";
  const search = inputbox.value;
  console.log(search);

  if (search) {
    console.log(SEARCHAPI + search);
    getMovies(SEARCHAPI + search);
    inputbox.value ="";
  }
});
