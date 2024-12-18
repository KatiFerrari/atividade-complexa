let clickCount = 0;

document.getElementById('click-btn').addEventListener('click', function() {
    clickCount++;
    document.getElementById('click-count').textContent = clickCount;
});

document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Verificar se todos os campos foram preenchidos
    if (name && email && message) {
        document.getElementById('form-feedback').style.display = 'block';
        document.getElementById('form-error').style.display = 'none';
        document.getElementById('message-form').reset();
    } else {
        document.getElementById('form-error').style.display = 'block';
        document.getElementById('form-feedback').style.display = 'none';
    }
});
