// Import data from database.js
import { cameras, lenses, accessories, BASE_URL } from './database.js';
// Import utility functions
import { handleImageError } from './utils.js';

// Function to load product details
function loadProductDetails() {
    // Get query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productType = urlParams.get('type'); // 'camera', 'lens', or 'accessory'
    const productId = urlParams.get('id');
    
    let selectedProduct;
    let compatibleProducts = [];
    let productArray;
    
    // Set today as the minimum date for rental
    const today = new Date();
    const dateInput = document.getElementById('rentalDate');
    dateInput.min = today.toISOString().split('T')[0];
    dateInput.value = today.toISOString().split('T')[0];
    
    // Determine which array to use based on product type
    if (productType === 'camera') {
        productArray = cameras;
        document.getElementById('compatibleSectionTitle').textContent = 'Compatible Lenses';
    } else if (productType === 'lens') {
        productArray = lenses;
        document.getElementById('compatibleSectionTitle').textContent = 'Compatible Cameras';
    } else if (productType === 'accessory') {
        productArray = accessories;
        // Hide compatible section for accessories
        document.getElementById('compatibleProductsSection').style.display = 'none';
    } else {
        // Default to cameras if no type specified
        productArray = cameras;
        document.getElementById('compatibleSectionTitle').textContent = 'Compatible Lenses';
    }
    
    // Find the selected product
    if (productId !== null && !isNaN(productId)) {
        const index = parseInt(productId);
        if (index >= 0 && index < productArray.length) {
            selectedProduct = productArray[index];
        }
    }
    
    // If no valid product found, show the first product
    if (!selectedProduct && productArray.length > 0) {
        selectedProduct = productArray[0];
    }
    
    // If still no product found, show error message
    if (!selectedProduct) {
        const productContainer = document.querySelector('.product-details-container');
        if (productContainer) {
            productContainer.innerHTML = `
                <div class="error-message">
                    <h2>Product not found</h2>
                    <p>Please return to the <a href="${BASE_URL}index.html">home page</a>.</p>
                </div>
            `;
        }
        return;
    }
    
    // Populate product details - Main image
    const mainImage = document.getElementById('productMainImage');
    // Use the first image from the images array if available, otherwise fall back to the single image
    const mainImageSrc = selectedProduct.images && selectedProduct.images.length > 0 
        ? selectedProduct.images[0] 
        : selectedProduct.image;
    
    // Use handleImageError for the main product image
    handleImageError(mainImage, mainImageSrc);
    mainImage.alt = selectedProduct.name;
    
    // Populate thumbnails if multiple images exist
    const thumbnailsContainer = document.getElementById('productThumbnails');
    thumbnailsContainer.innerHTML = '';
    
    if (selectedProduct.images && selectedProduct.images.length > 0) {
        selectedProduct.images.forEach((imgSrc, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            
            // Create image element for thumbnail
            const thumbImg = document.createElement('img');
            thumbImg.alt = `${selectedProduct.name} - View ${index + 1}`;
            
            // Use handleImageError for thumbnail images
            handleImageError(thumbImg, imgSrc);
            
            // Add click event to switch main image
            thumbnail.addEventListener('click', () => {
                // Use handleImageError for changing the main image
                handleImageError(mainImage, imgSrc);
                
                // Update active state
                document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
                thumbnail.classList.add('active');
            });
            
            thumbnail.appendChild(thumbImg);
            thumbnailsContainer.appendChild(thumbnail);
        });
    }
    
    // Initialize swipe functionality for mobile
    if (selectedProduct.images && selectedProduct.images.length > 0 && window.innerWidth <= 768) {
        initSwipeGallery(selectedProduct.images, mainImage);
    }
    
    document.getElementById('productName').textContent = selectedProduct.name;
    document.getElementById('productPrice').textContent = `LE ${selectedProduct.pricePerDay} / day`;
    
    // Update product description if available
    if (selectedProduct.description) {
        document.getElementById('productDescription').textContent = selectedProduct.description;
    }
    
    // Populate features list
    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = '';
    if (selectedProduct.features) {
        selectedProduct.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }
    
    // Find compatible products
    if (productType === 'camera' && selectedProduct.mount) {
        // Find lenses that match the camera mount
        compatibleProducts = lenses.filter(lens => lens.mount === selectedProduct.mount);
    } else if (productType === 'lens' && selectedProduct.mount) {
        // Find cameras that match the lens mount
        compatibleProducts = cameras.filter(camera => camera.mount === selectedProduct.mount);
    }
    
    // Populate compatible products
    const compatibleProductsContainer = document.getElementById('compatibleProducts');
    compatibleProductsContainer.innerHTML = '';
    
    if (compatibleProducts.length === 0) {
        compatibleProductsContainer.innerHTML = '<p>No compatible products found.</p>';
    } else {
        compatibleProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'compatible-product-card';
            
            // Create container for product info
            const infoContainer = document.createElement('div');
            infoContainer.className = 'compatible-product-info';
            
            // Create title and price elements
            const titleElement = document.createElement('h3');
            titleElement.textContent = product.name;
            
            const priceElement = document.createElement('p');
            priceElement.textContent = `LE ${product.pricePerDay}/day`;
            
            // Check if the product has an images array or a single image property
            const productImageSrc = (product.images && product.images.length > 0) ? product.images[0] : product.image;
            
            // Create image element
            const imgElement = document.createElement('img');
            imgElement.className = 'compatible-product-img';
            imgElement.alt = product.name;
            
            // Use handleImageError for compatible product images
            handleImageError(imgElement, productImageSrc);
            
            // Append elements to card
            infoContainer.appendChild(titleElement);
            infoContainer.appendChild(priceElement);
            
            productCard.appendChild(imgElement);
            productCard.appendChild(infoContainer);
            
            // Add click event to view this product
            productCard.addEventListener('click', () => {
                const targetType = productType === 'camera' ? 'lens' : 'camera';
                // Find the actual index in the original array
                let originalArrayIndex;
                if (targetType === 'lens') {
                    originalArrayIndex = lenses.findIndex(item => item.name === product.name);
                } else {
                    originalArrayIndex = cameras.findIndex(item => item.name === product.name);
                }
                window.location.href = `product-details.html?type=${targetType}&id=${originalArrayIndex}`;
            });
            
            compatibleProductsContainer.appendChild(productCard);
        });
    }
    
    // Initialize rental duration buttons
    initRentalOptions(selectedProduct.pricePerDay);
    
    // Initialize horizontal scrolling for compatible products
    initHorizontalScroll();
}

// Initialize rental duration options
function initRentalOptions(pricePerDay) {
    const rentalBoxes = document.querySelectorAll('.rental-box');
    const customOptions = document.getElementById('customDurationOptions');
    const rentalDaysInput = document.getElementById('rentalDays');
    const totalPriceElement = document.getElementById('totalPrice');
    
    // Set initial price (1 day by default)
    updateTotalPrice(pricePerDay, 1);
    
    // Add event listeners to rental duration boxes
    rentalBoxes.forEach(box => {
        const radio = box.querySelector('input[type="radio"]');
        
        radio.addEventListener('change', () => {
            const hours = box.getAttribute('data-hours');
            
            // Show/hide custom options
            if (hours === 'custom') {
                customOptions.classList.add('active');
                updateTotalPrice(pricePerDay, rentalDaysInput.value);
            } else {
                customOptions.classList.remove('active');
                // Calculate price based on hours (12hrs = 0.5 days, 24hrs = 1 day)
                const days = hours === '12' ? 0.5 : 1;
                updateTotalPrice(pricePerDay, days);
            }
        });
    });
    
    // Add event listener to custom days input
    rentalDaysInput.addEventListener('change', () => {
        if (document.getElementById('rental-custom').checked) {
            updateTotalPrice(pricePerDay, rentalDaysInput.value);
        }
    });
    
    // Rent Now button
    const rentNowBtn = document.getElementById('rentNowBtn');
    rentNowBtn.addEventListener('click', () => {
        // Get selected duration
        let duration;
        const selectedRadio = document.querySelector('input[name="rental-duration"]:checked');
        
        if (selectedRadio.value === 'custom') {
            duration = rentalDaysInput.value + ' days';
        } else if (selectedRadio.value === '12') {
            duration = '12 hours';
        } else {
            duration = '1 day';
        }
        
        // Get selected date
    const startDate = document.getElementById('rentalDate').value;
    
        // Show confirmation (placeholder for real functionality)
        alert(`Rental request submitted!\n\nProduct: ${document.getElementById('productName').textContent}\nDuration: ${duration}\nStart Date: ${startDate}\nTotal: ${totalPriceElement.textContent}`);
    });
}

// Function to update the total price
function updateTotalPrice(pricePerDay, days) {
    const totalPriceElement = document.getElementById('totalPrice');
    const total = pricePerDay * days;
    totalPriceElement.textContent = `LE ${total.toFixed(2)}`;
}

// Initialize horizontal scrolling for compatible products
function initHorizontalScroll() {
    const scrollContainer = document.querySelector('.compatible-products-grid');
    const leftArrow = document.querySelector('.scroll-left');
    const rightArrow = document.querySelector('.scroll-right');
    
    if (!scrollContainer || !leftArrow || !rightArrow) return;
    
    // Calculate scroll amount based on screen width
    function getScrollAmount() {
        // On mobile, scroll one full item width (approximately 50% of container)
        if (window.innerWidth <= 768) {
            return scrollContainer.clientWidth * 0.5; // 50% of container width (1 item)
        }
        // On desktop, scroll about 2-3 items
        return scrollContainer.clientWidth * 0.4; // 40% of container width
    }
    
    // Scroll left when left arrow is clicked
    leftArrow.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });
    
    // Scroll right when right arrow is clicked
    rightArrow.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });
    
    // Check scroll position to hide/show arrows
    function checkScrollPosition() {
        const isAtStart = scrollContainer.scrollLeft === 0;
        const isAtEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 5;
        
        leftArrow.style.display = isAtStart ? 'none' : 'flex';
        
        rightArrow.style.display = isAtEnd ? 'none' : 'flex';
    }
    
    // Listen for scroll events
    scrollContainer.addEventListener('scroll', checkScrollPosition);
    
    // Initial check
    checkScrollPosition();
    
    // Recheck on window resize and recalculate scroll amount
    window.addEventListener('resize', () => {
        checkScrollPosition();
    });
}

// Function to initialize swipe gallery for mobile
function initSwipeGallery(images, mainImage) {
    if (!images || images.length <= 1) return;
    
    const mainImageContainer = document.querySelector('.main-image-container');
    let currentImageIndex = 0;
    let startX, moveX, initialX;
    let isSwiping = false;
    
    // Create swipe indicators
    const swipeIndicators = document.createElement('div');
    swipeIndicators.className = 'swipe-indicators';
    
    // Add indicator dots
    for (let i = 0; i < images.length; i++) {
        const indicator = document.createElement('div');
        indicator.className = `swipe-indicator ${i === 0 ? 'active' : ''}`;
        swipeIndicators.appendChild(indicator);
    }
    
    // Add indicators to container
    mainImageContainer.appendChild(swipeIndicators);
    
    // Function to update the active indicator
    function updateIndicators(index) {
        const indicators = swipeIndicators.querySelectorAll('.swipe-indicator');
        indicators.forEach((ind, i) => {
            if (i === index) {
                ind.classList.add('active');
            } else {
                ind.classList.remove('active');
            }
        });
    }
    
    // Touch start event
    mainImageContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        initialX = startX;
        isSwiping = true;
        mainImage.classList.remove('swiping');
    }, { passive: true });
    
    // Touch move event
    mainImageContainer.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        
        moveX = e.touches[0].clientX;
        const diffX = moveX - startX;
        
        // Add a transform to show movement
        mainImage.style.transform = `translateX(${diffX * 0.5}px)`;
    }, { passive: true });
    
    // Touch end event
    mainImageContainer.addEventListener('touchend', (e) => {
        if (!isSwiping) return;
        
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - initialX;
        
        mainImage.classList.add('swiping');
        mainImage.style.transform = '';
        
        // If swipe distance is significant enough, change image
        if (Math.abs(diffX) > 50) {
            if (diffX > 0 && currentImageIndex > 0) {
                // Swipe right - show previous image
                currentImageIndex--;
            } else if (diffX < 0 && currentImageIndex < images.length - 1) {
                // Swipe left - show next image
                currentImageIndex++;
            }
            
            // Update the image
            handleImageError(mainImage, images[currentImageIndex]);
            
            // Update active thumbnail if visible
            const thumbnails = document.querySelectorAll('.thumbnail');
            if (thumbnails.length > 0) {
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                if (thumbnails[currentImageIndex]) {
                    thumbnails[currentImageIndex].classList.add('active');
                }
            }
            
            // Update indicators
            updateIndicators(currentImageIndex);
        }
        
        isSwiping = false;
    }, { passive: true });
    
    // Add click events for the arrow indicators
    mainImageContainer.addEventListener('click', (e) => {
        // Check if click is on the left third of the image
        const containerWidth = mainImageContainer.offsetWidth;
        const clickX = e.offsetX;
        
        if (clickX < containerWidth / 3 && currentImageIndex > 0) {
            // Left side click - previous image
            currentImageIndex--;
            handleImageError(mainImage, images[currentImageIndex]);
            updateIndicators(currentImageIndex);
        } else if (clickX > (containerWidth * 2 / 3) && currentImageIndex < images.length - 1) {
            // Right side click - next image
            currentImageIndex++;
            handleImageError(mainImage, images[currentImageIndex]);
            updateIndicators(currentImageIndex);
        }
    });
}

// Load product details when page loads
document.addEventListener('DOMContentLoaded', loadProductDetails); 