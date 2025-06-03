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

// Function to display cameras in a horizontal showcase
function displayCamerasShowcase() {
    const camerasShowcase = document.getElementById('camerasShowcase');
    
    // Display first 4 cameras
    camera.slice(0, 4).forEach((cam, index) => {
        const cameraCard = document.createElement('div');
        cameraCard.className = 'product-card';
        cameraCard.dataset.index = index;
        
        cameraCard.innerHTML = `
            <div class="product-image-container">
                <img src="${cam.image}" alt="${cam.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3>${cam.name}</h3>
                <p>$${cam.pricePerDay} per day</p>
            </div>
        `;
        
        // Add click event to the entire card
        cameraCard.addEventListener('click', () => {
            navigateToProductDetails(index);
        });
        
        camerasShowcase.appendChild(cameraCard);
    });
}

// Function to display lenses in a horizontal showcase
function displayLensesShowcase() {
    const lensesShowcase = document.getElementById('lensesShowcase');
    
    // Display first 4 lenses
    lenses.slice(0, 4).forEach((lens, index) => {
        const lensCard = document.createElement('div');
        lensCard.className = 'product-card';
        
        lensCard.innerHTML = `
            <div class="product-image-container">
                <img src="${lens.image}" alt="${lens.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3>${lens.name}</h3>
                <p>$${lens.pricePerDay} per day</p>
            </div>
        `;
        
        lensesShowcase.appendChild(lensCard);
    });
}

// Function to display accessories in a horizontal showcase
function displayAccessoriesShowcase() {
    const accessoriesShowcase = document.getElementById('accessoriesShowcase');
    
    // Display all accessories
    accessories.forEach((accessory, index) => {
        const accessoryCard = document.createElement('div');
        accessoryCard.className = 'product-card';
        
        accessoryCard.innerHTML = `
            <div class="product-image-container">
                <img src="${accessory.image}" alt="${accessory.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3>${accessory.name}</h3>
                <p>$${accessory.pricePerDay} per day</p>
            </div>
        `;
        
        accessoriesShowcase.appendChild(accessoryCard);
    });
}

// Function to navigate to product details page with correct base URL
function navigateToProductDetails(index) {
    // Store the selected camera index in localStorage
    localStorage.setItem('selectedCameraIndex', index);
    
    // Redirect to the product details page with proper base URL
    window.location.href = BASE_URL + 'product-details.html';
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayCamerasShowcase();
    displayLensesShowcase();
    displayAccessoriesShowcase();
});

  
