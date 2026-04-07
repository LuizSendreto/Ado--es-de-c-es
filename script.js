const form = document.getElementById("formAdocao");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const telefone = document.getElementById("telefone").value.trim();

    
    const telefoneNumeros = telefone.replace(/\D/g, "");

    
    if (telefoneNumeros.length < 8) {
        alert("Telefone inválido! Deve ter pelo menos 8 dígitos.");
        return;
    }

    if (!quintal) {
        alert("Informe se possui quintal!");
        return;
    }

    // Pet
    if (!pet) {
        alert("Informe se já teve pet!");
        return;
    }

    if (pet.value === "nao") {
        alert("A ONG poderá acompanhar sua adaptação com o pet.");
    }

    if (horas === "" || isNaN(horas)) {
        alert("Informe as horas corretamente!");
        return;
    }

    if (horas > 8) {
        alert("O animal ficará muito tempo sozinho!");
    }

    if (motivo.length < 10 || motivo === "quero" || motivo === "porque sim") {
        alert("Motivo inválido!");
        return;
    }

    if (!termo) {
        alert("Você deve aceitar o termo!");
        return;
    }

    // Coerência
    if (moradia === "apartamento" && quintal.value === "sim") {
        alert("Apartamento não pode ter quintal!");
        return;
    }

    alert("Formulário enviado com sucesso!");
    window.location.href = "dogs.html";
});


form.addEventListener("submit", function (e) {
    e.preventDefault();


    alert("Formulário enviado com sucesso!");
    window.location.href = "dogs.html";
});