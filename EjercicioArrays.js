










// 		var arraypeliculas = [];

// 		function Crear(){
// 		var nombre = document.getElementById('nombre').value.toLowerCase();
// 		var descripcion =  document.getElementById('descripcion').value.toLowerCase();
// 	 	var link = document.getElementById('link').value.toLowerCase();
// 	 	var pelicula = new crearNuevaPeli(nombre,link,descripcion);
// 	 	arraypeliculas.push(pelicula);
// 	 	MostrarPeli(arraypeliculas);

//  	}

//  	 function MostrarPeli(arraypeliculas){

// 				var elementoH1 = document.getElementById('listadepeliculas');
// 				elementoH1.innerHTML = " ";
// 				document.body.appendChild(elementoH1);
// 				var lista =  document.createElement('ul');
// 	//RECORRO EL ARRAY CON LOS OBJETOS
// 				for (var i =0; i < arraypeliculas.length; i++) {
// 					var titulo =  document.createElement('h2');
// 					titulo.innerHTML = "pelicula: ";
// 					lista.appendChild(titulo);
// 	//RECORRO EL OBJETO DE ESA POSICION
// 					for (k in arraypeliculas[i]) {
// 	//PREGUNTO SI EL INDICE ES LINK
// 						if (k === 'link'){
// 							var day2 = document.createElement('img');
// 							day2.setAttribute("src", arraypeliculas[i][k])
// 							day2.setAttribute("style", "max-width: 135px;")
// 							lista.appendChild(day2);
// 						}
// 						else{
// 							var day = document.createElement('li');
// 							day.innerHTML = arraypeliculas[i][k];
// 						}
// 	     				lista.appendChild(day);
// 					 }
// 					}
// 				var close = document.createElement('a'); 
// 				var ref = document.createElement('img'); 
// 				close.appendChild(ref);    
// 				lista.appendChild(close);
// 				a.setAttribute("onclick", "close()")
// 				ref.setAttribute("src", "https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/circle-close-128.png")    	  
// 			    elementoH1.appendChild(lista);
// 		};	

// 		function crearNuevaPeli(nombre,link,descripcion){
		
// 			this.nombre = nombre;
// 			this.descripcion = descripcion;
// 			this.link = link;
			
		

		
			
// }


var list = (function(){

	

	var	arrayTareas = [];
	var tarea = [];

	function crearNuevaTask(Id,titulo,descripcion){
		this.id = Math.round(Math.random()*10000),
		this.titulo = titulo,
		this.descripcion = descripcion,
		this.completado = false
	}

	function mostrarTarea(tarea){
		var lista = document.createElement('ul');
		var titulo = document.createElement('h2');
		titulo.innerHTML = "Tarea ";
		for (var i =0; i < tarea.length; i++){
			for (k in tarea[i]){
						if (k == 'completado') {
							lista.setAttribute("id","ul");
							var T = document.createElement('li');
							T.innerHTML = "Hecho";
							var ch = document.createElement('input');
							lista.appendChild(T).setAttribute("id","li");;
							T.appendChild(ch).setAttribute("type","checkbox");
							}
						else{
							lista.setAttribute("id","mylist");
							var T = document.createElement('li');
							T.innerHTML = arrayTareas[i][k];
							    if (k=='titulo') {
									lista.appendChild(T).setAttribute("id","title");
									}
								if (k=='descripcion'){
								    lista.appendChild(T).setAttribute("id","desc");
									}
								else{
									lista.appendChild(T)
									};
							};
						}
				var btn1 =  document.createElement('button');
     			var btn2 =  document.createElement('button');
     			btn1.innerHTML = "Editar";
     			btn2.innerHTML = "Eliminar";
     			lista.appendChild(btn1).setAttribute("onclick","list.editTask()");
     		    btn2.addEventListener('click', function(){
 			    this.parentNode.parentNode.removeChild(this.parentNode);
			    }, false);		
     			lista.appendChild(btn2);
	     		var T = document.getElementById("listadetareas");
     			T.appendChild(lista).setAttribute("class", "lista");
			
		}


	}

	function mostrarTareas(arrayTareas){
		for (var i =0; i < arrayTareas.length; i++) {
				var lista =  document.createElement('ul');
				var titulo =  document.createElement('h2');
				titulo.innerHTML = "Tarea: ";
				lista.appendChild(titulo);
				for (k in arrayTareas[i]) {
						if (k == 'completado') {
							lista.setAttribute("id","ul");
							var T = document.createElement('li');
							T.innerHTML = "Hecho";
							var ch = document.createElement('input');
							lista.appendChild(T).setAttribute("id","li");;
							T.appendChild(ch).setAttribute("type","checkbox");
						}
						else{
								lista.setAttribute("id","mylist");
								var T = document.createElement('li');
								T.innerHTML = arrayTareas[i][k];
								if (k=='titulo') {
									lista.appendChild(T).setAttribute("id","title");
									} if (k=='descripcion'){
										lista.appendChild(T).setAttribute("id","desc");
									} else{
										lista.appendChild(T)};
								
								};

							
							}
     			var btn1 =  document.createElement('button');
     			var btn2 =  document.createElement('button');
     			btn1.innerHTML = "Editar";
     			btn2.innerHTML = "Eliminar";
     			lista.appendChild(btn1).setAttribute("onclick","list.editTask()");
     		    btn2.addEventListener('click', function(){
 			    this.parentNode.parentNode.removeChild(this.parentNode);
			    }, false);		
     			lista.appendChild(btn2);
	     		var T = document.getElementById("listadetareas");
     			T.appendChild(lista).setAttribute("class", "lista");
				}
	}



	function eliminarTarea(arrayTareas){
		var element = document.getElementById("listadetareas");
		while (element.firstChild) {
 		 	   element.removeChild(element.firstChild);
 		 	}
	}		


	function buscarTarea(arrayTareas){
		var element = document.getElementById('titulo').value.toLowerCase();
		for (var i =0; i < arrayTareas.length; i++){
			for (k in arrayTareas[i]){
				if (arrayTareas[i][k]==element) {
					eliminarTarea();
					var lista =  document.createElement('ul');
					var titulo =  document.createElement('h2');
					titulo.innerHTML = "Tarea: ";
					lista.appendChild(titulo);
					if (k == 'completado') {
							lista.setAttribute("id","ul");
							var T = document.createElement('li');
							T.innerHTML = "Hecho";
							var ch = document.createElement('input');
							lista.appendChild(T).setAttribute("id","li");;
							T.appendChild(ch).setAttribute("type","checkbox");
						}
						else{
								lista.setAttribute("id","mylist");
								var T = document.createElement('li');
								T.innerHTML = arrayTareas[i][k];
								if (k=='titulo') {
									lista.appendChild(T).setAttribute("id","title");
									} if (k=='descripcion'){
										lista.appendChild(T).setAttribute("id","desc");
									} else{
										lista.appendChild(T)};
								
								};
					lista.setAttribute("id","ul");
					var T = document.createElement('li');
	     			T.innerHTML = "Hecho";
		 			var ch = document.createElement('input');
		 			lista.appendChild(T).setAttribute("id","li");;
					T.appendChild(ch).setAttribute("type","checkbox");
	     			var btn1 =  document.createElement('button');
		 			var btn2 =  document.createElement('button');
		 			btn1.innerHTML = "Editar";
		 			btn2.innerHTML = "Eliminar";
		 			lista.appendChild(btn1).setAttribute("onclick","list.editTask()");
		 		    btn2.addEventListener('click', function(){
					    this.parentNode.parentNode.removeChild(this.parentNode);
				    }, false);		
		 			lista.appendChild(btn2);
		     		var T = document.getElementById("listadetareas");
		 			T.appendChild(lista).setAttribute("class", "lista");

				};
			} 
		}

	}	


    return {

	   addTask: function(){
	   		eliminarTarea(arrayTareas);
	   		var id;
			var descripcion =  document.getElementById('descripcion').value.toLowerCase();
		 	var titulo = document.getElementById('titulo').value.toLowerCase();
		 	var task = new crearNuevaTask(id,titulo,descripcion);
		 	arrayTareas.push(task);
		 	tarea.push(task);
		 	console.log(arrayTareas);
		 	mostrarTarea(tarea);

		   },

	   editTask: function(){
	   		var li = document.getElementById('title').innerHTML = prompt('ingrese nuevo titulo');
	   		var li2 = document.getElementById('desc').innerHTML = prompt('ingrese nueva descripcion');
	   },
	   showTask: function(){
			mostrarTareas(arrayTareas);
	   },

	   deleteTask: function(){
	   		eliminarTarea(arrayTareas);
	   		arrayTareas = [];
	   },	   

	   findTask: function(){
	  		buscarTarea(arrayTareas);

	   },


	 };
	})();	

	document.getElementById('agregar').addEventListener('click', list.addTask, false);
