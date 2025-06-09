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
        name: "Canon EOS 5D Mark IV",
        pricePerDay: 400,
        images: [
            "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_eos_5d_mark_iv_1561852319_1274705.jpg",
            "https://static.bhphoto.com/images/multiple_images/images500x500/1566492484_IMG_674215.jpg",
            "https://static.bhphoto.com/images/multiple_images/images500x500/1566492484_IMG_674216.jpg"
            
        ],
        features: [
            "30.4MP Full-Frame CMOS Sensor",
            "DIGIC 6+ Image Processor",
            "ISO Range: 100-32000 (Expandable to 102400)",
            "61-Point AF System"
        ],
        mount: "Canon EF",
        tags: ["Canon", "5D Mark IV", "Full-Frame", "30.4MP", "61-Point AF", "DIGIC 6+"],
        description: "The Canon EOS 5D Mark IV is a professional full-frame DSLR camera known for its high-resolution image quality and versatile shooting capabilities. It's ideal for landscape, portrait, and event photography."
    },
    {
        name: "Canon EOS R",
        pricePerDay: 300,
        images: [
            "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_3075c002_eos_r_mirrorless_camera_1536120359_1433710.jpg",
            "https://static.bhphoto.com/images/multiple_images/images500x500/1536120910_IMG_1061041.jpg",
            "https://static.bhphoto.com/images/multiple_images/images500x500/1536120910_IMG_1061042.jpg"
        ],
        features: [
            "24.2MP Full-Frame CMOS Sensor",
            "DIGIC X Image Processor",
            "ISO Range: 100-102400 (Expandable to 204800)",
            "5-Axis In-Body Image Stabilization"
        ],
        mount: "Canon RF",
        tags: ["Canon", "EOS R", "Mirrorless", "24.2MP", "Full-Frame", "DIGIC X", "5-Axis IS"],
        description: "The Canon EOS R is a high-resolution, high-speed mirrorless camera designed for professional photographers and filmmakers. With 8K video capability and advanced autofocus, it's perfect for versatile shooting situations."
    },
    {
        name: "Canon M50 Mark II",
        pricePerDay: 300,
        images: [
            "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_2680c001_eos_m50_mirrorless_digital_1519599039_1393460.jpg",
            "https://static.bhphoto.com/images/multiple_images/images500x500/1519599660_IMG_949176.jpg",
            "https://static.bhphoto.com/images/multiple_images/images500x500/1519599660_IMG_949177.jpg"
        ],
        features: [
            "24.1MP APS-C CMOS Sensor",
            "DIGIC 8 Image Processor",
            "ISO Range: 100-25600 (Expandable to 51200)",
            "5-Axis In-Body Image Stabilization",
            "4K60p 10-Bit Video Recording",
            "15 fps Mechanical Shutter"
        ],
        mount: "Canon EF-M",
        tags: ["Canon", "M50 Mark II", "Mirrorless", "4K", "5-Axis IS", "24.1MP", "APS-C"],
        description: "The Canon M50 Mark II is a compact mirrorless camera designed for beginners and casual photographers. It offers a lightweight, easy-to-use experience with 4K video capabilities and a versatile lens system."
    },
    { name: "Sony A7 III",
      pricePerDay: 400,
      images: [
        "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_ilce_7m3_alpha_a7_iii_mirrorless_1519677934_1394217.jpg",
        "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://static.bhphoto.com/images/multiple_images/images500x500/1519677919_IMG_949926.jpg",
        "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://static.bhphoto.com/images/multiple_images/images500x500/1519677919_IMG_949927.jpg"
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
    { name: "Nikon Z6 II",
      pricePerDay: 350,
      image: "https://static.bhphoto.com/images/images500x500/1602636707_1597167.jpg",
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
    { name: "Sony A7R V",
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
        name:"Canon EF 50mm f/1.8 STM",
        pricePerDay: 100,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_0570c002_ef_50mm_f_1_8_stm_1431301825_1143786.jpg",
        mount: "Canon EF",
        tags: ["Canon", "EF 50mm f/1.8 STM", "Prime", "50mm", "f/1.8", "STM"],
        description: "The Canon EF 50mm f/1.8 STM is a classic portrait lens with a fast f/1.8 aperture. It's perfect for everyday shooting and portraits with beautiful background blur."
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
    }
];

// Export all the data
export { cameras, lenses, accessories, BASE_URL, getBaseUrl }; 