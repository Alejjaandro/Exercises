// ---------- Ejercicio 4 ------------ //

function Book(id, titulo, autor, ventas, precio) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.ventas = ventas;
    this.precio = precio;
    this.ordenAscendente = true;
};

let books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 15),
    new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(5, "Eloquent JavaScript, Second Edition", "Marijn Haverbeke", 12312, 25),
    new Book(6, "Learning JavaScript Design Patterns", "Addy Osmani", 12319, 17),
    new Book(7, "Speaking JavaScript", "Axel Rauschmayer", 12319, 11),
    new Book(8, "Programming JavaScript Applications", "Eric Elliott", 12319, 10),
    new Book(9, "Understanding ECMAScript 6", "Nicholas C. Zakas", 12319, 7),
    new Book(10, "You Don't Know JS", "Kyle Simpson", 12319, 9),
    new Book(11, "Git Pocket Guide", "Richard E. Silverman", 12319, 29),
    new Book(12, "Designing Evolvable Web APIs with ASP.NET", "Glenn Block, et al.", 12319, 19),
];

let tableBody = document.getElementById("tableBody");

const updateTable = function (array) {
    // Vaciamos tabla:
    tableBody.innerHTML = "";

    // Rellenamos:
    array.forEach((book) => {

        tableBody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.titulo}</td>
            <td>${book.autor}</td>
            <td>${book.ventas}</td>
            <td>${book.precio}</td>
            <td>
                <button class="btn btn-danger" id="${book.id}">Eliminar</button>
            </td>
        </tr>`;
    
    });
}

updateTable(books);

// ---------- Ejercicio 5 ------------ //

// --- 1 --- //
let searchInput = document.getElementById("searchInput");
let tfoot = document. getElementById("tfoot");

searchInput.value = "";

searchInput.addEventListener("input", (e) => {
    // Creamos una nueva variable con el valor del array de libros filtrado.
    let filteredBooks = books.filter(book => book.titulo.includes(e.target.value)); // || book.author.includes(e.target.value).
    
    // Parte del ejercicio 3 para que se actualice el precio total al filtrar.
    totalPrecios = filteredBooks.reduce((total, book) => total + book.precio, 0);
    tfoot.textContent = "Suma total de los precios: " + totalPrecios;

    updateTable(filteredBooks);
});

// --- 2 --- //
let priceColumn = document.getElementById("priceColumn");

priceColumn.style.cursor = "pointer";

priceColumn.addEventListener("click", () => {
    // Al hacer click la variable de "ordenAscendente" de books se sobreescribe invirtiendose:
    books.ordenAscendente = !books.ordenAscendente;

    // Hacemos "sort" a books de manera que si "ordenAscendente" es true lo ordena de forma ascendente y si no de forma descendente.
    books.sort((a, b) => books.ordenAscendente ? (a.precio - b.precio) : (b.precio - a.precio));
    updateTable(books); 
});

// --- 3 --- //
totalPrecios = books.reduce((total, book) => total + book.precio, 0);
tfoot.textContent = "Suma total de los precios: " + totalPrecios;