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

const cameras = [
    {
      name: "Canon EOS R5",
      pricePerDay: 500,
      images: [
        "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_4147c002_eos_r5_mirrorless_camera_1594282826_1547009.jpg",
        "https://static.bhphoto.com/images/multiple_images/images500x500/1746718226_IMG_1384510.jpg",
        "https://static.bhphoto.com/images/multiple_images/images500x500/1746718226_IMG_1384511.jpg"
      ],
      features: [
        "45MP Full-Frame CMOS Sensor",
        "8K RAW Video Recording",
        "DIGIC X Image Processor",
        "5-Axis In-Body Image Stabilization",
        "ISO Range: 100-51200 (Expandable to 102400)",
        "12 fps Mechanical Shutter"
      ],
      mount: "Canon RF",  
      tags: ["Canon", "EOS R5", "Mirrorless", "8K", "5-Axis IS", "45MP", "Full-Frame"],
      description: "The Canon EOS R5 is a high-resolution, high-speed mirrorless camera designed for professional photographers and filmmakers. With 8K video capability and advanced autofocus, it's perfect for versatile shooting situations."
    },
    {
        name: "Canon EOS R6 Mark II",
        pricePerDay: 450,
        images: [
          "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_eos_r6_mark_ii_1667348713_1733214.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1667348143_IMG_1863620.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1667348143_IMG_1863627.jpg",
          "https://static.bhphoto.com/images/multiple_images/images500x500/1667348143_IMG_1863628.jpg"
        ],
        features: [
          "24.2MP Full-Frame CMOS Sensor",
          "DIGIC X Image Processor",
          "ISO Range: 100-102400 (Expandable to 204800)",
          "5-Axis In-Body Image Stabilization",
          "4K60p 10-Bit Video Recording",
          "40 fps Electronic Shutter"
        ],
        mount: "Canon RF",
        tags: ["Canon", "EOS R6 Mark II", "Mirrorless", "4K", "5-Axis IS", "24.2MP", "Full-Frame"],
        description: "The Canon EOS R6 Mark II is a versatile full-frame mirrorless camera that excels in both photography and video. With exceptional low-light performance and fast autofocus, it's ideal for event and action photography."
    },
    {
      name: "Sony A7 III",
      pricePerDay: 400,
      images: [
        "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_ilce_7m3_alpha_a7_iii_mirrorless_1519677934_1394217.jpg",
        "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_ilce_7m3_alpha_a7_iii_mirrorless_1519677934_1394219.jpg",
        "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_ilce_7m3_alpha_a7_iii_mirrorless_1519677934_1394220.jpg"
      ],
      features: [
        "24.2MP Full-Frame Exmor R BSI Sensor",
        "BIONZ X Image Processor",
        "ISO Range: 100-51200 (Expandable to 204800)",
        "5-Axis In-Body Image Stabilization",
        "4K Video Recording",
        "10 fps Continuous Shooting"
      ],
      mount: "Sony E",
      tags: ["Sony", "A7 III", "Mirrorless", "4K", "5-Axis IS", "24.2MP", "Full-Frame"],
      description: "The Sony A7 III is a versatile full-frame mirrorless camera offering an ideal balance of image quality, autofocus performance, speed, and video capability. Perfect for both photography and videography projects."
    },
    {
      name: "Nikon Z6 II",
      pricePerDay: 350,
      images: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_z_6_ii_mirrorless_1602636707_1597167.jpg",
        features: [
        "24.5MP FX-Format BSI CMOS Sensor",
        "Dual EXPEED 6 Image Processors",
        "ISO Range: 100-51200 (Expandable to 204800)",
        "5-Axis In-Body Image Stabilization",
        "4K UHD Video Recording at 60p",
        "14 fps Continuous Shooting"
      ],
      mount: "Nikon Z",
      tags: ["Nikon", "Z6 II", "Mirrorless", "4K", "5-Axis IS", "24.5MP", "FX-Format"],
      description: "The Nikon Z6 II is a versatile FX-format mirrorless camera with professional photo and video features. Its 24.5MP BSI sensor delivers exceptional image quality even in low light conditions."
    },
    {
      name: "Sony A7R V",
      pricePerDay: 600,
      image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_alpha_camera_1666779545_1731389.jpg",
        features: [
        "61MP Full-Frame Exmor R BSI Sensor",
        "BIONZ XR Image Processor",
        "ISO Range: 100-32000 (Expandable to 102400)",
        "8K Video Recording",
        "5-Axis In-Body Image Stabilization",
        "10 fps Continuous Shooting"
      ],
      mount: "Sony E",
      tags: ["Sony", "A7R V", "Mirrorless", "8K", "5-Axis IS", "61MP", "Full-Frame"],
      description: "The Sony A7R V is a high-resolution powerhouse with a 61MP sensor, perfect for landscape, commercial, and studio photography where detail is paramount. Its advanced AI-based autofocus system ensures precise subject tracking."
    },
    {
      name: "Canon EOS R6 Mark II",
      pricePerDay: 450,
      image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_eos_r6_mark_ii_1667348713_1733214.jpg",
      features: [
        "24.2MP Full-Frame CMOS Sensor",
        "DIGIC X Image Processor",
        "ISO Range: 100-102400 (Expandable to 204800)",
        "5-Axis In-Body Image Stabilization",
        "4K60p 10-Bit Video Recording",
        "40 fps Electronic Shutter"
      ],
      mount: "Canon RF",
      tags: ["Canon", "EOS R6 Mark II", "Mirrorless", "4K", "5-Axis IS", "24.2MP", "Full-Frame"],
      description: "The Canon EOS R6 Mark II is a versatile full-frame mirrorless camera that excels in both photography and video. With exceptional low-light performance and fast autofocus, it's ideal for event and action photography."
    },
    {
      name: "Fujifilm X-T5",
      pricePerDay: 300,
      image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/fujifilm_16782337_x_t5_mirrorless_camera_silver_1667382377_1731282.jpg",
      features: [
        "40.2MP APS-C X-Trans CMOS 5 HR Sensor",
        "X-Processor 5 Image Processor",
        "ISO Range: 125-12800 (Expandable to 51200)",
        "5-Axis In-Body Image Stabilization",
        "6.2K/30p Video Recording",
        "15 fps Mechanical Shutter"
      ],
      mount: "Fujifilm X",
      tags: ["Fujifilm", "X-T5", "Mirrorless", "6.2K", "5-Axis IS", "40.2MP", "APS-C"],
      description: "The Fujifilm X-T5 combines classic film camera styling with modern digital capabilities. Its APS-C sensor delivers exceptional image quality with Fujifilm's renowned color science and film simulations."
    },
    {
      name: "Panasonic Lumix S5 II",
      pricePerDay: 380,
      image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/panasonic_dc_s5m2body_lumix_s5_ii_mirrorless_1672825656_1742428.jpg",
      features: [
        "24.2MP Full-Frame CMOS Sensor",
        "Hybrid Phase-Detection AF System",
        "ISO Range: 100-51200 (Expandable to 204800)",
        "5-Axis In-Body Image Stabilization",
        "4K60p 10-Bit Video Recording",
        "7 fps Mechanical Shutter"
      ],
      mount: "L-Mount",
      tags: ["Panasonic", "Lumix S5 II", "Mirrorless", "4K", "5-Axis IS", "24.2MP", "Full-Frame"],
      description: "The Panasonic Lumix S5 II is a compact full-frame mirrorless camera with exceptional video capabilities. Its new phase-detection autofocus system makes it ideal for hybrid shooters who need reliable performance for both stills and video."
    },
    {
      name: "Sony FX3",
      pricePerDay: 700,
      image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_ilme_fx3a_fx3_full_frame_cinema_camera_1746547141_1894322.jpg",
      features: [
        "10.2MP Full-Frame Exmor R BSI Sensor",
        "BIONZ XR Image Processor",
        "ISO Range: 80-102400 (Expandable to 409600)",
        "5-Axis In-Body Image Stabilization",
        "4K120p & 10-Bit 4:2:2 Video Recording",
        "S-Cinetone Color Profile"
      ],
      mount: "Sony E",
      tags: ["Sony", "FX3", "Cinema Camera", "4K", "5-Axis IS", "10.2MP", "Full-Frame"],
      description: "The Sony FX3 is a compact cinema camera designed for professional filmmakers. With its full-frame sensor, advanced video features, and cinema-optimized controls, it's perfect for documentary, commercial, and narrative filmmaking."
    }
];

const lenses = [
    {
        name: "Canon RF 24-70mm f/2.8L IS USM",
        pricePerDay: 120,
        images: [
          "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_3680c002_rf_24_70mm_f_2_8l_is_1566949680_1502500.jpg",
          "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_rf_24_70mm_f_2_8l_is_1566949680_1502501.jpg",
          "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_rf_24_70mm_f_2_8l_is_1566949680_1502502.jpg"
        ],
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_3680c002_rf_24_70mm_f_2_8l_is_1566949680_1502500.jpg",
        mount: "Canon RF",
        tags: ["Canon", "RF 24-70mm f/2.8L IS USM", "Zoom", "24-70mm", "f/2.8", "L", "IS", "USM"],
        description: "The Canon RF 24-70mm f/2.8L IS USM is a versatile standard zoom lens with a constant f/2.8 aperture. With built-in image stabilization and professional-grade optics, it delivers exceptional image quality across its zoom range."
    },
    {
        name: "Sony FE 24-70mm f/2.8 GM",
        pricePerDay: 150,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_sel2470gm_fe_24_70mm_f_2_8_gm_1454496359_1222774.jpg",
        mount: "Sony E",
        tags: ["Sony", "FE 24-70mm f/2.8 GM", "Zoom", "24-70mm", "f/2.8", "GM"],
        description: "The Sony FE 24-70mm f/2.8 GM is a professional standard zoom lens that combines a versatile range with outstanding G Master resolution and bokeh. Perfect for portraits, landscapes, and everyday shooting."
    },
    {
        name: "Nikon Z 24-70mm f/2.8 S",
        pricePerDay: 120,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_nikkor_z_24_70mm_f_2_8_1550112618_1459622.jpg",
        mount: "Nikon Z",
        tags: ["Nikon", "Z 24-70mm f/2.8 S", "Zoom", "24-70mm", "f/2.8", "S"],
        description: "The Nikon Z 24-70mm f/2.8 S is a professional standard zoom designed for Nikon's mirrorless Z system. It delivers edge-to-edge sharpness, beautiful bokeh, and excellent low-light performance throughout its zoom range."
    },
    {
        name: "Canon RF 50mm f/1.2L USM",
        pricePerDay: 135,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_rf_50mm_f_1_2l_usm_1536121266_1433715.jpg",
        mount: "Canon RF",
        tags: ["Canon", "RF 50mm f/1.2L USM", "Prime", "50mm", "f/1.2", "L", "USM"],
        description: "The Canon RF 50mm f/1.2L USM is a professional portrait lens with an ultra-fast aperture. It delivers stunning bokeh, exceptional sharpness even wide open, and beautiful color rendition for professional portrait and wedding photographers."
    },
    {
        name: "Sony FE 85mm f/1.4 GM",
        pricePerDay: 120,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_sel85f14gm_fe_85mm_f_1_4_gm_1454496359_1222775.jpg",
        mount: "Sony E",
        tags: ["Sony", "FE 85mm f/1.4 GM", "Prime", "85mm", "f/1.4", "GM"],
        description: "The Sony FE 85mm f/1.4 GM is a professional portrait lens that combines exceptional sharpness with beautiful bokeh. Part of Sony's G Master series, it's designed for the most demanding portrait photographers."
    },
    {
        name: "Nikon Z 35mm f/1.8 S",
        pricePerDay: 80,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_20081_nikkor_z_35mm_f_1_8_1534992913_1431709.jpg",
        mount: "Nikon Z",
        tags: ["Nikon", "Z 35mm f/1.8 S", "Prime", "35mm", "f/1.8", "S"],
        description: "The Nikon Z 35mm f/1.8 S is a versatile prime lens for Nikon's Z-mount system. With its moderately wide field of view and bright aperture, it's perfect for street photography, environmental portraits, and everyday shooting."
    },
    {
        name: "Fujifilm XF 56mm f/1.2 R",
        pricePerDay: 90,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/fujifilm_xf_56mm_f_1_2_r_1389204724_1021630.jpg",
        mount: "Fujifilm X",
        tags: ["Fujifilm", "XF 56mm f/1.2 R", "Prime", "56mm", "f/1.2", "R"],
        description: "The Fujifilm XF 56mm f/1.2 R is a fast portrait lens for Fujifilm's X-series cameras. With its 85mm full-frame equivalent focal length and bright f/1.2 aperture, it's perfect for portraits with beautiful background blur."
    },
    {
        name: "Sony FE 16-35mm f/2.8 GM",
        pricePerDay: 140,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_sel1635gm_fe_16_35mm_f_2_8_gm_1495045697_1333230.jpg",
        mount: "Sony E",
        tags: ["Sony", "FE 16-35mm f/2.8 GM", "Zoom", "16-35mm", "f/2.8", "GM", "Wide-angle"],
        description: "The Sony FE 16-35mm f/2.8 GM is a professional wide-angle zoom lens that delivers exceptional corner-to-corner sharpness and beautiful bokeh. Perfect for landscapes, architecture, and environmental portraits."
    }
];

const accessories = [
  {
      name: "Manfrotto MVH502AH Pro Video Head",
      pricePerDay: 45,
      image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/manfrotto_mvh502ah_pro_video_head_1416584630_1092523.jpg",
      category: "Tripod",
        tags: ["Manfrotto", "MVH502AH", "Tripod", "Video Head"],
        description: "The Manfrotto MVH502AH Pro Video Head is a professional fluid head designed for video production. It provides smooth pan and tilt movements and supports camera rigs up to 7kg/15.4lbs."
  },
  {
      name: "DJI RS 2 Gimbal Stabilizer",
      pricePerDay: 65,
      image: "https://static.bhphoto.com/images/multiple_images/images500x500/1741108783_IMG_1421700.jpg",
      category: "Gimbal",
        tags: ["DJI", "RS 2", "Gimbal", "Stabilizer"],
        description: "The DJI RS 2 is a professional 3-axis gimbal stabilizer for mirrorless and DSLR cameras. Its carbon fiber construction, powerful motors, and intelligent features make it perfect for professional filmmakers."
  },
  {
      name: "Aputure 120d II LED Light",
      pricePerDay: 55,
      image: "https://cntrcreative.com/wp-content/uploads/2021/12/CNTR-Creative-Rentals-Lights-Aputure-Light-Kit-03.jpg",
      category: "Light",
        tags: ["Aputure", "120d II", "LED", "Light"],
        description: "The Aputure 120d II is a professional daylight-balanced LED light with exceptional output and color accuracy. It's perfect for filmmakers and photographers who need reliable, high-quality lighting."
    },
    {
        name: "Rode VideoMic Pro+",
        pricePerDay: 25,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/rode_videomic_pro_on_camera_shotgun_1502285388_1361335.jpg",
        category: "Audio",
        tags: ["Rode", "VideoMic Pro+", "Microphone", "Audio"],
        description: "The Rode VideoMic Pro+ is a premium on-camera shotgun microphone that delivers broadcast-quality audio. Its directional pickup pattern focuses on the subject while reducing background noise."
    },
    {
        name: "Atomos Ninja V",
        pricePerDay: 75,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/atomos_atomnjav01_ninja_v_5_4k_1524583508_1393958.jpg",
        category: "Monitor/Recorder",
        tags: ["Atomos", "Ninja V", "Monitor", "Recorder", "4K", "HDR"],
        description: "The Atomos Ninja V is a 5-inch HDR monitor-recorder that captures 4K video in 10-bit quality. It's the perfect companion for mirrorless and DSLR cameras, enabling higher quality recording than the camera's internal capabilities."
  }
];

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
    mainImage.src = selectedProduct.image;
    mainImage.alt = selectedProduct.name;
    
    // Populate thumbnails if multiple images exist
    const thumbnailsContainer = document.getElementById('productThumbnails');
    thumbnailsContainer.innerHTML = '';
    
    if (selectedProduct.images && selectedProduct.images.length > 0) {
        selectedProduct.images.forEach((imgSrc, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumbnail.innerHTML = `<img src="${imgSrc}" alt="${selectedProduct.name} - View ${index + 1}">`;
            
            // Add click event to switch main image
            thumbnail.addEventListener('click', () => {
                mainImage.src = imgSrc;
                // Update active state
                document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
                thumbnail.classList.add('active');
            });
            
            thumbnailsContainer.appendChild(thumbnail);
        });
    }
    
    document.getElementById('productName').textContent = selectedProduct.name;
    document.getElementById('productPrice').textContent = `$${selectedProduct.pricePerDay} per day`;
    
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
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="compatible-product-img">
                <div class="compatible-product-info">
                    <h3>${product.name}</h3>
                    <p>$${product.pricePerDay}/day</p>
                </div>
            `;
            
            // Add click event to view this product
            productCard.addEventListener('click', () => {
                const targetType = productType === 'camera' ? 'lens' : 'camera';
                window.location.href = `product-details.html?type=${targetType}&id=${index}`;
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
                customOptions.style.display = 'block';
                updateTotalPrice(pricePerDay, rentalDaysInput.value);
            } else {
                customOptions.style.display = 'none';
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
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
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

// Load product details when page loads
document.addEventListener('DOMContentLoaded', loadProductDetails); 