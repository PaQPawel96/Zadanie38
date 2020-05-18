Napisz funkcję, która przyjmuje jako parametry dwie liczby, które przekażesz podczas wywoływania funkcji.

Funkcja ma dodawać, odejmować i mnożyć liczby przekazane do parametrów i wyświetlać w konsoli następujące stringi:

1. "Wynik dodawania wynosi x"
2. "Wynik odejmowania wynosi x"
3. "Wynik mnożenia wynosi x"

Gdzie x jest wynikiem danego działania.

Natomiast jeżeli wynikiem jest liczba ujemna, w konsoli powinien pojawić się string:
"Wynik jest ujemny"

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