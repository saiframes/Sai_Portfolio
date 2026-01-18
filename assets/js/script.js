// ✅ SAI FRAMES - UPGRADED GRID GALLERY WITH ZOOM EFFECTS
const projectImages = {
    // 1. Corporate Photography (24 images)
    corporate: ['corporate1.jpg', 'corporate2.jpg', 'corporate3.jpg', 'corporate4.jpg', 'corporate5.jpg',
        'corporate6.jpg', 'corporate7.jpg', 'corporate8.jpg', 'corporate9.jpg', 'corporate10.jpg',
        'corporate11.jpg', 'corporate12.jpg', 'corporate13.jpg', 'corporate14.jpg', 'corporate15.jpg',
        'corporate16.jpg'],

    // 2. E-commerce Photography (9 images)
    ecommerce: ['ecommerce1.jpg', 'ecommerce2.jpg', 'ecommerce3.jpg', 'ecommerce4.jpg', 'ecommerce5.jpg', 'ecommerce6.jpg', 'ecommerce7.jpg', 'ecommerce8.jpg', 'ecommerce9.jpg'],

    // 3. Fashion Photography (17 images)
    fashion: ['fashion1.jpg', 'fashion2.jpg', 'fashion3.jpg', 'fashion4.jpg', 'fashion5.jpg', 'fashion6.jpg', 'fashion7.jpg', 'fashion8.jpg', 'fashion9.jpg', 'fashion10.jpg', 'fashion11.jpg', 'fashion12.jpg', 'fashion13.jpg', 'fashion14.jpg', 'fashion15.jpg', 'fashion16.jpg', 'fashion17.jpg',],

    // 4. Natural Photography (6 images)
    natural: ['natural1.jpg', 'natural2.jpg', 'natural3.jpg', 'natural4.jpg', 'natural5.jpg', 'natural6.jpg'],

    // 5. Product Photography (10 images)
    product: ['product1.jpg', 'product2.jpg', 'product3.jpg', 'product4.jpg', 'product5.jpg', 'product6.jpg', 'product7.jpg', 'product8.jpg', 'product9.jpg', 'product10.jpg'],

    // 6. Sports Photography (8 images)
    sports: ['sports1.jpg', 'sports2.jpg', 'sports3.jpg', 'sports4.jpg', 'sports5.jpg', 'sports6.jpg', 'sports7.jpg', 'sports8.jpg'],

    // 7. Street Photography (12 images)
    street: ['street1.jpg', 'street2.jpg', 'street3.jpg', 'street4.jpg', 'street5.jpg', 'street6.jpg', 'street7.jpg', 'street8.jpg', 'street9.jpg', 'street10.jpg', 'street11.jpg', 'street12.jpg'],

    // 8. Wedding Photography (3 images)
    wedding: ['wedding1.jpg', 'wedding2.jpg', 'wedding3.jpg'],

    // 9. event Photography (3 images)
    event: ['event1.jpg', 'event2.jpg', 'event3.jpg']
};

const imageGrid = document.getElementById('imageGrid');
const tabBtns = document.querySelectorAll('.tab-btn');

// ✅ 1. LOAD GALLERY FOR SELECTED CATEGORY
function loadGallery(category) {
    // ✅ Safety check (prevents JS errors on pages without gallery)
    if (!imageGrid || !projectImages[category]) return;

    const images = projectImages[category];
    imageGrid.innerHTML = ''; // Clear previous images

    images.forEach((imgSrc, index) => {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'grid-image';

        imageDiv.innerHTML = `
            <img src="assets/images/${imgSrc}" 
                 alt="${category} ${index + 1}" 
                 loading="lazy"
                 onerror="this.style.display='none'">
            <div class="image-overlay">
                <h4>${category.charAt(0).toUpperCase() + category.slice(1)} ${index + 1}</h4>
            </div>
        `;

        imageGrid.appendChild(imageDiv);
    });

    // ✅ Re-apply hover & click zoom effects
    addImageInteractions();
}


// ✅ 2. ADD HOVER/CLICK ZOOM EFFECTS TO ALL GRID IMAGES
function addImageInteractions() {
    document.querySelectorAll('.grid-image').forEach(image => {
        // Hover zoom effect
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'translateY(-10px) scale(1.02)';
        });

        image.addEventListener('mouseleave', () => {
            if (!image.classList.contains('clicked')) {
                image.style.transform = 'none';
            }
        });

        // Click toggle zoom
        image.addEventListener('click', (e) => {
            e.stopPropagation();
            image.classList.toggle('clicked');

            // Remove clicked state from other images
            document.querySelectorAll('.grid-image').forEach(otherImage => {
                if (otherImage !== image) {
                    otherImage.classList.remove('clicked');
                }
            });
        });
    });
}

// ✅ 3. CATEGORY TAB SWITCHING
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active tab
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Load new gallery
        loadGallery(btn.dataset.category);
    });
});

// ✅ 4. INITIAL LOAD - CORPORATE GALLERY BY DEFAULT
document.addEventListener('DOMContentLoaded', () => {
    loadGallery('corporate');
});

// ✅ 5. SMOOTH SCROLL FOR NAVBAR LINKS (KEEP EXISTING)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ✅ 6. NAVBAR BACKGROUND ON SCROLL (KEEP EXISTING)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10,10,10,0.98)';
    } else {
        navbar.style.background = 'rgba(10,10,10,0.95)';
    }
});

// ✅ 7. REMOVE CLICKED STATE WHEN SWITCHING TABS
document.addEventListener('click', (e) => {
    if (e.target.closest('.tab-btn')) {
        document.querySelectorAll('.grid-image').forEach(image => {
            image.classList.remove('clicked');
        });
    }
});
// 🎥 ULTIMATE YOUTUBE VIDEO SYSTEM - 100% WORKING
document.addEventListener('DOMContentLoaded', () => {
    // Video thumbnail interactions
    document.querySelectorAll('.video-card').forEach((card, index) => {
        const thumbnail = card.querySelector('.video-thumbnail');
        const iframe = card.querySelector('iframe');

        // Staggered entrance
        card.style.animationDelay = `${index * 0.1}s`;

        // Click to play video
        thumbnail.addEventListener('click', () => {
            card.classList.add('playing');
            const videoId = card.dataset.video;
            const cleanSrc = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`;
            iframe.src = cleanSrc;
        });

        // Hover effects (non-playing state only)
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('playing')) {
                card.style.transform = 'translateY(-8px) scale(1.02)';
            }
        });

        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('playing')) {
                card.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
});