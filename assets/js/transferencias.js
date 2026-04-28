const saldoatual= 2530.76;

document.getElementById("transferencia-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const destinatario = document.getElementById("destinatario").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const msg = document.getElementById("mensagem");

    if (!destinatario || isNaN(valor) || valor <= 0) {
        msg.textContent = "Por favor, preencha todos os campos corretamente.";
        msg.style.color = "red";
    } else if (valor > saldoatual) {
        msg.textContent = "Saldo insuficiente.";
        msg.style.color = "red";
        return;
    }
    
    if(valor > saldoatual) {
        msg.textContent = "Saldo insuficiente.";
        msg.style.color = "red";
        return;
    }

    msg.innerText = `Transferência de R$ ${valor.toFixed(2)} para ${destinatario} realizada com sucesso!`;
    msg.style.color = "green";

    document.getElementById("destinatario").value = "";
    document.getElementById("valor").value = "";
});