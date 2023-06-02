// ----- 2 ----- //

function Book(id, titulo, autor, ventas, precio) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.ventas = ventas;
    this.precio = precio;
};

// ----- 3 ----- //

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

// ----- 4 ----- //

//Crear tabla con datos.

let tableBody = document.getElementById("tableBody");

const updateTable = function () {
    // Vaciamos tabla:
    tableBody.innerHTML = "";

    // Rellenamos:
    books.forEach((book) => {

        // let bookDataTds = "";
        // for (let property in book) {
        //     bookDataTds += `<td>${book[property]}</td>`
        // } // para cada propiedad de book crea `<td>${book[property]}</td>`.

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

// ----- 5 ----- //
//Boton para eliminar.

tableBody.addEventListener("click", e => {
    
    console.log(e.target.tagName);
    // El evento esta en toda la tabla pero solo se dispara si el tag name es "BUTTON"

    if (e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        // Filtro todos los libros cuyo id es distinto y sobreescribo el array, dejando fuera el que coincide.
        updateTable();
    }
});

updateTable();

// ----- 6 ----- //

let inputTitle = document.getElementById("inputTitle");
let inputAuthor = document.getElementById("inputAuthor");
let inputSales = document.getElementById("inputSales");
let inputPrice = document.getElementById("inputPrice");
let buttonSave = document.getElementById("buttonSave");

//Funcion para vaciar.
function emptyInput () {
    inputTitle.value = "";
    inputAuthor.value = "";
    inputSales.value = "";
    inputPrice.value = "";
}

emptyInput();

//Evento para añadir.
buttonSave.addEventListener("click", (e) => {
    e.preventDefault();// Evita que se recargue la pág.

    books.push(new Book(books.length+1, inputTitle.value, inputAuthor.value, inputSales.value, inputPrice.value));
    updateTable();
    emptyInput();
});