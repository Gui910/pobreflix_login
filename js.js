document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginContainer = document.getElementById('loginContainer');
    const messageContainer = document.getElementById('messageContainer');

    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Oculte o formulário e mostre a mensagem de erro
        loginContainer.classList.add('hidden');
        messageContainer.classList.remove('hidden');
    }
});

// Função para redirecionar para a página de escolha de plano
document.getElementById('payButton').addEventListener('click', function() {
    window.location.href = "plano.html"; // Redireciona para a página de escolha de plano
});

// Função para voltar para a página de login
document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('loginContainer').classList.remove('hidden'); // Mostra a tela de login
    document.getElementById('messageContainer').classList.add('hidden'); // Esconde a tela de mensagem
});

// Verifique se a função selectPlan é necessária aqui, e remova duplicatas
let selectedPlan = null;

function selectPlan(plan) {
    if (selectedPlan) {
        document.getElementById(selectedPlan).classList.remove('selected'); // Remove seleção anterior
    }

    selectedPlan = plan;
    document.getElementById(plan).classList.add('selected'); // Adiciona a classe de seleção
    const planName = document.getElementById(plan).querySelector('h2').textContent;
    document.getElementById('planName').textContent = planName;
    document.getElementById('paymentContainer').classList.remove('hidden'); // Mostra o botão de pagamento
    document.getElementById('selectedPlan').classList.remove('hidden'); // Mostra a seleção do plano
}

// Remova a duplicação da função de voltar
document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('selectedPlan').classList.add('hidden'); // Esconde a seleção do plano
    document.getElementById('paymentContainer').classList.add('hidden'); // Esconde o botão de pagamento
    
    let selectedPlan = null;

function selectPlan(plan) {
    if (selectedPlan) {
        document.getElementById(selectedPlan).classList.remove('selected'); // Remove seleção anterior
    }

    selectedPlan = plan;
    document.getElementById(plan).classList.add('selected'); // Adiciona a classe de seleção
    const planName = document.getElementById(plan).querySelector('h2').textContent;
    document.getElementById('planName').textContent = planName; // Atualiza o nome do plano selecionado
    document.getElementById('paymentContainer').classList.remove('hidden'); // Mostra o botão de pagamento
}

// Adicionando evento para o botão "Continuar"
document.getElementById('continueButton').addEventListener('click', function() {
    // Redireciona ou realiza a ação de pagamento
    window.location.href = `pagamento.html?plan=${encodeURIComponent(selectedPlan)}`;
});
// Adicionando evento para o botão "Seguir para o Pagamento"
document.getElementById('continueButton').addEventListener('click', function() {
    if (selectedPlan) {
        // Redireciona para a página de pagamento com o plano escolhido
        window.location.href = `pagamento.html?plan=${encodeURIComponent(selectedPlan)}`;
    } else {
        alert("Por favor, selecione um plano antes de continuar.");
    }
});
// Função para redirecionar para a página de cadastro
document.getElementById('subscribeButton').addEventListener('click', function() {
    window.location.href = "cadastro.html"; // Redireciona para a página de cadastro
});

});
