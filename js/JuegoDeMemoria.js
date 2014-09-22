var partida;
var celdaAnterior, celdaActual;


// Objeto para guardad las coordenadas
var Coordenadas = function (x, y)
{
	this.posx = x;
	this.posy = y;
}

var ListaCoordenadas = function()
{
	// Cargamos el array con las coordenadas
	this.lista = new Array(40);

	// Posición en la lista
	var l = 0;

	// Iteramos para cargar
	for(var m = 0; m < 5; m++)
	{
		for( var n = 0; n < 8; n++)
		{
			// Cargamos las coordenadas
			this.lista[l] = new Coordenadas(n*100, m*100);

			// Pasamos a otra posición en la lista
			l++
		}
	}
	
}

ListaCoordenadas.prototype.sgteCoord = function ()
{
	// Obtengo el indice "l" para la posición de coordenadas
	var l = Math.floor(Math.random() * (this.lista.length - 1 + 1));

	// Guardo el objeto coordenada
	var parXY = this.lista[l];

	// Elimino el indice "l"
	this.eliminar(l);

	// Retorno los datos
	return parXY;
}

ListaCoordenadas.prototype.eliminar = function (l)
{
	// En este caso "l" es el primer elemento de la lista
	if(l == 0)
	{
		// La función shift quita el primer elemento del Array
		this.lista.shift();
	}

	// En este caso "l" es el ultimo elemento de la lista
	else if(l == this.lista.length -1)
	{
		// La función pop quita el ultimo elemento del Array
		this.lista.pop();
	}

	// En este caso "l" es un elemento interno de la lista
	else
	{
		// Partimos la lista en 2
		var parte1 = this.lista.slice(0, l);
		var parte2 = this.lista.slice(l+1);

		// Unimos las 2 partes en una nueva lista
		this.lista = parte1.concat(parte2)
	}
}


var TarjetaPokemon = function (x, y, url, tablero) 
{
	this.posx = x;
	this.posy = y;
	this.ok = false;
	

	this.img = new Image();
	this.img.src = url;
	this.img.onload = function()
	{
		tablero.dibujar();
	};
}

// Objeto para guardar la posición en la celda de la matriz
var CeldaMatriz = function (j, k)
{
	this.posj = j;
	this.posk = k;
}

CeldaMatriz.prototype.existeCelda =  function ()
{
	return (this.posj != -1 && this.posk != -1);
}

var Tablero = function (canvas)
{
	var tab = this;
	this.contexto = canvas.getContext("2d");
	this.contador = 0;
	this.lienzo = canvas;
	
	// Inicializo los array
	this.tarjetas = new Array(20);
	this.dorsos = new Array(20);
	// Cargo las celdas que contienen la información de las cartas
	this.cargarTarjetas(tab);
	// Coloco las tarjetas en una posición aleatoria
	this.ubicarTarjetas();
}

Tablero.prototype.cargarTarjetas = function (tab)
{
	for(var i = 0 ; i < this.tarjetas.length; i++) 
	{
		this.tarjetas[i] = new Array(2);
		this.dorsos[i] = new Array(2);
	}

	// Pikachu
	this.tarjetas[0][0] = new TarjetaPokemon(-1,-1,"img/pikachu.png",tab);
	this.tarjetas[0][1] = new TarjetaPokemon(-1,-1,"img/pikachu.png",tab);
	// Charmander
	this.tarjetas[1][0] = new TarjetaPokemon(-1,-1,"img/charmander.png",tab);
	this.tarjetas[1][1] = new TarjetaPokemon(-1,-1,"img/charmander.png",tab);
	//Bulbasaur
	this.tarjetas[2][0] = new TarjetaPokemon(-1,-1,"img/bulbasaur.png",tab);
	this.tarjetas[2][1] = new TarjetaPokemon(-1,-1,"img/bulbasaur.png",tab);
	//Articuno
	this.tarjetas[3][0] = new TarjetaPokemon(-1,-1,"img/articuno.png",tab);
	this.tarjetas[3][1] = new TarjetaPokemon(-1,-1,"img/articuno.png",tab);
	// Caterpie
	this.tarjetas[4][0] = new TarjetaPokemon(-1,-1,"img/caterpie.png",tab);
	this.tarjetas[4][1] = new TarjetaPokemon(-1,-1,"img/caterpie.png",tab);
	// Gengar
	this.tarjetas[5][0] = new TarjetaPokemon(-1,-1,"img/gengar.png",tab);
	this.tarjetas[5][1] = new TarjetaPokemon(-1,-1,"img/gengar.png",tab);
	// Growlithe
	this.tarjetas[6][0] = new TarjetaPokemon(-1,-1,"img/growlithe.png",tab);
	this.tarjetas[6][1] = new TarjetaPokemon(-1,-1,"img/growlithe.png",tab);
	// Houndour
	this.tarjetas[7][0] = new TarjetaPokemon(-1,-1,"img/houndour.png",tab);
	this.tarjetas[7][1] = new TarjetaPokemon(-1,-1,"img/houndour.png",tab);
	// Jigglypuff
	this.tarjetas[8][0] = new TarjetaPokemon(-1,-1,"img/jigglypuff.png",tab);
	this.tarjetas[8][1] = new TarjetaPokemon(-1,-1,"img/jigglypuff.png",tab);
	// Leafeon
	this.tarjetas[9][0] = new TarjetaPokemon(-1,-1,"img/leafeon.png",tab);
	this.tarjetas[9][1] = new TarjetaPokemon(-1,-1,"img/leafeon.png",tab);
	// Mew
	this.tarjetas[10][0] = new TarjetaPokemon(-1,-1,"img/mew.png",tab);
	this.tarjetas[10][1] = new TarjetaPokemon(-1,-1,"img/mew.png",tab);
	// Mudkip
	this.tarjetas[11][0] = new TarjetaPokemon(-1,-1,"img/mudkip.png",tab);
	this.tarjetas[11][1] = new TarjetaPokemon(-1,-1,"img/mudkip.png",tab);
	// Pumpkaboo
	this.tarjetas[12][0] = new TarjetaPokemon(-1,-1,"img/pumpkaboo.png",tab);
	this.tarjetas[12][1] = new TarjetaPokemon(-1,-1,"img/pumpkaboo.png",tab);
	// Raichu
	this.tarjetas[13][0] = new TarjetaPokemon(-1,-1,"img/raichu.png",tab);
	this.tarjetas[13][1] = new TarjetaPokemon(-1,-1,"img/raichu.png",tab);
	// Rattata
	this.tarjetas[14][0] = new TarjetaPokemon(-1,-1,"img/rattata.png",tab);
	this.tarjetas[14][1] = new TarjetaPokemon(-1,-1,"img/rattata.png",tab);
	// Skitty
	this.tarjetas[15][0] = new TarjetaPokemon(-1,-1,"img/skitty.png",tab);
	this.tarjetas[15][1] = new TarjetaPokemon(-1,-1,"img/skitty.png",tab);
	// Squirtle
	this.tarjetas[16][0] = new TarjetaPokemon(-1,-1,"img/squirtle.png",tab);
	this.tarjetas[16][1] = new TarjetaPokemon(-1,-1,"img/squirtle.png",tab);
	// Suicune
	this.tarjetas[17][0] = new TarjetaPokemon(-1,-1,"img/suicune.png",tab);
	this.tarjetas[17][1] = new TarjetaPokemon(-1,-1,"img/suicune.png",tab);
	// Umbreon
	this.tarjetas[18][0] = new TarjetaPokemon(-1,-1,"img/umbreon.png",tab);
	this.tarjetas[18][1] = new TarjetaPokemon(-1,-1,"img/umbreon.png",tab);
	// Vulpix
	this.tarjetas[19][0] = new TarjetaPokemon(-1,-1,"img/vulpix.png",tab);
	this.tarjetas[19][1] = new TarjetaPokemon(-1,-1,"img/vulpix.png",tab);

	//Cargamos los dorsos de las tarjetas
	this.dorsos[0][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[0][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[1][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[1][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[2][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[2][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[3][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[3][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[4][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[4][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[5][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[5][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[6][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[6][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[7][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[7][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[8][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[8][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[9][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[9][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[10][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[10][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[11][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[11][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[12][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[12][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[13][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[13][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[14][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[14][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[15][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[15][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[16][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[16][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[17][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[17][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[18][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[18][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	
	this.dorsos[19][0] = new TarjetaPokemon(-1,-1,"img/back.png",tab);
	this.dorsos[19][1] = new TarjetaPokemon(-1,-1,"img/back.png",tab);


}
Tablero.prototype.confirmarPokemon = function (j, k, esOk)
{
	// j = es la fila donde esta el pokemon dentro de la matriz
	// k = es la columna donde esta el pokemon dentro de la matriz
	// esOk = es un booleano que indica si debemos o no mostrar al pokemon
	this.tarjetas[j][k].ok = esOk;
	this.dorsos[j][k].ok = !esOk;
}
Tablero.prototype.dibujar = function ()
{

	for(var j = 0; j < this.tarjetas.length; j++)
	{
		for( var k = 0; k < this.dorsos[j].length; k++)
		{
			if(this.dorsos[j][k].ok)
			{
				this.contexto.drawImage(this.dorsos[j][k].img, this.dorsos[j][k].posx, this.dorsos[j][k].posy);
			}
			else if(this.tarjetas[j][k].ok)
			{
				this.contexto.drawImage(this.tarjetas[j][k].img, this.tarjetas[j][k].posx, this.tarjetas[j][k].posy);
			}
		}
	}

}

Tablero.prototype.ubicarTarjetas = function ()
{
	// Inicializo la lista de coordenadas
	var lista = new ListaCoordenadas(); 

	// Utilizamos 2 for, para recorrer el indice de las matrices celda a celda
	for(var j = 0; j < this.tarjetas.length; j++)
	{
		for( var k = 0; k < this.tarjetas[j].length; k++)
		{
			// Le pedimos a lista el siguiente objeto Coordenadas a usar
			var coordenadaActual = lista.sgteCoord();
			
			// Le asignamos los valores a la tarjeta pokemon y al dorso
			this.tarjetas[j][k].posx = coordenadaActual.posx;
			this.tarjetas[j][k].posy = coordenadaActual.posy;

			this.dorsos[j][k].posx = coordenadaActual.posx;
			this.dorsos[j][k].posy = coordenadaActual.posy;
		}
	}
}

Tablero.prototype.mostrarTarjetas = function (estado)
{
	// Estado es una variable de tipo booleano
	for(var j = 0; j < partida.dorsos.length; j++)
	{
		for(var k = 0; k < partida.dorsos[j].length; k++)
		{
			partida.confirmarPokemon(j, k, estado);
		}
	}

}


function iniciar()
{
	var canvas = document.getElementById("c");
	canvas.width = 800;
	canvas.height = 500;
	partida = new Tablero(canvas);

	// Inicializamos los objetos celdas
	celdaAnterior = new CeldaMatriz(-1, -1)
	celdaActual = new CeldaMatriz(-1, -1)

	var boton = document.getElementById("boton");


	// Agregamos boton listener al boton
	boton.addEventListener("click", botonListener);

	partida.mostrarTarjetas(false);
		
	partida.dibujar();
}

function botonListener ()
{
	// Volvemos a obtener el boton ya que no lo declare como variable global
	var boton = document.getElementById("boton");

	// Quitamos el listener del boton para que el usuario no siga apretando el boton para visualizar
	// donde estan los pokemon
	boton.removeEventListener('click', botonListener);

	// Lamamos a la función para que nos ponga las tarjetas pokemon en true para poder hacerlas visibles
	partida.mostrarTarjetas(true);

	// Pusimos las cartas pokemon en true y redibujamos para que aparezcan en pantalla
	partida.dibujar();

	// Hacemos que el programa espere
	window.setTimeout(iniciarJuego, 5000);

}

function iniciarJuego ()
{
	// Llamamos a la función para que nos ponga las tarjetas pokemon en false para poder ocultarlas
	partida.mostrarTarjetas(false);

	// Pusimos las cartas pokemon en false y redibujamos para que aparezcan en pantalla
	partida.dibujar();

	// Agregamos el click listener para que el usuario pueda escojer las tarjetas
	partida.lienzo.addEventListener("click", clickListener);
}

function clickListener(evento)
{
	// Guardo las coordenadas del click en el canvas
	var x = evento.layerX;
	var y = evento.layerY;
	var encontrado = false;
	// En las variables j y k, guardo el indice de la matriz cuando encontre el pokemon
	var j = -1;
	var k = -1;

	var l = 0;
	var m = 0;

	while(l < partida.tarjetas.length && !encontrado)
	{
		// Reseteamos el iterador para la segunda dimension
		m = 0;

		while(m < partida.tarjetas[l].length && !encontrado)
		{
			if( ( x > partida.tarjetas[l][m].posx && x <= partida.tarjetas[l][m].posx + 100 ) 
				&& (y > partida.tarjetas[l][m].posy && y < partida.tarjetas[l][m].posy + 100 ) )
			{
				 	encontrado = true;
					j = l;
					k = m;
			}

			// incremento el iterador del 2do while
			m++
		}
		// Incremento el iterador del primer while
		l++
	}

	// Llamamos al metodo que evalua las coincidencias en las tarjetas
	compararTarjetas(j, k);
}

function compararTarjetas(j, k)
{
	// Evaluamos si el pokemon se encuentra oculto
	if(!partida.tarjetas[j][k].ok)
	{

		// Evaluamos si es la primera celda cliqueada en el juego
		// Si es la primera celda, no existe ninguna celda cliqueada
		if( !celdaAnterior.existeCelda() && !celdaActual.existeCelda())
		{
			// Guardamos el click como actual
			celdaActual.posj = j;
			celdaActual.posk = k;

			// Avisamos que tenemos que mostrar el pokemon al cual le hicimos click
			partida.confirmarPokemon(j, k, true);
		}

		// Este caso ya hay una celda
		else 
		{
			// Guardo la celda actual vieja como la anterior
			celdaAnterior.posj = celdaActual.posj;
			celdaAnterior.posk = celdaActual.posk;

			// Guardo la nueva celda actual
			celdaActual.posj = j;
			celdaActual.posk = k;

			// Vamos a evaluar que se encentre el par correcto
			// Como guardo los pokemones por filas de parejas, simplemente comparo si estan
			// en la misma fila, para saber si son el par.
			if(celdaAnterior.posj == celdaActual.posj)
			{
				// Como la celda anterior ya se encuentra visible, solo muestro la celda actual
				partida.confirmarPokemon(j, k, true);

				// Reiniciamos las celdas por que se encontro una pareja
				celdaAnterior.posj = -1;
				celdaAnterior.posk = -1;
				celdaActual.posj = -1;
				celdaActual.posk = -1;

				// Incrementamos el contador de parejas encontradas
				partida.contador++;
			}

			// En este caso es el segundo click y no encontramos la pareja
			else
			{
				// Le mostramos la carta al usuario
				partida.confirmarPokemon(j, k, true);
				partida.dibujar();

				partida.lienzo.removeEventListener('click', clickListener);

				// Hacemos que el programa espere
				window.setTimeout(reiniciarTarjetas, 1000);
			}
		} 

	}

	// Redibujamos
	partida.dibujar();

	// Evaluo si ya gane el juego
	if(partida.contador == partida.tarjetas.length)
	{
		alert("Ganaste!!! :)");
	}
}

function reiniciarTarjetas ()
{
	// Ponemos las tarjetas para que queden ocultas
	partida.confirmarPokemon(celdaAnterior.posj, celdaAnterior.posk, false);
	partida.confirmarPokemon(celdaActual.posj, celdaActual.posk, false);

	// Reiniciamos las celdas por que  no se encontro una pareja
	celdaAnterior.posj = -1;
	celdaAnterior.posk = -1;
	celdaActual.posj = -1;
	celdaActual.posk = -1;

	// Redibujamos las tarjetas
	partida.dibujar();
	partida.lienzo.addEventListener("click", clickListener);
}


