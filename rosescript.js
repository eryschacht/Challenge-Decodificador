const textoPrincipal= document.querySelector(".textoPrincipal");
const mensaje = document.querySelector(".mensajeProcesado");
const mensajeDecodificar = document.querySelector(".mensaje");


//*La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"*/


function botonEncriptar(){
	const textoEncriptado = Encriptar(textoPrincipal.value);
	mensajeProcesado.value = textoEncriptado;
	textoPrincipal.value = "";
}


function Encriptar(stringEncript){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringEncript = stringEncript.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++){
		if(stringEncript.includes(matrizCodigo[i][0])){
			stringEncript = stringEncript.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}
	return stringEncript;		
}



function botonDesencriptar(){
	const textoDesencriptado = Desencriptar(mensajeProcesado.value);
	textoPrincipal.value = textoDesencriptado;
	mensajeProcesado.value = "";	
}



function Desencriptar(stringDesencript){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringDesencript = stringDesencript.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++){
		if(stringDesencript.includes(matrizCodigo[i][1])){
			stringDesencript = stringDesencript.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}
	return stringDesencript;	
}

function botonCopiar(){
	const textoCopiado = Copiar (mensajeDecodificar.value);
	textoPrincipal.value = textoCopiado
	mensajeDecodificar.value = "";
}
