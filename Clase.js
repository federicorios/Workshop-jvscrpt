/*Array*/

// var dias = null;
// var dia =null;
// dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
// var cuantasVecesVoy = 3;

// for (var x = 0; x < dias.length; x++) {
//     dia = dias[x];
//     if (dia === 'viernes' || dia === 'martes' || dia === 'lunes') {
//         console.log('el dia ' + dias[x] + ' Diego va a CrossFit');
//         cuantasVecesVoy--;
//         if (!cuantasVecesVoy) {
//             break;
//         }
//     } else {
//         console.log('No voy el dia', dia);
//     }
// }


// var students = ['Diego','leo','Marcos'];

// console.log(students,students.length);

// //AGregar un elemento a Array
// students.push('alan');
// console.log(students,students.length);


// //pop quita el ultimo elemento por defecto.
// students.pop();
// console.log(students,students.length);

// //join recibe un valor y lo pone entre cada posicion lo vuelve string

// var students = students.join(' y ');
// console.log(students,students.length);

// //split recibe un valor y lo divide volviendolo array
// var students = students.split(' y ');
// console.log(students,students.length);

// //Ordena por abecedario.
// students = students.sort();
// console.log(students,students.length);

// //Ordena en reversa
// students = students.reverse();
// console.log(students,students.length);


// //Traer la posicion del string.
// var position = students.indexOf('Marcos');
// console.log(position,students[position]);

// //Traer la posicion del string empezando desde el final.
// var position = students.lastIndexOf('Marcos');
// console.log(position,students[position]);


// //se pone en una posicion y borra los registros a partir de ahi.
// //En este caso corta a Leo
// console.log(students.splice(0,1));


// //concat junta arrays
// students = students.concat();
// console.log(students);


// 	<script type="text/javascript"> 
// 		var elementosP = document.getElementsByTagName('p');
// 		console.log(elementosP[0].innerHTML);


// 		var elementosPorTagName = document.getElementsByTagName('p');
//         var elementosPorName = document.getElementsByName('este-es-el-segundo');
//         var elementoPorId = document.getElementById('este-es-el-segundo');
//         var elementosPorClass = document.getElementsByClassName('esta-es-mi-clase');
	

// 	</script>


	//[1,3,4,6,123,233,65,55,2,1,4,123,123];
//Sumar todos los valores
//Ordenarlo

//Encontrar el max y min valor
//;

//Hacer una funcion que mediante prompt dias de las semana y 
//luego mostrarlo

//Hacer una funcion que mediante prompt encuentre el dia ingresado y 
//lo elimine


//primer ejercicio
// var array1 = [1,8,3,4,5];

// function primerFuncion(array){
// 	var suma = null;
// 	for (var i = 0; i < array.length; i++){
// 		suma =+ array[i];
// 	}
//  return suma;
// }

// var resultado = primerFuncion(array1);
// console.log(resultado);


// //Segundo ejercicio
// var array2 = [123,1000,65,425];

// function segundaFuncion(array){
// 	orden = null;
// 	resultado = null;
// 	orden = array2.sort(function(numero1, numero2){
//         return numero1 > numero2 ? 1:-1;
//      })
//   
	
// 	return resultado = 'el numero minimo es '+ orden[0] + '  el numero  maximo es '+ orden.reverse()[0];

// }

// var resultado = segundaFuncion(array2);
// console.log(resultado);


// //tercer ejercicio

 
 
 
//  function tecerFuncion(array){

//  		var diastotales = [];

//  		do{
//  			diastotales.push(array);
//  		}

//  		while(array = prompt("Ingrese un dia de la semana" && array.length<7)); 

//    return diastotales;
//  }

//   
// var dia = prompt("Ingrese un dia de la semana");
// var resultado = tecerFuncion(dia);
// console.log(resultado);


// //Cuarto ejercicio

// function eliminarDia(dia) {
//  resultado.splice(resultado.indexOf(dia), 1);
// }

// eliminarDia(prompt('Eliminar dia:'));

// //String operaciones simil array
// "hola mundo".split('').join(' que onda ').concat("que basico");

// //text-transform, text-decoration

// "Lorem ipsume".toLowerCase() === "nahuel".toLowerCase();

// var apellido = "muniz";
// apellido.toLowerCase().replace('n', 'ñ');

// //valor 1 indice, valor 2 cuantas posiciones;
// '123456789'.substr(3, 4);
// //desde, hasta;
// '123456789'.substring('123456789'.lastIndexOf('4'));





// "hola mundo"
// "hola mun..."
// "hola mundo ..."

// cortar('lorem asdalksndlaknsd', 100);





// /funcion que reciba string como paramentro y lo inserte en una cadena de texto 
// //tantas veces como lo indique otro paramentro
// cortar('hola', 4, 3);

			
// function MostrarDias(dias){

// 					// var elementoH1 = document.createElement('h1');
// 					// elementoH1.innerText = 'Dias De la Semana';


// 					// document.body.appendChild(elementoH1);

// 					// var hijoH1 =  document.createElement('ul');
// 					// hijoH1.innerHTML = '<li>Lunes</li><li>MArtes</li><li>Miercoles</li><li>Jueves</li><li>Viernes</li><li class="finde">Sabado</li><li class="finde">Domingo</li>';

// 					// document.querySelector('body').appendChild(hijoH1);

// 					// if (document.getElementsByClassName('finde')) {

// 					// 	document.getElementsByClassName('finde').bold();

// 					// };


					
// 					var elementoH1 = document.createElement('h1');
					
// 					elementoH1.innerText = 'Dias De la Semana';
// 					document.body.appendChild(elementoH1);
// 					var lista =  document.createElement('ul');


// // declaro una variable i
// // aumento su valor 1 vez por iteracion	
// // mientras i sea menor a longitud de dias 		


// // para cada indice en dias
// // for(var i in dias) {
// // 	dias[i]

	



// 		for (var i =0; i < dias.length; i++) {
			
			
// 			var day = document.createElement('li');

			

// 			if (dias[i].toLowerCase() =='sabado' || dias[i].toLowerCase() =='domingo') {

// 				day.innerHTML = dias[i].bold().toLowerCase();

// 			}else {
// 				day.innerText = dias[i].toLowerCase();
// 			};
			
			
// 			lista.appendChild(day);

// 		};
// 		document.body.appendChild(lista);
		
// }


//objetos
//semantica de un objeto

var auto = {
	patente: 'aaa 111 asd',
	color: '#fff',
	modelo: 'k',
	marca:'ford',
	mover: function(){
		console.log('me estoy moviendo..');
	}

};

var numeroDePatente = 123;
var colorDeAuto = '#fff';

var auto2 = {
	patente: numeroDePatente,
	color: colorDeAuto,

}

var auto3 = {
	color: auto.color
}

//para borrar propiedades es con la palabra DELETE

//Se pueden agregar propiedades
auto3.patente = '123'
console.log(auto3);

//Se puede agregar objetos dentro de objetos 

auto3.location = {
	country: 'ar',
	city: 'ba'
}

//recorrer objeto 
for (in)


//crear un formulario de peliculas con 3 prop titulo,descripcion, cover/img