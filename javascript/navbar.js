// navbar.js
document.addEventListener('DOMContentLoaded', function () {
    // Load the navbar
    fetch('../navbar.html')
        .then(response => response.text())
        .then(data => {
            // Create a temporary div to parse the HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Extract just the navbar element
            const navbarElement = tempDiv.querySelector('nav');

            // Insert the navbar into the placeholder
            document.getElementById('navbar-placeholder').innerHTML = navbarElement.outerHTML;

            // Highlight the current page in the navbar
            const currentPage = window.location.pathname.split('/').pop();

            if (currentPage === '' || currentPage === 'index.html') {
                document.getElementById('nav-home').classList.add('active');
            } else if (currentPage === 'players.html') {
                document.getElementById('nav-players').classList.add('active');
            } else if (currentPage === 'teams.html') {
                document.getElementById('nav-teams').classList.add('active');
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
});