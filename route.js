// route.js
console.log('route.js loaded');

// Function to load the content of a page
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading page:', error);
            document.getElementById('content').innerHTML = '<p>Page not found.</p>';
        });
}

// Function to handle routing
function route() {
    const path = window.location.hash.substring(1); // Get the path from the URL hash
    if (path === '') {
        loadPage('index.html'); // Load the main page if no path is specified
    } else {
        loadPage(`villes/${path}.html`); // Load the specified page
    }
}

// Event listener for hash changes
window.addEventListener('hashchange', route);

// Initial route call to load the correct page on page load
route();

// Optional: Add a listener for the DOMContentLoaded event to ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', route);