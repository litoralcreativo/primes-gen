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

const getPrimes = async () => {
  clearContent();
  let a = new Promise((resolve) => setTimeout(resolve, 100));
  await a;
  let value = document.getElementById("NumOfPrimes").value;
  if (value > 5000) value = 5000;
  const p = primes(value);
  document.getElementById("table").className = "table-active";
  let tbody = document.getElementById("tbody");

  // remueve todos los elemntos de tbody
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

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
};
