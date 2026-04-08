const form = document.getElementById("formAdocao");

const cpfsCadastrados = ["12345678900", "11111111111"];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Valores
    const nome = nomeInput.value.trim();
    const email = emailInput.value;
    const telefone = telefoneInput.value.replace(/\D/g, "");
    const cpf = cpfInput.value.replace(/\D/g, "");
    const idade = +idadeInput.value;
    const cidade = cidadeInput.value.trim();
    const moradia = moradiaInput.value;

    const quintal = document.querySelector('input[name="quintal"]:checked');
    const pet = document.querySelector('input[name="pet"]:checked');

    const horas = +horasInput.value;
    const motivo = motivoInput.value.toLowerCase();
    const termo = termoInput.checked;

    // Validações básicas
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
    if (motivo.length < 10 || motivo === "quero" || motivo === "porque sim") return alert("Motivo inválido");
    if (!termo) return alert("Aceite o termo");

    // Regras de negócio
    if (moradia === "apartamento" && quintal.value === "sim")
        return alert("Apartamento não pode ter quintal");

    if (pet.value === "nao")
        alert("A ONG poderá acompanhar sua adaptação");

    if (horas > 8)
        alert("Animal ficará muito tempo sozinho");

    if (motivo.includes("hoje"))
        alert("Cuidado com decisão impulsiva");

    if (motivo.includes("sem dinheiro"))
        return alert("Adoção exige responsabilidade financeira");

    // Sucesso
    alert("Formulário enviado!");
    window.location.href = "dogs.html";
});