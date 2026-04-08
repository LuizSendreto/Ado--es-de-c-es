const form = document.getElementById("formAdocao");

const cpfsCadastrados = ["12345678900", "11111111111"];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value.replace(/\D/g, "");
    const cpf = document.getElementById("cpf").value.replace(/\D/g, "");
    const idade = +document.getElementById("idade").value;
    const cidade = document.getElementById("cidade").value.trim();
    const moradia = document.getElementById("moradia").value;

    const quintal = document.querySelector('input[name="quintal"]:checked');
    const pet = document.querySelector('input[name="pet"]:checked');

    const horas = +document.getElementById("horas").value;
    const motivo = document.getElementById("motivo").value.toLowerCase();
    const termo = document.getElementById("termo").checked;

    if (nome.length < 3) return alert("Nome inválido");
    if (!email.includes("@")) return alert("Email inválido");
    if (telefone.length < 10) return alert("Telefone inválido");
    if (!cpf || cpfsCadastrados.includes(cpf)) return alert("CPF inválido ou já usado");
    if (idade < 18) return alert("Precisa ser maior de idade");
    if (!cidade) return alert("Informe a cidade");
    if (!moradia) return alert("Selecione a moradia");
    if (!quintal) return alert("Informe o quintal");
    if (!pet) return alert("Informe se já teve pet");
    if (!horas) return alert("Informe as horas");
    if (horas>8) return alert("O animal ficara muito tempo sozinho");
    if (motivo.length < 10 || motivo === "quero" || motivo === "porque sim")
        return alert("Motivo inválido");
    if (!termo) return alert("Aceite o termo");

    alert("Formulário enviado!");
    window.location.href = "dogs.html";
});