// Destacar automaticamente o link da página atual na navbar
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("#nav-menu a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        link.classList.remove("active");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });
});

// Validação do Formulário de Contato
function validarFormulario() {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    
    let isValid = true;

    document.querySelectorAll(".error").forEach(el => el.remove());

    if (!nome.value.trim()) {
        mostrarErro(nome, "O nome é obrigatório");
        isValid = false;
    }

    if (!email.value.trim()) {
        mostrarErro(email, "O e-mail é obrigatório");
        isValid = false;
    } else if (!validarEmail(email.value)) {
        mostrarErro(email, "Digite um e-mail válido");
        isValid = false;
    }

    if (!mensagem.value.trim()) {
        mostrarErro(mensagem, "A mensagem é obrigatória");
        isValid = false;
    }

    return isValid;
}

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

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function simularEnvioFormulario(form) {
    const btn = form.querySelector("button");
    const textoOriginal = btn.textContent;

    btn.textContent = "Enviando...";
    btn.disabled = true;

    setTimeout(() => {
        alert("✅ Mensagem enviada com sucesso!\n\nObrigado pelo contato!");
        form.reset();
        btn.textContent = textoOriginal;
        btn.disabled = false;
    }, 1500);
}

// Alternar tema claro/escuro
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

// Aplicar tema salvo
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

// MENU MOBILE
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    const icon = mobileMenuToggle.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});