async function converter() {
    const valor = parseFloat(document.getElementById("valor").value);
    const de = document.getElementById("moedaorigem").value;
    const para = document.getElementById("moedadestino").value;

    if (isNaN(valor) || valor <= 0) {
        document.getElementById("resultado").innerText = "Digite um valor válido.";
        return;
    }

    try {
        const res = await fetch(`https://api.exchangerate.host/convert?access_key=063990dbaf3d15fb3297b5ff48bc8cf0&from=${de}&to=${para}&amount=${valor}`);
        const data = await res.json();

        if (!data.success || typeof data.result !== "number") {
            const mensagem = data.error?.info || "Erro ao converter.";
            document.getElementById("resultado").innerText = mensagem;
            return;
        }

        document.getElementById("resultado").innerText =
            `${valor} ${de} = ${data.result.toFixed(2)} ${para}`;

    } catch (error) {
        document.getElementById("resultado").innerText = "Erro ao converter.";
    }
}

document.getElementById("conversor-form").addEventListener("submit", function(e) {
    e.preventDefault();
    converter();
});