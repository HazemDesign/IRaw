// Handle GitHub Pages base URL
const getBaseUrl = () => {
    // Get the repository name from the URL if on GitHub Pages
    const pathSegments = window.location.pathname.split('/');
    // If on GitHub Pages (contains repo name in URL path)
    if (window.location.hostname.includes('github.io')) {
        return '/' + pathSegments[1] + '/'; // Returns '/repo-name/'
    }
    return '/'; // Local development
};

const BASE_URL = getBaseUrl();

// Debug function to detect and stop infinite reload loops
(function() {
    // Only run on GitHub Pages
    if (!window.location.hostname.includes('github.io')) return;
    
    // Check for infinite reload
    const now = new Date().getTime();
    const lastReload = sessionStorage.getItem('lastReload');
    const reloadCount = parseInt(sessionStorage.getItem('reloadCount') || '0');
    
    // Update reload tracking
    sessionStorage.setItem('lastReload', now);
    sessionStorage.setItem('reloadCount', reloadCount + 1);
    
    // If reloading too frequently (less than 2 seconds between reloads)
    // and we've reloaded more than 3 times, break the cycle
    if (lastReload && (now - lastReload < 2000) && reloadCount > 3) {
        console.error('Infinite reload detected! Stopping cycle.');
        // Add a parameter to the URL to break the loop
        if (!window.location.search.includes('no_reload=true')) {
            window.location.search = 'no_reload=true';
            // Force stop any further execution
            throw new Error('Breaking infinite reload cycle');
        }
    }
    
    // Reset counter after 10 seconds of no reloads
    if (lastReload && (now - lastReload > 10000)) {
        sessionStorage.setItem('reloadCount', '0');
    }
    
    console.log(`Page load #${reloadCount+1}. URL: ${window.location.href}`);
})();

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Populate product showcases on the home page
    populateShowcase('camerasShowcase', cameras, 4, 'camera');
    populateShowcase('lensesShowcase', lenses, 4, 'lens');
    populateShowcase('accessoriesShowcase', accessories, 4, 'accessory');
});

// Function to populate product showcases
function populateShowcase(containerId, productsArray, limit, productType) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Clear existing content
    container.innerHTML = '';
    
    // Get the first 'limit' products or all if less than 'limit'
    const products = productsArray.slice(0, limit);
    
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.pricePerDay} per day</p>
            </div>
        `;
        
        // Add click event to view product details
        productCard.addEventListener('click', () => {
            window.location.href = `HTML/product-details.html?type=${productType}&id=${index}`;
        });
        
        container.appendChild(productCard);
    });
}

  
