let espera = 5000;
let imagen = document.getElementById('img');
let info = document.getElementById('info');
let btPausa = document.getElementById('pausa');
let like = document.getElementById('like');
let retratos = ["buster","mama","visita"];
let liked = [false,false,false];
let descripciones = ["Yo con mi perrito Buster<br>Dia: 14 de Julio<br>Lugar: Restaurant La Joya<br>Personas: Paulo Hidalgo(Tu)",
"Mi mama y los peques<br>Dia: 26 de Agosto<br>Lugar: Casa<br>Personas: Estelita Chinchay",
"Visita de los tios<br>Dia: 10 de Enero<br>Lugar: Monasterio Santa Catalina<br>Personas: Nacy Chinchay, Nanuel Chinchay, Sofia Hidalgo, Lisbeth Hidalgo"]
let index = 0;
let max = retratos.length
function temp(){
    alert("Actualemte en "+(espera/1000)+" segundos de espera");
    let nuevo = prompt("Ingrese el nuevo tiempo de espera en segundos");
    if(nuevo>0){
        espera = nuevo*1000;
        alert("Nuevo tiempo de espera en "+(espera/1000)+" segundos");
    }
}
function pausa(){
    if(ejecucionEnProgreso){
        btPausa.setAttribute('src', 'img/play.png');
    }else{
        btPausa.setAttribute('src', 'img/pausa.png');
        mostarImg();
    }
    ejecucionEnProgreso = !ejecucionEnProgreso

}
function esperar() {
    return new Promise(resolve => setTimeout(resolve, espera));
}
let ejecucionEnProgreso = true;
async function mostarImg(){
    for (; index < max && ejecucionEnProgreso; index++) {
        imagen.innerHTML = '<img src="retratos/'+retratos[index]+'.png" class="img">'
        info.innerHTML = '<button class="boton" onclick="showInfo('+index+')">'+descripciones[index].substring(0,descripciones[index].indexOf('<'))+'</button>';
        if(liked[index]){
            like.innerHTML = '<img src="img/dislike.png" onclick="darLike(1)"  class="icon">';
        }else{
            like.innerHTML = '<img src="img/like.png" onclick="darLike(0)"  class="icon">';
        }
        await esperar();
    }
}
function sig(){
    index++
    if(index<max){
        imagen.innerHTML = '<img src="retratos/'+retratos[index]+'.png" class="img">'
        info.innerHTML = '<button class="boton" onclick="showInfo('+index+')">'+descripciones[index].substring(0,descripciones[index].indexOf('<'))+'</button>';
    }else {
        index--
        alert("No hay mas fotos");
    }
    
}
function prev(){
    index--
    if(index>=0){
        imagen.innerHTML = '<img src="retratos/'+retratos[index]+'.png" class="img">'
        info.innerHTML = '<button class="boton" onclick="showInfo('+index+')">'+descripciones[index].substring(0,descripciones[index].indexOf('<'))+'</button>';
    }else {
        index++
        alert("No hay mas fotos");
    }
}
function continuar(){
    console.log(index);
    ejecucionEnProgreso = true;
    index--;
    mostarImg();
    
}
function darLike(valor){
    liked[index] = !liked[index];
    console.log(liked[index]);
    if(valor==0){
        like.innerHTML = '<img src="img/dislike.png" onclick="darLike(1)"  class="icon">';
    }else{
        like.innerHTML = '<img src="img/like.png" onclick="darLike(0)"  class="icon">';
    }

}
function showInfo(index){
    console.log(index);
    ejecucionEnProgreso = false;
    info.innerHTML = '<button class="boton" onclick="continuar()">Ver Imagen</button>';
    info.innerHTML += '<p class="text">'+descripciones[index]+'</p>';
    imagen.innerHTML = ''
}
mostarImg();