/* 
 * Uni-Connect - Scripts
 * Functionality: Mobile Menu, Smooth Scroll, Scroll Animations
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.mobile-menu-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Height of fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Scroll Animations (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.fade-in-up');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            navbar.style.padding = '15px 0';
        }
    });



    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggle ? themeToggle.querySelector('i') : null;
    const mobileIcon = mobileThemeToggle ? mobileThemeToggle.querySelector('i') : null;

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        htmlElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            if (icon) icon.classList.replace('fa-moon', 'fa-sun');
            if (mobileIcon) mobileIcon.classList.replace('fa-moon', 'fa-sun');
            if (mobileThemeToggle) mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }
    }

    function switchTheme(e) {
        if (htmlElement.getAttribute('data-theme') === 'dark') {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            if (icon) icon.classList.replace('fa-sun', 'fa-moon');
            if (mobileIcon) mobileIcon.classList.replace('fa-sun', 'fa-moon');
            if (mobileThemeToggle) mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (icon) icon.classList.replace('fa-moon', 'fa-sun');
            if (mobileIcon) mobileIcon.classList.replace('fa-moon', 'fa-sun');
            if (mobileThemeToggle) mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', switchTheme);
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', switchTheme);
    }

});

// --- Connections Page Logic ---

// Dummy Data
const students = [
    {
        id: 1,
        name: "Alex Johnson",
        university: "Stanford University",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        xp: 1250,
        rank: 12,
        projects: 8,
        hackathons: 5,
        rating: 4.8,
        skills: ["React", "Node.js", "Python"],
        status: "open",
        badges: ["Top Coder", "Mentor"],
        history: [
            { name: "HackMIT 2024", role: "Frontend Lead" },
            { name: "Global AI Hack", role: "Full Stack" }
        ],
        feedback: [
            "Great team player, very skilled in React.",
            "Helped me debug my backend code. Awesome mentor!"
        ]
    },
    {
        id: 2,
        name: "Sarah Lee",
        university: "MIT",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        xp: 980,
        rank: 45,
        projects: 5,
        hackathons: 3,
        rating: 4.5,
        skills: ["UI/UX", "Figma", "Frontend"],
        status: "open",
        badges: ["Designer"],
        history: [
            { name: "Designathon 2023", role: "UI Designer" }
        ],
        feedback: [
            "Amazing designs and very fast turnaround."
        ]
    },
    {
        id: 3,
        name: "Michael Chen",
        university: "UC Berkeley",
        avatar: "https://randomuser.me/api/portraits/men/85.jpg",
        xp: 2100,
        rank: 3,
        projects: 15,
        hackathons: 10,
        rating: 4.9,
        skills: ["AI/ML", "Python", "TensorFlow"],
        status: "mentor",
        badges: ["Grandmaster", "AI Expert"],
        history: [
            { name: "HackTheNorth", role: "AI Engineer" },
            { name: "CalHacks", role: "Team Lead" }
        ],
        feedback: [
            "Incredible knowledge of ML algorithms.",
            "Led our team to victory!"
        ]
    },
    {
        id: 4,
        name: "Emily Davis",
        university: "Harvard University",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        xp: 850,
        rank: 60,
        projects: 4,
        hackathons: 2,
        rating: 4.2,
        skills: ["Java", "Spring", "SQL"],
        status: "open",
        badges: ["Backend"],
        history: [
            { name: "CrimsonCode", role: "Backend Dev" }
        ],
        feedback: [
            "Solid backend skills, reliable."
        ]
    },
    {
        id: 5,
        name: "David Kim",
        university: "Carnegie Mellon",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        xp: 1500,
        rank: 8,
        projects: 10,
        hackathons: 6,
        rating: 4.7,
        skills: ["C++", "Rust", "Systems"],
        status: "mentor",
        badges: ["Systems Arch"],
        history: [
            { name: "TartanHacks", role: "Systems Eng" }
        ],
        feedback: [
            "Solved complex memory issues easily."
        ]
    },
    {
        id: 6,
        name: "Priya Patel",
        university: "Georgia Tech",
        avatar: "https://randomuser.me/api/portraits/women/29.jpg",
        xp: 1100,
        rank: 25,
        projects: 7,
        hackathons: 4,
        rating: 4.6,
        skills: ["Flutter", "Dart", "Mobile"],
        status: "open",
        badges: ["Mobile Dev"],
        history: [
            { name: "HackGT", role: "Mobile Dev" }
        ],
        feedback: [
            "Built a smooth mobile app in 24 hours."
        ]
    }
];

// Render Student Grid
function renderStudents(data) {
    const grid = document.getElementById('student-grid');
    if (!grid) return;

    grid.innerHTML = '';
    data.forEach(student => {
        const card = document.createElement('div');
        card.className = 'student-card fade-in-up visible';
        card.onclick = () => openModal(student);

        const badgesHtml = student.badges.map(b => `<span class="badge">${b}</span>`).join('');
        const skillsHtml = student.skills.map(s => `<span class="skill-tag">${s}</span>`).join('');

        card.innerHTML = `
            <img src="${student.avatar}" alt="${student.name}" class="student-avatar">
            <h3 class="student-name">${student.name}</h3>
            <p class="student-uni">${student.university}</p>
            <div class="student-badges">${badgesHtml}</div>
            <div class="student-stats">
                <div class="stat-item">
                    <span class="stat-value">${student.xp}</span>
                    <span class="stat-label">XP</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">#${student.rank}</span>
                    <span class="stat-label">Rank</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${student.rating}</span>
                    <span class="stat-label">Rating</span>
                </div>
            </div>
            <div class="student-skills">${skillsHtml}</div>
            <button class="btn-team-up" onclick="event.stopPropagation(); alert('Request sent to ${student.name}!')">Request to Team Up</button>
        `;
        grid.appendChild(card);
    });
}

// Render Leaderboard
function renderLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    if (!list) return;

    const topStudents = [...students].sort((a, b) => b.xp - a.xp).slice(0, 5);

    list.innerHTML = '';
    topStudents.forEach((student, index) => {
        const item = document.createElement('li');
        item.className = 'leaderboard-item';
        item.innerHTML = `
            <span class="leaderboard-rank">${index + 1}</span>
            <img src="${student.avatar}" alt="${student.name}" class="leaderboard-avatar">
            <div class="leaderboard-info">
                <h4>${student.name}</h4>
                <span class="leaderboard-xp">${student.xp} XP</span>
            </div>
        `;
        list.appendChild(item);
    });
}

// Filter and Search Logic
function filterStudents() {
    const searchTerm = document.getElementById('student-search').value.toLowerCase();
    const sortValue = document.getElementById('filter-sort').value;
    const statusValue = document.getElementById('filter-status').value;

    let filtered = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm) ||
            student.skills.some(s => s.toLowerCase().includes(searchTerm)) ||
            student.university.toLowerCase().includes(searchTerm);
        const matchesStatus = statusValue === 'all' ||
            (statusValue === 'mentor' && student.badges.includes('Mentor')) ||
            (statusValue === 'open' && student.status === 'open');
        return matchesSearch && matchesStatus;
    });

    if (sortValue === 'rank') {
        filtered.sort((a, b) => a.rank - b.rank);
    } else if (sortValue === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === 'xp') {
        filtered.sort((a, b) => b.xp - a.xp);
    }

    renderStudents(filtered);
}

// Modal Logic
function openModal(student) {
    const modal = document.getElementById('profile-modal');
    const modalBody = document.getElementById('modal-body');

    const historyHtml = student.history.map(h => `
        <li class="history-item">
            <span>${h.name}</span>
            <span>${h.role}</span>
        </li>
    `).join('');

    const feedbackHtml = student.feedback.map(f => `
        <div class="feedback-item">"${f}"</div>
    `).join('');

    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${student.avatar}" alt="${student.name}" class="modal-avatar">
            <div class="modal-info">
                <h2>${student.name}</h2>
                <p class="modal-uni">${student.university}</p>
                <div class="student-badges">
                    ${student.badges.map(b => `<span class="badge">${b}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Stats & Progress</h3>
            <div class="student-stats" style="border: none;">
                <div class="stat-item">
                    <span class="stat-value">${student.xp}</span>
                    <span class="stat-label">Total XP</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${student.projects}</span>
                    <span class="stat-label">Projects</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${student.hackathons}</span>
                    <span class="stat-label">Hackathons</span>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>History</h3>
            <ul class="history-list">${historyHtml}</ul>
        </div>

        <div class="modal-section">
            <h3>Feedback</h3>
            ${feedbackHtml}
        </div>
        
        <button class="btn btn-primary btn-block" onclick="alert('Request sent!')">Connect Now</button>
    `;

    modal.style.display = 'flex';
}

// Initialize Connections Page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('student-grid')) {
        renderStudents(students);
        renderLeaderboard();

        document.getElementById('student-search').addEventListener('input', filterStudents);
        document.getElementById('filter-sort').addEventListener('change', filterStudents);
        document.getElementById('filter-status').addEventListener('change', filterStudents);

        // Close Modal
        document.querySelector('.close-modal').addEventListener('click', () => {
            document.getElementById('profile-modal').style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            const modal = document.getElementById('profile-modal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

// --- Testimonial Slider Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonial-track');
    if (!track) return;

    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    let currentIndex = 0;

    function updateSlidePosition() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function moveToPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            moveToNextSlide();
            resetAutoPlay();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            moveToPrevSlide();
            resetAutoPlay();
        });
    }

    // Auto Play
    let autoPlayInterval = setInterval(moveToNextSlide, 5000);

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(moveToNextSlide, 5000);
    }

    // Handle Resize
    window.addEventListener('resize', updateSlidePosition);
});
