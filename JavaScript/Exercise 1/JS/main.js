// ----- 1 ----- //
const myP1 = document.createElement("p");
myP1.textContent = "Hello World";

const myP2 = document.createElement("p");
myP2.textContent = "Hi Future";

document.getElementById("container").append(myP1, myP2);





// ----- 2 ----- //
const colorButton = document.getElementsByTagName("button")[0];
colorButton.addEventListener("click", e => {document.body.classList.toggle("bg-red")});





// ----- 3 ----- //

function imgSelection (e) {
    console.log(e);
    if (e.target.attributes.id.nodeValue === "minion") {
        document.getElementsByTagName("img")[0].attributes[0].nodeValue = "img/minion.jpg";
    } else if (e.target.attributes.id.nodeValue === "spiderman") {
        document.getElementsByTagName("img")[0].attributes[0].nodeValue = "img/spiderman.jpg";
    } else if (e.target.attributes.id.nodeValue === "stich") {
        document.getElementsByTagName("img")[0].attributes[0].nodeValue = "img/stich.jpg";
    }
};

document.querySelector("#minion").addEventListener("click", imgSelection);
document.querySelector("#spiderman").addEventListener("click", imgSelection);
document.querySelector("#stich").addEventListener("click", imgSelection);

// - 3 v2 - //

const listItems = document.getElementsByTagName("li");
const image = document.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);





// ----- 4 ----- //
let input = document.getElementById("input");
let buttonEx4 = document.getElementsByTagName("button")[1];

let addText = () => {
    document.getElementById("paraghraph").textContent = input.value;
    input.value = "";
};

buttonEx4.addEventListener("click", addText);

// - 4.2 - //
let secondInput = document.getElementById("secondInput");

let writeText = () => {
    document.getElementById("paraghraph").textContent = secondInput.value;
};

secondInput.addEventListener("input", writeText);




// ----- 5 ----- //
let textArea5 = document.getElementById("textAreaFive");

let addTextFive = (e) => {
    if (e.target.textLength < 15) {
        e.target.style.color = "red";
    } else {
        e.target.style.color = "green";
    }

    // e.target.style.color = e.target.textLength < 15 ? "red" : "green";
};

textArea5.addEventListener("input", addTextFive);





// ----- 6 ----- //
let input6 = document.getElementsByTagName("input")[2];
let button6 = document.getElementsByTagName("button")[2];

let checkEven = () => {
    if ((input6.value % 2) === 0) {
        input6.style.border = "";
    } else {
        input6.style.border = "2px solid red";
    };
};

button6.addEventListener("click", checkEven);





// ----- 7 ----- //
let ulSeven = document.getElementById("ulSeven");

for (let i = 1; i <= 10; i++) {
    let liSeven = document.createElement("li");
    liSeven.textContent = "Elemento " + i ;
    ulSeven.appendChild(liSeven);
};





// ----- 8 ----- //
let link8 = document.getElementsByTagName("a")[0];
let button8 = document.getElementsByTagName("button")[3];

button8.addEventListener("click", () => {link8.target = "_blank"; link8.textContent = "Nueva Pestaña";});





// ----- 9 ----- //
let paraghraph9 = document.getElementsByTagName("p")[3];
let colorSelection = document.getElementsByTagName("select")[0];

colorSelection.addEventListener("change", e => {
    paraghraph9.style.backgroundColor = e.target.value; //"Select" adopta el "value" de la opcion (ver log).
});





// ----- 10 ----- //
let button10 = document.getElementsByTagName("button")[4];
let evenNumbers = document.getElementById("evenNumbers");
let oddNumbers = document.getElementById("oddNumbers");
let totalNumbers = document.getElementById("totalNumbers");
let randomNumbers = document.getElementById("randomNum");

let randomNumber = () => {
    randomNum = Math.floor(Math.random() * 100);
    
    randomNumbers.textContent = randomNum;
    totalNumbers.textContent++; // totalNumbers.textContent = Number(totalNumbers.textContent) + 1
    randomNum % 2 === 0 ? evenNumbers.textContent++ : oddNumbers.textContent++;
};

button10.onclick = randomNumber;





// ----- 11 ----- //
let input11 = document.getElementsByTagName("input")[3];
let button11 = document.getElementsByTagName("button")[5];
let ulList = document.getElementsByTagName("ul")[2];
let numberList = [1, 15, 20, 35, 70];

function fillList () { // Funcion que rellena la lista con los numeros del array.
    ulList.innerHTML = "";// Vacia la lista.
    for (let i = 0; i < numberList.length; i++) {
        let newLi = document.createElement("li");
        newLi.textContent = `${numberList[i]}`;
        ulList.appendChild(newLi);
    };
};

function addToList () { // Funcion que añade el numero del input.
    let numberToJoin = Number(input11.value);
    if (numberList.indexOf(numberToJoin) === -1) {
        numberList.unshift(numberToJoin); // Introduce el nuevo numero al principio del array.
        fillList(); // Vacía y rellena la lista con los numeros del array.
    } else {
        window.alert("El numero ya existe");
    }
};

fillList();
button11.onclick = addToList;





// ----- 12 ----- //
let button12 = document.getElementsByTagName("button")[6];

button12.addEventListener("click", () => button12.classList.toggle("btn12"));

// - 12.1 - Refactorizar //
const buttons = document.getElementsByClassName("btn");
let arrayButtons = Array.from(buttons);
console.log(arrayButtons);

arrayButtons.forEach(element => {
    element.addEventListener("click", (e) => {e.target.style.backgroundColor = "red";});
});