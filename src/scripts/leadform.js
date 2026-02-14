import $ from 'jquery';
import 'jquery-mask-plugin';

document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('leadForm');

    if (!form) return;

    if ($('#telefone').length) {
        $('#telefone').mask('(00) 00000-0000');
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!nome || !email) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const mensagem = `Olá! Meu nome é ${nome}.
Meu email é ${email}.
Gostaria de mais informações sobre a Comunidade PARTICIPE DO SEU FUTURO 2026.`;

        const url = `https://wa.me/5511972235130?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');

        form.reset();
    });
});
