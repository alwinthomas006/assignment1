// Art Gallery Application JavaScript

// Artwork data
const artworks = [
    {
        id: 1,
        title: "Starry Night",
        artist: "Vincent van Gogh",
        year: 1889,
        category: "Post-Impressionism",
        description: "A swirling night sky over a small French village, featuring bold brushstrokes and vibrant blues and yellows that capture the essence of a turbulent yet beautiful evening.",
        imageClass: "starry-night-bg",
        similar_artworks: [
            {
                title: "The Night Café",
                artist: "Vincent van Gogh",
                year: 1888,
                imageClass: "night-cafe-bg"
            },
            {
                title: "Café Terrace at Night",
                artist: "Vincent van Gogh",
                year: 1888,
                imageClass: "cafe-terrace-bg"
            },
            {
                title: "Wheatfield with Cypresses",
                artist: "Vincent van Gogh",
                year: 1889,
                imageClass: "wheatfield-bg"
            }
        ]
    },
    {
        id: 2,
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: 1503,
        category: "Renaissance",
        description: "An iconic portrait of a woman with an enigmatic smile, considered one of the most famous paintings in the world. The subtle sfumato technique creates a dreamlike quality.",
        imageClass: "mona-lisa-bg",
        similar_artworks: [
            {
                title: "Lady with an Ermine",
                artist: "Leonardo da Vinci",
                year: 1489,
                imageClass: "lady-ermine-bg"
            },
            {
                title: "Portrait of Ginevra de' Benci",
                artist: "Leonardo da Vinci",
                year: 1474,
                imageClass: "ginevra-bg"
            },
            {
                title: "La Belle Ferronnière",
                artist: "Leonardo da Vinci",
                year: 1495,
                imageClass: "belle-bg"
            }
        ]
    },
    {
        id: 3,
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        year: 1931,
        category: "Surrealism",
        description: "Melting pocket watches draped across a dreamlike landscape, exploring profound concepts of time, reality, and the subconscious mind with stunning visual metaphors.",
        imageClass: "persistence-memory-bg",
        similar_artworks: [
            {
                title: "The Elephants",
                artist: "Salvador Dalí",
                year: 1948,
                imageClass: "elephants-bg"
            },
            {
                title: "Swans Reflecting Elephants",
                artist: "Salvador Dalí",
                year: 1937,
                imageClass: "swans-bg"
            },
            {
                title: "The Burning Giraffe",
                artist: "Salvador Dalí",
                year: 1937,
                imageClass: "burning-giraffe-bg"
            }
        ]
    },
    {
        id: 4,
        title: "The Great Wave off Kanagawa",
        artist: "Katsushika Hokusai",
        year: 1831,
        category: "Ukiyo-e",
        description: "A towering wave threatening boats with Mount Fuji visible in the background, this iconic Japanese woodblock print captures the power and beauty of nature.",
        imageClass: "great-wave-bg",
        similar_artworks: [
            {
                title: "Fine Wind, Clear Morning",
                artist: "Katsushika Hokusai",
                year: 1831,
                imageClass: "fine-wind-bg"
            },
            {
                title: "Rainstorm Beneath the Summit",
                artist: "Katsushika Hokusai",
                year: 1831,
                imageClass: "rainstorm-bg"
            },
            {
                title: "The Fuji from Kanaya",
                artist: "Katsushika Hokusai",
                year: 1831,
                imageClass: "fuji-kanaya-bg"
            }
        ]
    },
    {
        id: 5,
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        year: 1665,
        category: "Dutch Golden Age",
        description: "An intimate portrait of a girl wearing an exotic dress and large pearl earring, turning to look over her shoulder with a captivating gaze that has mesmerized viewers for centuries.",
        imageClass: "pearl-earring-bg",
        similar_artworks: [
            {
                title: "The Milkmaid",
                artist: "Johannes Vermeer",
                year: 1658,
                imageClass: "milkmaid-bg"
            },
            {
                title: "Woman in Blue Reading a Letter",
                artist: "Johannes Vermeer",
                year: 1663,
                imageClass: "woman-blue-bg"
            },
            {
                title: "The Lacemaker",
                artist: "Johannes Vermeer",
                year: 1669,
                imageClass: "lacemaker-bg"
            }
        ]
    }
];

// Current state
let currentUser = null;
let currentArtwork = null;

// Navigation function
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Special handling for gallery section
        if (sectionId === 'gallery') {
            renderArtworkGrid();
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Render artwork grid
function renderArtworkGrid() {
    const grid = document.getElementById('artworkGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    artworks.forEach(artwork => {
        const artworkCard = document.createElement('div');
        artworkCard.className = 'col-lg-4 col-md-6';
        artworkCard.innerHTML = `
            <div class="artwork-card" onclick="showArtworkDetail(${artwork.id})">
                <div class="artwork-image ${artwork.imageClass}"></div>
                <div class="artwork-info">
                    <h5>${artwork.title}</h5>
                    <p class="artist">${artwork.artist}</p>
                    <p class="year">${artwork.year} • ${artwork.category}</p>
                </div>
            </div>
        `;
        grid.appendChild(artworkCard);
    });
}

// Show artwork detail
function showArtworkDetail(artworkId) {
    currentArtwork = artworks.find(artwork => artwork.id === artworkId);
    if (!currentArtwork) return;
    
    const detailContent = document.getElementById('artworkDetailContent');
    if (!detailContent) return;
    
    detailContent.innerHTML = `
        <div class="artwork-detail-container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="artwork-main-image ${currentArtwork.imageClass}"></div>
                </div>
                <div class="col-lg-4">
                    <div class="artwork-details">
                        <h1 class="mb-3">${currentArtwork.title}</h1>
                        <h4 class="text-primary mb-2">${currentArtwork.artist}</h4>
                        <p class="text-muted mb-3">${currentArtwork.year} • ${currentArtwork.category}</p>
                        <p class="lead">${currentArtwork.description}</p>
                    </div>
                </div>
            </div>
            
            <div class="row mt-5">
                <div class="col-12">
                    <h3 class="mb-4">Similar Artworks</h3>
                    <div class="row">
                        ${currentArtwork.similar_artworks.map(similar => `
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="similar-artwork">
                                    <div class="similar-image ${similar.imageClass}"></div>
                                    <h6 class="mb-2">${similar.title}</h6>
                                    <p class="text-muted mb-1">${similar.artist}</p>
                                    <p class="text-muted small">${similar.year}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    showSection('artwork-detail');
}

// Form handling
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        currentUser = { email: email };
        alert('Login successful! Welcome to Elite Art Gallery.');
        showSection('home');
        
        // Clear form
        document.getElementById('loginForm').reset();
    }
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (name && email && password && confirmPassword) {
        if (password === confirmPassword) {
            currentUser = { name: name, email: email };
            alert('Account created successfully! Welcome to Elite Art Gallery.');
            showSection('login');
            
            // Clear form
            document.getElementById('signupForm').reset();
        } else {
            alert('Passwords do not match. Please try again.');
        }
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Show home section by default
    showSection('home');
    
    // Form event listeners
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Add smooth scrolling for anchor links
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
});

// Add fade-in animation on scroll
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    // Observe all artwork cards and feature cards
    document.querySelectorAll('.artwork-card, .feature-card').forEach((el) => {
        observer.observe(el);
    });
}

// Initialize scroll animations when gallery is rendered
function initializeScrollAnimations() {
    setTimeout(() => {
        addScrollAnimations();
    }, 100);
}

// Enhanced navigation with history support
let navigationHistory = [];

function navigateWithHistory(sectionId) {
    navigationHistory.push(sectionId);
    showSection(sectionId);
}

function goBack() {
    if (navigationHistory.length > 1) {
        navigationHistory.pop(); // Remove current page
        const previousPage = navigationHistory[navigationHistory.length - 1];
        showSection(previousPage);
    } else {
        showSection('home');
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to go back
    if (e.key === 'Escape') {
        if (document.getElementById('artwork-detail').classList.contains('active')) {
            showSection('gallery');
        } else if (!document.getElementById('home').classList.contains('active')) {
            showSection('home');
        }
    }
    
    // Number keys 1-5 for quick artwork access when on gallery page
    if (document.getElementById('gallery').classList.contains('active')) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 5) {
            showArtworkDetail(num);
        }
    }
});

// Add loading animation
function showLoading() {
    const loader = document.createElement('div');
    loader.id = 'loading-overlay';
    loader.innerHTML = `
        <div class="d-flex justify-content-center align-items-center h-100">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        z-index: 9999;
        backdrop-filter: blur(5px);
    `;
    document.body.appendChild(loader);
    
    setTimeout(() => {
        if (document.getElementById('loading-overlay')) {
            document.body.removeChild(loader);
        }
    }, 1000);
}

// Update showSection to include loading animation for heavy pages
const originalShowSection = showSection;
showSection = function(sectionId) {
    if (sectionId === 'gallery' || sectionId === 'artwork-detail') {
        showLoading();
    }
    originalShowSection(sectionId);
};