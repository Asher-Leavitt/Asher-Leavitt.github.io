// components.js - Loads shared header and footer components with seamless transitions

// Preload next page for seamless transitions
let preloadedPages = {};

// Function to preload a page
async function preloadPage(url) {
    if (!preloadedPages[url]) {
        try {
            const response = await fetch(url);
            const html = await response.text();
            preloadedPages[url] = html;
        } catch (error) {
            console.error(`Error preloading ${url}:`, error);
        }
    }
}

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

// Function to set active navigation item and handle play-only social links with animation
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
        
        // Animate Instagram and Discord icons based on page
        const playOnlySocials = document.querySelectorAll('.play-only-social');
        if (currentPage === 'play.html') {
            playOnlySocials.forEach(el => {
                el.style.display = 'block';
                el.classList.add('social-animate-in');
                setTimeout(() => el.classList.remove('social-animate-in'), 600);
            });
        } else {
            playOnlySocials.forEach(el => {
                if (el.style.display === 'block') {
                    el.classList.add('social-animate-out');
                    setTimeout(() => {
                        el.style.display = 'none';
                        el.classList.remove('social-animate-out');
                    }, 300);
                } else {
                    el.style.display = 'none';
                }
            });
        }
    }, 50);
}

// Preload pages on hover for instant navigation
function setupPreloading() {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (link.href.includes(window.location.origin)) {
                preloadPage(link.href);
            }
        });
    });
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
    
    // Setup preloading after components are loaded
    setTimeout(() => {
        setupPreloading();
    }, 100);
    
    // Preload common pages
    const pages = ['index.html', 'projects.html', 'play.html'];
    pages.forEach(page => {
        if (!window.location.pathname.endsWith(page)) {
            preloadPage(page);
        }
    });
});