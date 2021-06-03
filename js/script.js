for(var i=1; i<101;i++){
    var stampa="";
    var esiste=false;
    if(i%3==0){
        stampa+="Fizz";
        esiste=true;
    }
    if(i%5==0){
        stampa+="Buzz";
        esiste=true;
    }

    if(esiste){
        document.getElementById("num").innerHTML+= i + stampa+ "<br>"
    }

}