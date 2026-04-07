const form = document.getElementById("formAdocao");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const telefone = document.getElementById("telefone").value.trim();

    
    const telefoneNumeros = telefone.replace(/\D/g, "");

    
    if (telefoneNumeros.length < 8) {
        alert("Telefone inválido! Deve ter pelo menos 8 dígitos.");
        return;
    }

    
    if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {
        alert("Telefone deve ter DDD + número (10 ou 11 dígitos).");
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