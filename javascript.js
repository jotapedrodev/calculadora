function insert(num) {
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num; 
    // Aqui criamos uma variavel chamada numero que serve para colocar os numeros
    //aonde esta o resultado.
}
function clean() {
    document.getElementById('resultado').innerHTML = "";
    // Essa funcao foi criada para resetar tudp, quando clicar no C maior,
    // todos os numeros irao se apagar.
    
}

function back() {
    var resultado= document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
// funcao criada para voltar
function calcular() 
{
    var resultado= document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML= "Nada..."
    }
}
// funcao criada para calcular usando eval, if e else.
