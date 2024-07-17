    // Máscara para o campo Nome (apenas letras)
    document.getElementById('name').addEventListener('input', function (e) {
        let value = e.target.value;
        e.target.value = value.replace(/[^a-zA-Z\s]/g, '');
    });

    // Validação para o campo Email
    document.getElementById('email').addEventListener('input', function (e) {
        let value = e.target.value;
        let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!isValidEmail) {
            e.target.setCustomValidity("Por favor, insira um endereço de email válido.");
        } else {
            e.target.setCustomValidity("");
        }
    });

    // Impede o envio do formulário se houver campos inválidos
    document.querySelector('form').addEventListener('submit', function (e) {
        if (!document.getElementById('name').value) {
            e.preventDefault();
            alert('Por favor, preencha o campo Nome.');
        } else if (!document.getElementById('email').value) {
            e.preventDefault();
            alert('Por favor, preencha o campo Email.');
        }
    });