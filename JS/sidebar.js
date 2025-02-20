function abrirSidebar() {
    let sidebar = document.getElementById("sidebar");
    let menuIcon = document.getElementById("menu-icon");

    sidebar.style.left = "0px";

    // Verifica se a imagem existe antes de trocar
    if (menuIcon) {
        menuIcon.src = "IMG/menu-open.svg"; // Caminho correto para o novo ícone
    }
}

function fecharSidebar() {
    let sidebar = document.getElementById("sidebar");
    let menuIcon = document.getElementById("menu-icon");

    sidebar.style.left = "-250px";

    // Verifica se a imagem existe antes de trocar
    if (menuIcon) {
        menuIcon.src = "IMG/menu.svg"; // Caminho correto para o ícone original
    }
}
