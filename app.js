const primes = (num = 1) => {
  let p = [2];
  while (p.length < num) {
    const next = searchNextPrime(p);
    p.push(next);
  }
  return p;
};

const searchNextPrime = (arr) => {
  let max = Math.max(...arr);
  let found = false;
  while (!found) {
    let c = 0;
    arr.forEach((element) => {
      if (max % element != 0) c++;
    });
    c == arr.length ? (found = true) : max++;
  }
  return max;
};

function primesTo(max) {
  var store = [],
    result = [];
  for (let i = 2; i <= max; ++i) {
    if (!store[i]) {
      result.push(i);
      for (let j = i << 1; j <= max; j += i) {
        store[j] = true;
      }
    }
  }
  return result;
}

const getPrimes = async () => {
  // deja de mostrar el contenido de la tabla
  clearContent();

  // realiza una pequeña pausa intencional
  let a = new Promise((resolve) => setTimeout(resolve, 100));
  await a;

  // acota a 5000 en caso de que el input se haya sobrepasado
  let value = document.getElementById("NumOfPrimes").value;
  if (value > 5000) value = 5000;

  // busca los primos
  const p = primes(value);
  document.getElementById("table").className = "table-active";
  let tbody = document.getElementById("tbody");

  // remueve todos los elemntos de tbody
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  // crea un elemento DOM
  p.forEach((element, index) => {
    // crea un nuevo elemento
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerText = index;
    td2.innerText = element;
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
  });
};

const getPrimes_other = async () => {
  // deja de mostrar el contenido de la tabla
  clearContent();

  // realiza una pequeña pausa intencional
  let a = new Promise((resolve) => setTimeout(resolve, 100));
  await a;

  // acota a 5000 en caso de que el input se haya sobrepasado
  let value = document.getElementById("NumOfPrimes2").value;

  // busca los primos
  const p = primesTo(value);
  document.getElementById("table2").className = "table-active";
  let tbody = document.getElementById("tbody2");

  // remueve todos los elemntos de tbody
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  // crea un elemento DOM
  p.forEach((element, index) => {
    // crea un nuevo elemento
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerText = index;
    td2.innerText = element;
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
  });
};

const clearContent = () => {
  document.getElementById("table").className = "table-disable";
  document.getElementById("table2").className = "table-disable";
};
