// ----- Constructor de Objetos ----- //

function Usuario(nombre, primerApellido, segundoApellido, email, edad, ciudad, numeroArticulos) {
    this.nombre = nombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.email = email;
    this.edad = edad;
    this.ciudad = ciudad;
    this.numeroArticulos = numeroArticulos;
    this.increaseProduct = function () {this.numeroArticulos++};
    this.emptyProduct = function () {this.numeroArticulos = 0};
};

const users = [
    new Usuario("Juan", "Jimenez", "Santos", "juanjimenez@gmail.com", 24, "Madrid", 0),
    new Usuario("Miguel", "Perez", "Guzman", "miguelperez@gmail.com", 36, "Murcia", 0),
    new Usuario ("Antonio", "Lopez", "Sanchez", "antoniolopez@gmail.com", 57, "Barcelona", 0),  
];

// ----- DOM Access ---- //

let selector = document.getElementById("usersSelection");
let increase = document.getElementsByTagName("button")[0];
let decrease = document.getElementsByTagName("button")[1];
let userList = document.getElementById("userList");

users.forEach(user => {
    const newOption = document.createElement("option");
    newOption.textContent = user.nombre;
    selector.appendChild(newOption);
});

// ----- Rellenar con la info de un usuario ----- //

const fillList = function (user) {

    userList.innerHTML = "";

    for (const propertyName in user) {

        console.log(propertyName);
        const value = user[propertyName];
        console.log(value);
        
        if (typeof value !== "function"){
            const newLi = document.createElement("li");
            newLi.classList.add("list-group-item");
            newLi.innerHTML = `<b>${propertyName}:</b> ${value}`;
            userList.appendChild(newLi);
        }
    };
};

// ----- Botones ----- //

function processProduct (e) {
    const selectedUser = users.find(user => user.nombre === selector.value);

    e.target.id === "increase" ? selectedUser.increaseProduct() : selectedUser.emptyProduct();
 
    fillList(selectedUser);// Recharge the list.
};

// ----- Listeners ----- //

selector.addEventListener("change", e => {
    const selectedUser = users.find(user => user.nombre === selector.value);//find() Check all the elements and returns the value of the first element in the array where predicate is true.
    fillList(selectedUser);
});

increase.addEventListener("click", processProduct);
decrease.addEventListener("click", processProduct);