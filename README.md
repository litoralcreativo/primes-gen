# primes-gen
Generador de números primos. Para obtener un numero finito de numeros primos llamar la funcion

> primes(num)

pasando como parametro la cantidad de primos que se quiere. Esta funcion devuelve un array con los primos indexados

> primes(10)

devuelve

>[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]


### CODIGO MEJORADO:

```javascript
function primesTo(max)
{
    var store = [], result = [];
    for (let i = 2; i <= max; ++i)
    {
        if (!store [i])
          {
            result.push(i);
            for (let j = i << 1; j <= max; j += i)
            {
                store[j] = true;
            }
        }
    }
    return result;
}
```
