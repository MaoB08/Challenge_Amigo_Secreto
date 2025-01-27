// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listFriends=[];
const list = document.getElementById("listaAmigos");
const listResult = document.getElementById("resultado");
let contador=0;

function agregarAmigo() {
    let name = document.getElementById('amigo').value;
    document.getElementById('listaAmigos').hidden = false;
    if (verify(name)) {
        listFriends.push(name);
        list.innerHTML += `<li> ${listFriends[contador]}</li>`;
        document.getElementById('amigo').value="";
        contador++;
    } else {
        alert("Es necesario escribir un nombre");
        document.getElementById('amigo').focus();
    }
}


function sortearAmigo() {
    document.getElementById('button-addFriend').disabled=true;
    if (listFriends.length != 0) {
        listResult.innerHTML="";
        let randomNum = Math.floor(Math.random()*listFriends.length);
        listResult.innerHTML += `Del sorteo realizado, tu amigo secreto es: <b>${listFriends[randomNum]}</b> <br> Mantenlo en secreto 🤫`;
        listFriends.splice(randomNum,1);
        document.getElementById('listaAmigos').hidden = true;   
    }else{
        alert("Ya no hay amigos para jugar")
    }
}


function verify(name) {
    if (name.trim() === "") {
        return false;
    }else{
        return true;
    }
}