// ----- 1 ----- //
// Generar plantilla array:

let empleados = [];
for (i = 0; i < 100; i++) {
    let nuevoEmpleado = {
        cargo: `Empleado ${i}`,
        rendimieno: Number(Math.random().toFixed(2)),
        salario: Math.floor(Math.random() * (4000 - 1250) + 1250) 
    }
    empleados.push(nuevoEmpleado);
};

// ----- 2 ----- Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback //

console.log(empleados.sort(function(empleado1, empleado2) {return empleado1.rendimiento - empleado2.rendimiento}));

// ----- 3 ----- Ordenar el array por salario e imprimirlo. Usar una función de flecha. //

console.log(empleados.sort((empleado1, empleado2) => {return empleado1.salario - empleado2.salario}));

// ----- 4 ----- Ordenar el array por el número de empleado de forma decreciente. 
// El número de empleado sólo estará dentro del string Cargo. Usar una función nombrada como callback.

function empleadosDec (empleado1, empleado2) {
    return empleado2.cargo.slice(9) - empleado1.cargo.slice(9);

}
console.log(empleados.sort(empleadosDec));

// ----- 5 ----- Usando filter: imprimir el cargo y salario de los que cobren más de 2500€. //

empleados
.filter(empleado => empleado.salario > 2500)
.forEach(empleado => console.log(empleado.cargo, empleado.salario));
/* A JS le da igual como se escriba el codigo, lo lee todo seguido. */

// ----- 6 ----- Usando map: subir el sueldo un 25% a los que cobren menos de 1500€ y volver a hacer el punto 5. //

console.log(empleados.map(empleado => {
    if (empleado.salario < 1500) {
        empleado.salario = empleado.salario * 1.25
        return empleado;
    }
     
    return empleado;
}));

// ----- 7 ----- Usando reduce: Obtener el coste total de todos los sueldos para la empresa, 
// teniendo en cuenta que a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos. //

const totalCost = empleados.reduce((sum, empleado) => sum + empleado.salario * 1.15, 0);

console.log(totalCost);

// ----- 8  ----- Usar el método o métodos (reduce / map / filter / sort) que determinemos oportuno e 
//imprimir en cada apartado:

// • Despedir a los que tengan un rendimiento menor a 0.3:
empleados = empleados.filter(empleado => empleado.rendimieno >= 0.3); // Cambiamos el valor del array "empleados" a aquellos que pasan el filtro.

console.log(empleados); // Nuevo array con los >= 0.3.

// • Calcular el sueldo medio de la empresa:

const avgeSalary = empleados.reduce((sum, empleado) => {
    totalSalary = sum + empleado.salario;
    return totalSalary;
}, 0);

console.log(avgeSalary, avgeSalary / empleados.length);

// • Subir el sueldo de los que tengan un rendimiento superior a 0.7:

empleados.map(empleado => {
    if (empleado.rendimieno > 0.7) {
        empleado.salario = empleado.salario * 1.25;
        console.log("Subido el sueldo de: ", empleado.cargo, " a ", empleado.salario);
    }
});
