/*
	Comentario en bloque
	Este es un ejercicio

*/
//numero1 = prompt("Dame el primer numero");
//numero2 = prompt("Dame el numero2");

//Este es el numero 1

//console.log(numero1);

//console.log(numero2);

//console.log(numero1, numero2);

//console.log(parseFloat(numero1) + parseFloat(numero2));

var coches = ["mustang", "jetta", "audi a8"];

console.log(coches[0]);

function recorrerArreglo(arr){
		for(var i = 0; i <=arr.length; i++){
			console.log(arr[i]);
		}
}

recorrerArreglo(coches);

var camionetas = ["Tiguan", "Explorer", "CRX7"];

recorrerArreglo(camionetas);

var coche = {
	nombre: "T20",
	modelo: 2008,
	color: "Gris",
	arrancar: function(){
		console.log("Run run run...");
	}
};

var cochenuevo = [
	{
		nombre: "T20",
		modelo: 2008,
		costo: 150000,
		color: "Gris"
	},
	{
		nombre: "Jetta",
		modelo: 2018,
		costo: 320000,
		color: "Rojo"
	},
	{
		nombre: "Audi R8",
		modelo: 2010,
		costo: 320000,
		color: "Negro"
	}
];

function recorrerArregloNuevo(arr){
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i].nombre + " $" + Intl.NumberFormat("en").format(arr[i].costo));
	}
}

recorrerArregloNuevo(cochenuevo);

function cocheespecial(arr){
	for(var i = 150000; i < arr.length; i++){
		console.log(arr[i].nombre + " $" + Intl.NumberFormat("en").format(arr[i].costo));
	}
}

cocheespecial(cochenuevo);

function precioTotal(coches){
	var total = 0;
	for (var i = 0; i < coches.length; i++) {
		total += coches[i].costo;
	}

	return(total);
}

// DOM DOCUMENT OBJECT MODEL

//SINTAXIS JAVASCRIPT PURO
//document.getElementById("email-inicio").value = precioTotal(cochenuevo);

//SINTAXIS JQUERY
$("#email-inicio").val(precioTotal(cochenuevo));