const camera = [
    {
      name: "Canon EOS R5",
      pricePerDay: 500,
      image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_4147c002_eos_r5_mirrorless_camera_1594282826_1547009.jpg",
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
    },
    {
      name: "Sony A7 III",
      pricePerDay: 400,
      image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_ilce_7m3_alpha_a7_iii_mirrorless_1519677934_1394217.jpg",
      features: [
        "24.2MP Full-Frame Exmor R BSI Sensor",
        "BIONZ X Image Processor",
        "ISO Range: 100-51200 (Expandable to 204800)",
        "5-Axis In-Body Image Stabilization",
        "4K Video Recording",
        "10 fps Continuous Shooting"
      ],
      mount: "Sony E",
      tags: ["Sony", "A7 III", "Mirrorless", "4K", "5-Axis IS", "24.2MP", "Full-Frame"]
    },
    {
      name: "Nikon Z6 II",
      pricePerDay: 350,
      image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_z_6_ii_mirrorless_1602636707_1597167.jpg",
      features: [
        "24.5MP FX-Format BSI CMOS Sensor",
        "Dual EXPEED 6 Image Processors",
        "ISO Range: 100-51200 (Expandable to 204800)",
        "5-Axis In-Body Image Stabilization",
        "4K UHD Video Recording at 60p",
        "14 fps Continuous Shooting"
      ],
      mount: "Nikon Z",
      tags: ["Nikon", "Z6 II", "Mirrorless", "4K", "5-Axis IS", "24.5MP", "FX-Format"]
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
      tags: ["Sony", "A7R V", "Mirrorless", "8K", "5-Axis IS", "61MP", "Full-Frame"]
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
      tags: ["Canon", "EOS R6 Mark II", "Mirrorless", "4K", "5-Axis IS", "24.2MP", "Full-Frame"]
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
      tags: ["Fujifilm", "X-T5", "Mirrorless", "6.2K", "5-Axis IS", "40.2MP", "APS-C"]
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
      mount: "Panasonic S",
      tags: ["Panasonic", "Lumix S5 II", "Mirrorless", "4K", "5-Axis IS", "24.2MP", "Full-Frame"]
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
      tags: ["Sony", "FX3", "Cinema Camera", "4K", "5-Axis IS", "10.2MP", "Full-Frame"]
    }
];

const lenses = [
    {
        name: "Canon EF 24-105mm f/4L IS USM",
        pricePerDay: 100,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_ef_24_105mm_f_4l_is_1472082712_1274709.jpg",
        mount: "Canon EF",
        tags: ["Canon", "EF 24-105mm f/4L IS USM", "Lenses", "24-105mm", "f/4", "L", "IS", "USM"]
    },
    {
        name: "Sony FE 24-70mm f/2.8 GM",
        pricePerDay: 150,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_sel2470gm_fe_24_70mm_f_2_8_gm_1454496359_1222774.jpg",
        mount: "Sony E",
        tags: ["Sony", "FE 24-70mm f/2.8 GM", "Lenses", "24-70mm", "f/2.8", "GM"]
    },
    {
        name: "Nikon Z 24-70mm f/2.8 S",
        pricePerDay: 120,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_nikkor_z_24_70mm_f_2_8_1550112618_1459622.jpg",
        mount: "Nikon Z",
        tags: ["Nikon", "Z 24-70mm f/2.8 S", "Lenses", "24-70mm", "f/2.8", "S"]
    },
    {
        name: "Fujifilm XF 18-55mm f/2.8-4 R LM OIS",
        pricePerDay: 80,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/fujifilm_16276479_xf_18_55mm_f_2_8_4_r_1348046702_883530.jpg",
        mount: "Fujifilm X",
        tags: ["Fujifilm", "XF 18-55mm f/2.8-4 R LM OIS", "Lenses", "18-55mm", "f/2.8-4", "R", "LM", "OIS"]
    },
    {
        name: "Panasonic Lumix G 20-60mm f/3.5-5.6",
        pricePerDay: 60,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/panasonic_h_fs12032k_lumix_g_vario_12_32mm_1460051326_1028260.jpg",
        mount: "Panasonic S",
        tags: ["Panasonic", "Lumix G 20-60mm f/3.5-5.6", "Lenses", "20-60mm", "f/3.5-5.6", "G", "OSS"]
    },
    {
        name: "Sony FE 70-200mm f/2.8 GM OSS",
        pricePerDay: 180,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_sel70200gm2_fe_70_200mm_f_2_8_gm_1634123153_1666363.jpg",
        mount: "Sony E",
        tags: ["Sony", "FE 70-200mm f/2.8 GM OSS", "Lenses", "70-200mm", "f/2.8", "GM", "OSS"]
    },
    {
        name: "Canon EF 70-200mm f/2.8L IS II USM",
        pricePerDay: 140,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_3044c002_ef_70_200mm_f_2_8l_is_1528329199_1414599.jpg",
        mount: "Canon EF",
        tags: ["Canon", "EF 70-200mm f/2.8L IS II USM", "Lenses", "70-200mm", "f/2.8", "L", "IS", "II", "USM"]
    }
];
const accessories = [
  {
      name: "Manfrotto MVH502AH Pro Video Head",
      pricePerDay: 45,
      image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/manfrotto_mvh502ah_pro_video_head_1416584630_1092523.jpg",
      category: "Tripod",
      tags: ["Manfrotto", "MVH502AH", "Tripod", "Video Head"]
  },
  {
      name: "DJI RS 2 Gimbal Stabilizer",
      pricePerDay: 65,
      image: "https://static.bhphoto.com/images/multiple_images/images500x500/1741108783_IMG_1421700.jpg",
      category: "Gimbal",
      tags: ["DJI", "RS 2", "Gimbal", "Stabilizer"]
  },
  {
      name: "Aputure 120d II LED Light",
      pricePerDay: 55,
      image: "https://cntrcreative.com/wp-content/uploads/2021/12/CNTR-Creative-Rentals-Lights-Aputure-Light-Kit-03.jpg",
      category: "Light",
      tags: ["Aputure", "120d II", "LED", "Light"]
  }
];

// Function to load product details
function loadProductDetails() {
    // Get the selected camera index from localStorage
    const selectedIndex = localStorage.getItem('selectedCameraIndex');
    
    if (selectedIndex === null) {
        // Instead of redirecting, show a message and display all cameras
        const productContainer = document.querySelector('.product-container');
        if (productContainer) {
            productContainer.innerHTML = `
                <div class="error-message">
                    <h2>No camera selected</h2>
                    <p>Please select a camera from our collection below or return to the <a href="index.html">home page</a>.</p>
                </div>
                <div class="product-showcase" id="cameraSuggestions"></div>
            `;
            
            // Display camera suggestions
            const cameraSuggestions = document.getElementById('cameraSuggestions');
            camera.slice(0, 4).forEach((cam, index) => {
                const cameraCard = document.createElement('div');
                cameraCard.className = 'product-card';
                
                cameraCard.innerHTML = `
                    <div class="product-image-container">
                        <img src="${cam.image}" alt="${cam.name}" class="product-image">
                    </div>
                    <div class="product-info">
                        <h3>${cam.name}</h3>
                        <p>$${cam.pricePerDay} per day</p>
                    </div>
                `;
                
                // Add click event to select this camera
                cameraCard.addEventListener('click', () => {
                    localStorage.setItem('selectedCameraIndex', index);
                    location.reload();
                });
                
                cameraSuggestions.appendChild(cameraCard);
            });
            
            return;
        }
    }
    
    const selectedCamera = camera[selectedIndex];
    
    // Set page title
    document.title = `IRaw - ${selectedCamera.name}`;
    
    // Populate product details
    document.getElementById('productImage').src = selectedCamera.image;
    document.getElementById('productImage').alt = selectedCamera.name;
    document.getElementById('productName').textContent = selectedCamera.name;
    document.getElementById('productPrice').textContent = `$${selectedCamera.pricePerDay} per day`;
    
    // Set default date to today
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('rentalDate').value = formattedDate;
    document.getElementById('rentalDate').min = formattedDate;
    
    // Calculate and display total price
    updateTotalPrice(selectedCamera.pricePerDay);
    
    // Add features list
    const featuresList = document.getElementById('featuresList');
    selectedCamera.features.forEach(feature => {
        const listItem = document.createElement('li');
        listItem.textContent = feature;
        featuresList.appendChild(listItem);
    });
    
    // Add event listeners
    document.getElementById('rentalDays').addEventListener('input', () => {
        updateTotalPrice(selectedCamera.pricePerDay);
    });
    
    document.getElementById('rentNowBtn').addEventListener('click', () => {
        rentCamera(selectedCamera);
    });
}

// Function to update total price
function updateTotalPrice(pricePerDay) {
    const days = parseInt(document.getElementById('rentalDays').value) || 1;
    const totalPrice = pricePerDay * days;
    document.getElementById('totalPrice').textContent = `$${totalPrice}`;
}

// Function to handle rental
function rentCamera(camera) {
    const days = parseInt(document.getElementById('rentalDays').value) || 1;
    const startDate = document.getElementById('rentalDate').value;
    
    alert(`Thank you for renting the ${camera.name} for ${days} days starting on ${startDate}. Your total is $${camera.pricePerDay * days}.`);
    
    // In a real application, you would send this data to a server
    console.log({
        camera: camera.name,
        days: days,
        startDate: startDate,
        totalPrice: camera.pricePerDay * days
    });
    
    // Redirect back to the main page
    window.location.href = 'index.html';
}

// Initialize the page
document.addEventListener('DOMContentLoaded', loadProductDetails); 