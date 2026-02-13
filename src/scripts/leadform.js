document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const mensagem = `Olá! Meu nome é ${nome}.
    Meu email é ${email}.
    Gostaria de mais informações sobre a Comunidade PARTICIPE DO SEU FUTURO 2026.`;

    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
})