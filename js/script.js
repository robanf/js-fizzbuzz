/* for(var i=1; i<101;i++){
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
        document.getElementById("num").innerHTML+= i + stampa+ "<br>";
    }

} */





/* Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e per i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz". :collisione: */

for(var i=1;i<=100;i++){
    console.log(i);
    var stampa="";
    if(i%3==0){
        stampa+="Fizz";
    }
    if(i%5==0){
        stampa+="Buzz";
    }

    
    document.getElementById("num").innerHTML+= i+stampa+"<br>";

}


