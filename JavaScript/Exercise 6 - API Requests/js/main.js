/* ----- Ejercicio 1: ----- */

// Hacer una peticion a la API de "https://jsonplaceholder.typicode.com/comments", y 
// Crear una lista con los nombres de los 20 primeros elementos del array.

// const URLcomments = "https://jsonplaceholder.typicode.com/comments";

// let userList = document.getElementById("userList");

// const createList = array => array.forEach(element => {
//     let newLi = document.createElement("li");
//     newLi.textContent = element.name;
//     userList.appendChild(newLi);
// })

// fetch(URLcomments).then(response => response.json())
// .then(data => createList(data.slice(0, 20)));

/* ----- Ejercicio 2: ----- */
// Hacer una peticion a la API de "https://jsonplaceholder.typicode.com/posts", y
// crear un h1 para cada titulo y un p para cada body. 10 primeros.

// const URLposts = "https://jsonplaceholder.typicode.com/posts";

// let posts = document.getElementsByClassName("posts")[0];

// fetch(URLposts).then(response => response.json())
// .then(data => {
//     const dataArray = Array.from(data);
//     console.log(dataArray);
// });

// const createPost = array => array.forEach(element => {
//     let newH1 = document.createElement("h1");
//     newH1.textContent = element.title;
//     posts.appendChild(newH1);
    
//     let newP = document.createElement("p");
//     newP.textContent = element.body;
//     posts.appendChild(newP);
// })












// ---------- Ejercicio 6.1 ---------- //

//Constantes
const itemsPerPage = 20;
const URLposts = "https://jsonplaceholder.typicode.com/posts";

//Variables 
let posts = [];
let currentPage = 1;

//Selectores
const postDiv = document.getElementById("content");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

//Funciones

function fillDiv () {
  const newPagePost = paginate(posts, itemsPerPage, currentPage)
  postDiv.innerHTML = "";
  newPagePost.forEach(post => postDiv.innerHTML += `<h2>${post.id} ${post.title}</h2><p>${post.body}</p>`);
}

function changePage (event) {
  if (event.target.className === "previousPage") {
    currentPage--;
  } else {
    currentPage++;
  }
  fillDiv();
}

function paginate(array, page_size, page_number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
} //https://stackoverflow.com/questions/42761068/paginate-javascript-array.

fetch(URLposts)
.then(response => response.json())
.then(data => {
  posts = [...data];
  fillDiv();
});












// ---------- Ejercicio 6.2 ---------- //

// Constantes
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

// Selectores
const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
const usersList = document.querySelectorAll("#usersList")[0];

document.querySelector("#loginButton").addEventListener("click", login);

// Funciones
function login(event) {
  event.preventDefault();// Evita recargar pag.

  const userInfo = {
    email: emailInput.value,
    password: passwordInput.value
  }

  const config = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(userInfo)
  }

  fetch(LOGIN_URL, config)
  .then(response => response.json())
  .then(data => data.error ? alert(data.error) : fetchAllUsersV2(USERS_URL))
}

/* 
async - await version: de esta manera podemos hacer que la ejecucion se detenga hasta que se reciban los datos, 
cosa que con .then no pasa lo que puede dar errores. 
*/

async function fetchAllUsers() {

  let response = await fetch(USERS_URL);
  let data = await response.json(); // para saber cuantas pag. hay (data.total_pages).

  let users = [];
  for (let page = 1; page <= data.total_pages; page++) { // fetch para cada pagina.
    response = await fetch(`${USERS_URL}?page=${page}`); // concatenamos USERS_URL + "?page="
    let newData = await response.json();
    users = users.concat(newData.data)// Creamos un array concatenando los datos
  }

  usersList.innerHTML = "";
  users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
}

/*
.then version
*/
let users = [];

function fetchAllUsersV2 (URL) {
  fetch(URL)
  .then(response => response.json())
  .then(newData => {
    users = users.concat(newData.data);

    if(newData.page < newData.total_pages) {
      fetchAllUsersV2(`${USERS_URL}?page=${newData.page+1}`);// Vuelve a llamar a la funcion que hace fetch con la pag. siguiente hasta que no se cumpla el "if". 
    } else {
      usersList.innerHTML = "";
      users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
    }
  });

}