const saldo = 2530.76;

const historico = [
    {tipo: "entrada", valor: 500},
    {tipo: "saida", valor: 200},
    {tipo: "entrada", valor: 950},
];

document.getElementById("saldo").innerText = saldo.toFixed(2);

const lista = document.getElementById("historico");

historico.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `${item.tipo}: R$ ${item.valor.toFixed(2)}`;
    lista.appendChild(li);
});