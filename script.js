// Destacar automaticamente o link da página atual na navbar
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("#nav-links a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        
        // Remove classe active de todos
        link.classList.remove("active");
        
        // Adiciona active na página correta
        if (href === currentPage) {
            link.classList.add("active");
        }
    });
});

// Validação do Formulário de Contato (usado em contato.html)
function validarFormulario() {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    
    let isValid = true;

    // Limpa mensagens de erro anteriores
    document.querySelectorAll(".error").forEach(el => el.remove());

    // Validação do Nome
    if (!nome.value.trim()) {
        mostrarErro(nome, "O nome é obrigatório");
        isValid = false;
    }

    // Validação do Email
    if (!email.value.trim()) {
        mostrarErro(email, "O e-mail é obrigatório");
        isValid = false;
    } else if (!validarEmail(email.value)) {
        mostrarErro(email, "Digite um e-mail válido");
        isValid = false;
    }

    // Validação da Mensagem
    if (!mensagem.value.trim()) {
        mostrarErro(mensagem, "A mensagem é obrigatória");
        isValid = false;
    }

    return isValid;
}

// Função auxiliar para mostrar erro
function mostrarErro(input, mensagem) {
    const erro = document.createElement("p");
    erro.className = "error";
    erro.style.color = "#ef4444";
    erro.style.fontSize = "0.9rem";
    erro.style.marginTop = "4px";
    erro.textContent = mensagem;
    input.parentNode.appendChild(erro);
    input.style.borderColor = "#ef4444";
}

// Validação simples de email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Simulação de envio do formulário
function simularEnvioFormulario(form) {
    const btn = form.querySelector("button");
    const textoOriginal = btn.textContent;

    btn.textContent = "Enviando...";
    btn.disabled = true;

    // Simula delay de envio
    setTimeout(() => {
        alert("✅ Mensagem enviada com sucesso!\n\nObrigado pelo contato, Marlon retornará em breve.");
        
        // Limpa o formulário
        form.reset();
        
        // Restaura botão
        btn.textContent = textoOriginal;
        btn.disabled = false;
    }, 1500);
}

function toggleTema() {
    document.documentElement.classList.toggle("dark");
    
    const icon = document.getElementById("theme-icon");
    if (document.documentElement.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("tema", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("tema", "light");
    }
}

// Aplicar tema salvo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("tema") === "dark") {
        document.documentElement.classList.add("dark");
        const icon = document.getElementById("theme-icon");
        if (icon) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }
});