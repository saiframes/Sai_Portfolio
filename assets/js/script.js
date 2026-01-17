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
    Event: ['Event1.jpg', 'Event2.jpg', 'Event3.jpg']
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
        // 🚀 PERFECT LOADING EXPERIENCE
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);

            const h1 = document.querySelector('.sai-content h1');
            const subtitle = document.querySelector('.sai-subtitle');
            const cta = document.querySelector('.cta-button');
            h1.style.animation = 'slideInUp 1.2s 0.3s forwards';
            subtitle.style.animation = 'slideInUp 1s 0.6s forwards';
            cta.style.animation = 'slideInUp 1s 0.9s forwards, pulse 2s infinite 1.5s';
        });

        // 🌟 SCROLL-TRIGGERED ANIMATIONS
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -10% 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('animate'), index * 120);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.project-card, .about, .contact, .skills span, .video-card, .youtube-title-card').forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.05}s`;
            observer.observe(el);
        });

        // 🎨 NAVBAR EFFECTS
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const navbar = document.querySelector('.navbar');
                    navbar.classList.toggle('scrolled', window.scrollY > 100);
                    ticking = false;
                });
                ticking = true;
            }
        });

        // 🔥 3D TILT PROJECT CARDS
        document.querySelectorAll('.project-card').forEach((card) => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                const glowIntensity = Math.min((Math.abs(rotateX) + Math.abs(rotateY)) / 10, 0.5);

                card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03) translateZ(20px)`;
                card.style.filter = `brightness(1 + ${glowIntensity})`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.filter = 'brightness(1)';
            });

            const handleCardClick = (e) => {
                e.preventDefault();
                const category = card.getAttribute('data-category');
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    window.location.href = `${category}.html`;
                }, 150);
            };

            card.addEventListener('click', handleCardClick);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(e);
                }
            });
        });

        // 📱 MOBILE HAMBURGER MENU
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');

        if (mobileBtn && navMenu) {
            mobileBtn.addEventListener('click', () => {
                mobileBtn.classList.toggle('active');
                navMenu.classList.toggle('mobile-open');
            });

            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileBtn.classList.remove('active');
                    navMenu.classList.remove('mobile-open');
                });
            });
        }

        // ⚡ SMOOTH SCROLLING
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // 🎯 🔥 ULTIMATE YOUTUBE FIX - Error 153 DESTROYED
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.video-card').forEach(card => {

                const thumbnail = card.querySelector('.video-thumbnail');
                const iframe = card.querySelector('iframe');
                const playBtn = card.querySelector('.play-button');
                const videoId = card.dataset.video;

                const reset = () => {
                    card.classList.remove('playing');
                    iframe.removeAttribute('src');
                };

                const play = () => {
                    if (card.classList.contains('playing')) return;

                    card.classList.add('playing');

                    iframe.src =
                        `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&origin=${location.origin}`;

                    // ⏱️ If embed blocked → redirect safely
                    setTimeout(() => {
                        try {
                            if (!iframe.contentWindow) {
                                window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
                                reset();
                            }
                        } catch {
                            window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
                            reset();
                        }
                    }, 1200);
                };

                thumbnail.addEventListener('click', e => {
                    e.stopPropagation();
                    play();
                });

                playBtn.addEventListener('click', e => {
                    e.stopPropagation();
                    play();
                });

                card.addEventListener('mouseleave', reset);

                document.addEventListener('click', e => {
                    if (!card.contains(e.target)) reset();
                });
            });

        });

        // PWA SERVICE WORKER
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').catch(console.error);
        }