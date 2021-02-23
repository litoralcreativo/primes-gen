# primes-gen
Generador de números primos. Para obtener un numero finito de numeros primos llamar la funcion

> primes(num)

pasando como parametro la cantidad de primos que se quiere. Esta funcion devuelve un array con los primos indexados

> primes(10)

devuelve

>[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]


### CODIGO MEJORADO:
*function primeFactorsTo(max)<br />
{<br />
    var store  = [], i, j, primes = [];<br />
    for (i = 2; i <= max; ++i) <br />
    {<br />
        if (!store [i]) <br />
          {<br />
            primes.push(i);<br />
            for (j = i << 1; j <= max; j += i) <br />
            {<br />
                store[j] = true;<br />
            }<br />
        }<br />
    }<br />
    return primes;<br />
}*
