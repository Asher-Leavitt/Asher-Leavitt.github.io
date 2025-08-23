// components.js - Loads shared header and footer components

// Function to load HTML components
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

// Function to set active navigation item and handle play-only social links
function setActiveNav() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Wait a bit for header to load, then set active class
    setTimeout(() => {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current page link
        const activeLink = document.querySelector(`.nav-menu a[href="${currentPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Show/hide Instagram and Discord based on whether we're on the Play page
        const playOnlySocials = document.querySelectorAll('.play-only-social');
        if (currentPage === 'play.html') {
            playOnlySocials.forEach(el => el.style.display = 'block');
        } else {
            playOnlySocials.forEach(el => el.style.display = 'none');
        }
    }, 100);
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    // Load header and footer
    await Promise.all([
        loadComponent('header-placeholder', 'header.html'),
        loadComponent('footer-placeholder', 'footer.html')
    ]);
    
    // Set active navigation item and handle conditional social links
    setActiveNav();
});