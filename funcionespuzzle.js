var cuadroblanco="blanco.jpg";
var posicionblanco=9;
var posiciondelblanco = document.getElementsByTagName("img").src;
// Funcion para pasar la imagen
function pasar (formulario,imagen,numero){
    var resta = Math.abs(numeroPosBlanco-numero);
    console.info(resta);
    if(resta>=4){
        alert('Movimiento No Valido');

    }else if (resta==2){
        alert('Movimiento No Valido');
    }else{
        var temp= document.getElementById("c"+numero).src;

        document.getElementById("c"+numero).src=document.getElementById("c"+numeroPosBlanco).src;
        document.getElementById("c"+numeroPosBlanco).src=temp;
        numeroPosBlanco=numero;  
    } 
}

//Funcion para revolver un array
function shuffle (o){ 
    for (var j, x, i = o.length;i;j= Math.floor(Math.random() * i ), x=o[--i], o[i]= o[j], o[j]= x); 
    return o ; 
}


var imagesArray = ["uno.jpg","dos.jpg","tres.jpg","cuatro.jpg","cinco.jpg","seis.jpg","siete.jpg","ocho.jpg","blanco.jpg"];

var numeroPosBlanco = Math.abs(imagesArray.indexOf("blanco.jpg")+1);
//Funcion que hara el procedimiento de desordenar las imagenes
function random() {
    var b =shuffle(imagesArray);
    numeroPosBlanco = Math.abs(b.indexOf("blanco.jpg")+1);
    console.info(numeroPosBlanco);
    var i;
    for (i = 0; i < 9; i++){  
        document.getElementsByTagName("img")[i].src = b[i];
    }
}
//Funcion para comprobar si el puzzle esta resuelto
/*function comprobarPuzzle(){
     //console.info(document.getElementById("c1").parentNode.id);
   if((document.getElementById("c1").parentNode.id=="uno") &&
    (document.getElementById("c2").parentNode.id=="dos") &&
    (document.getElementById("c3").parentNode.id=="tres") &&
    (document.getElementById("c4").parentNode.id=="cuatro") &&
    (document.getElementById("c5").parentNode.id=="cinco") &&
    (document.getElementById("c6").parentNode.id=="seis") &&
    (document.getElementById("c7").parentNode.id=="siete") &&
    (document.getElementById("c8").parentNode.id=="ocho") &&
    (document.getElementById("c9").parentNode.id=="nueve"))
   {
    alert('Felicidades, has hecho un puzzle');
   }
    }*/