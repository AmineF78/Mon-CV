document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Fonction pour basculer entre le mode sombre et le mode clair
    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
    }

    // Ajouter un écouteur d'événement au clic sur le bouton de mode sombre
    darkModeToggle.addEventListener("click", function() {
        toggleDarkMode();
    });
});
