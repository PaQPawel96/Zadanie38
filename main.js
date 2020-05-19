let a=5;
let b=10;
function operation(a, b)
{
    let x=a+b;
    if(x>=0)
    {
    console.log("Wynik dodawania wynosi "+x);
    }
    else
    {
        console.log("Wynik jest ujemny");
    }
    x=a-b;
    if(x>=0)
    {
    console.log("Wynik odejmowania wynosi "+x);
    }
    else
    {
        console.log("Wynik jest ujemny");
    }
     x=a*b;
     if(x>=0)
    {
    console.log("Wynik mnożenia wynosi "+x);
    }
    else
    {
        console.log("Wynik jest ujemny");
    }
    
}

operation(a, b);