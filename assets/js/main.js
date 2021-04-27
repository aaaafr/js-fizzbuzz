// Scrivi un programma che stampi i numeri da 1 a 100, 

for(var i = 1; i<=100; i++){
    if((i%3 == 0) && (i%5 == 0)){
        console.log("FizzBuzz");
    }else if(i%5 == 0){
        console.log("Buzz");
    }else if(i%3 == 0){
        console.log("Fizz");
    } else{
        console.log(i);
    }
}


// ma per i multipli di 3 stampi “Fizz” al posto del numero 
// multipli di 3 --> n%3==0
// e per i multipli di 5 stampi Buzz.
// multipli di 5 --> n%5==0
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// sia 5 che 3 :  n%3==0 && n%5==0
//(devo cambiare come sono disposti gli if)
