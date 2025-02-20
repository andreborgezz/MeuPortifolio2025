// Alternância de tema claro/escuro
document.getElementById("modo-noturno").addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
});

// Adicionando estilos para o modo claro
const style = document.createElement('style');
style.innerHTML = `
    .light-mode {
        background-color: #f0f8ff;
        color: #000;
    }
    .light-mode .navbar {
        background-color: #dbeafe;
    }
    .light-mode .nav-links a {
        color: #0366d6;
    }
    .light-mode #modo-noturno {
        border-color: #0366d6;
        color: #0366d6;
    }
    .light-mode #modo-noturno:hover {
        background-color: #0366d6;
        color: #fff;
    }
`;
document.head.appendChild(style);
