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

// --- Mentorship Page Logic ---

const mentors = [
    {
        id: 1,
        name: 'Dr. Sarah Miller',
        role: 'Senior Data Scientist',
        company: 'Google',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        specialization: 'ai',
        tags: ['Machine Learning', 'Python', 'TensorFlow'],
        exp: 8,
        guided: 45,
        rating: 4.9,
        badges: ['Top Mentor', 'AI Expert'],
        about: 'Ph.D. in Computer Science with 8 years of industry experience. Passionate about helping students break into AI/ML.',
        history: ['Google (Current)', 'OpenAI (Researcher)', 'Stanford (PhD)'],
        resources: ['Intro to ML (Course)', 'Neural Networks 101 (Article)'],
        slots: ['Mon 10am', 'Wed 2pm', 'Fri 4pm']
    },
    {
        id: 2,
        name: 'James Carter',
        role: 'Product Manager',
        company: 'Airbnb',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        specialization: 'product',
        tags: ['Product Strategy', 'UX Research', 'Agile'],
        exp: 6,
        guided: 30,
        rating: 4.8,
        badges: ['Strategy Guru'],
        about: 'Helping engineers think like product managers. I can help you validate your hackathon idea and build a winning pitch.',
        history: ['Airbnb (PM)', 'Uber (APM)'],
        resources: ['Product Market Fit (Guide)', 'Pitch Perfect (Video)'],
        slots: ['Tue 11am', 'Thu 3pm']
    },
    {
        id: 3,
        name: 'Emily Chen',
        role: 'Frontend Lead',
        company: 'Netflix',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        specialization: 'frontend',
        tags: ['React', 'Performance', 'Design Systems'],
        exp: 7,
        guided: 50,
        rating: 5.0,
        badges: ['UI Wizard', 'Code Reviewer'],
        about: 'Frontend architecture enthusiast. I love clean code and pixel-perfect UIs. Let\'s optimize your React app.',
        history: ['Netflix (Senior Dev)', 'Meta (UI Eng)'],
        resources: ['Advanced React Patterns (Repo)', 'CSS for JS Devs (Blog)'],
        slots: ['Mon 5pm', 'Wed 5pm']
    },
    {
        id: 4,
        name: 'Michael Ross',
        role: 'Backend Engineer',
        company: 'Amazon',
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
        specialization: 'backend',
        tags: ['Java', 'AWS', 'System Design'],
        exp: 5,
        guided: 25,
        rating: 4.7,
        badges: ['Cloud Architect'],
        about: 'Scalability is my middle name. I can help you design robust backends and deploy to the cloud.',
        history: ['Amazon (SDE II)', 'Oracle (Dev)'],
        resources: ['System Design Primer (Notes)'],
        slots: ['Tue 9am', 'Thu 9am']
    },
    {
        id: 5,
        name: 'Jessica Lee',
        role: 'UX Designer',
        company: 'Spotify',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        specialization: 'design',
        tags: ['Figma', 'Prototyping', 'User Testing'],
        exp: 4,
        guided: 20,
        rating: 4.8,
        badges: ['Design Thinker'],
        about: 'Creating experiences that users love. I can give feedback on your UI and help you run user tests.',
        history: ['Spotify (Product Designer)', 'IDEO (Intern)'],
        resources: ['Figma 101 (Workshop)'],
        slots: ['Fri 1pm', 'Fri 3pm']
    },
    {
        id: 6,
        name: 'David Kim',
        role: 'Full Stack Dev',
        company: 'Startup Founder',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
        specialization: 'backend',
        tags: ['Node.js', 'React', 'Startup'],
        exp: 10,
        guided: 60,
        rating: 4.9,
        badges: ['Founder', 'Full Stack'],
        about: 'I\'ve built and sold two SaaS products. I can help you with the technical and business side of your project.',
        history: ['YCombinator Alum', 'TechLead'],
        resources: ['SaaS Boilerplate (Code)'],
        slots: ['Mon 12pm', 'Wed 12pm']
    }
];

function renderMentors(data) {
    const grid = document.getElementById('mentor-grid-container');
    if (!grid) return;

    grid.innerHTML = '';
    data.forEach(mentor => {
        const card = document.createElement('div');
        card.className = 'mentor-card fade-in-up visible';

        const tagsHtml = mentor.tags.map(t => `<span class='mentor-tag'>${t}</span>`).join('');
        const badgesHtml = mentor.badges.map(b => `<span class='badge'>${b}</span>`).join('');

        card.innerHTML = `
            <img src='${mentor.avatar}' alt='${mentor.name}' class='mentor-avatar'>
            <h3 class='mentor-name'>${mentor.name}</h3>
            <p class='mentor-role'>${mentor.role}</p>
            <div class='mentor-badges'>${badgesHtml}</div>
            <div class='mentor-stats'>
                <span class='mentor-stat'><i class='fas fa-briefcase'></i> ${mentor.exp}y Exp</span>
                <span class='mentor-stat'><i class='fas fa-users'></i> ${mentor.guided} Guided</span>
                <span class='mentor-stat'><i class='fas fa-star'></i> ${mentor.rating}</span>
            </div>
            <div class='mentor-tags'>${tagsHtml}</div>
            <button class='btn btn-primary' onclick='openMentorModal(${mentor.id})'>Schedule Session</button>
        `;
        grid.appendChild(card);
    });
}

function openMentorModal(id) {
    const mentor = mentors.find(m => m.id === id);
    if (!mentor) return;

    const modal = document.getElementById('mentor-modal');
    const modalBody = document.getElementById('mentor-modal-body');

    const historyHtml = mentor.history.map(h => `<li class='history-item'><span><i class='fas fa-building'></i> ${h}</span></li>`).join('');
    const resourcesHtml = mentor.resources.map(r => `<li class='resource-item'><i class='fas fa-book'></i> ${r}</li>`).join('');
    const slotsHtml = mentor.slots.map(s => `<div class='calendar-slot' onclick='alert(\"Session booked for ${s}!\")'>${s}</div>`).join('');
    const badgesHtml = mentor.badges.map(b => `<span class='badge'>${b}</span>`).join('');

    modalBody.innerHTML = `
        <span class='close-modal'>&times;</span>
        <div class='modal-header'>
            <img src='${mentor.avatar}' alt='${mentor.name}' class='modal-avatar'>
            <div class='modal-info'>
                <h2>${mentor.name}</h2>
                <p class='modal-uni'>${mentor.role} at ${mentor.company}</p>
                <div class='student-badges'>${badgesHtml}</div>
            </div>
        </div>
        
        <div class='modal-section'>
            <h3>About</h3>
            <p>${mentor.about}</p>
        </div>

        <div class='modal-section'>
            <h3>Experience</h3>
            <ul class='history-list'>${historyHtml}</ul>
        </div>

        <div class='modal-section'>
            <h3>Resources</h3>
            <ul class='resource-list'>${resourcesHtml}</ul>
        </div>

        <div class='modal-section'>
            <h3>Available Slots</h3>
            <div class='calendar-grid'>${slotsHtml}</div>
        </div>
        
        <button class='btn btn-primary btn-block' onclick='alert(\"Request sent to ${mentor.name}!\")'>Request Custom Time</button>
    `;

    modal.style.display = 'flex';

    // Re-attach close event
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('mentor-grid-container')) {
        renderMentors(mentors);

        const searchInput = document.getElementById('mentor-search');
        const specializationSelect = document.getElementById('mentor-specialization');

        function filterMentors() {
            const term = searchInput.value.toLowerCase();
            const spec = specializationSelect.value;

            const filtered = mentors.filter(m => {
                const matchesSearch = m.name.toLowerCase().includes(term) ||
                    m.role.toLowerCase().includes(term) ||
                    m.tags.some(t => t.toLowerCase().includes(term));
                const matchesSpec = spec === 'all' || m.specialization === spec;
                return matchesSearch && matchesSpec;
            });

            renderMentors(filtered);
        }

        searchInput.addEventListener('input', filterMentors);
        specializationSelect.addEventListener('change', filterMentors);

        // Close Modal on outside click
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('mentor-modal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});


// --- Skills & Guidance Page Logic ---

const skillData = {
    'html-css': {
        title: 'Frontend Fundamentals',
        level: 'Beginner',
        nextSteps: ['JavaScript (ES6+)', 'Responsive Design', 'CSS Frameworks (Tailwind, Bootstrap)'],
        projects: ['Personal Portfolio Website', 'Landing Page Clone', 'Interactive Form'],
        resources: ['MDN Web Docs', 'CSS-Tricks', 'FreeCodeCamp']
    },
    'javascript': {
        title: 'Frontend Logic Master',
        level: 'Intermediate',
        nextSteps: ['React or Vue.js', 'API Integration (Fetch/Axios)', 'State Management'],
        projects: ['Weather App', 'To-Do List with LocalStorage', 'Currency Converter'],
        resources: ['JavaScript.info', 'Eloquent JavaScript', 'You Don\'t Know JS']
    },
    'react': {
        title: 'Modern Frontend Dev',
        level: 'Advanced',
        nextSteps: ['Next.js', 'Redux/Context API', 'Testing (Jest/RTL)'],
        projects: ['E-commerce Dashboard', 'Social Media Feed', 'Real-time Chat App'],
        resources: ['React Documentation', 'Overreacted.io', 'Frontend Masters']
    },
    'python': {
        title: 'Python Scripter',
        level: 'Beginner/Intermediate',
        nextSteps: ['Data Structures & Algo', 'Web Frameworks (Flask/Django)', 'Data Science Libs (Pandas)'],
        projects: ['Web Scraper', 'Discord Bot', 'Blog Backend'],
        resources: ['Real Python', 'Automate the Boring Stuff', 'LeetCode']
    },
    'java': {
        title: 'Java Developer',
        level: 'Intermediate',
        nextSteps: ['Spring Boot', 'Database Design (SQL)', 'Microservices'],
        projects: ['Library Management System', 'Banking App API', 'Android App'],
        resources: ['Baeldung', 'Spring Guides', 'Effective Java']
    },
    'node': {
        title: 'Backend Engineer',
        level: 'Advanced',
        nextSteps: ['Database (MongoDB/Postgres)', 'Authentication (JWT)', 'Cloud Deployment (AWS)'],
        projects: ['REST API for Blog', 'Real-time Multiplayer Game', 'Authentication Service'],
        resources: ['Node.js Docs', 'Express.js Guide', 'DigitalOcean Tutorials']
    },
    'design': {
        title: 'UI/UX Designer',
        level: 'All Levels',
        nextSteps: ['Figma Prototyping', 'Design Systems', 'User Research'],
        projects: ['Mobile App Redesign', 'Design System Kit', 'Case Study Portfolio'],
        resources: ['Nielsen Norman Group', 'Dribbble', 'Figma Community']
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const getRoadmapBtn = document.getElementById('get-recommendations-btn');
    const skillSelect = document.getElementById('skill-select');
    const resultContainer = document.getElementById('recommendation-result');

    if (getRoadmapBtn && skillSelect && resultContainer) {
        getRoadmapBtn.addEventListener('click', () => {
            const selectedSkill = skillSelect.value;
            if (!selectedSkill) {
                alert('Please select a skill first!');
                return;
            }

            const data = skillData[selectedSkill];
            if (data) {
                renderRecommendation(data, resultContainer);
            }
        });
    }

    // Reuse Testimonial Slider Logic for Skills Page if needed
    const skillsTrack = document.getElementById('skills-testimonial-track');
    if (skillsTrack) {
        const testimonials = [
            {
                text: 'The roadmap helped me go from knowing just HTML to building a full React app in 2 weeks!',
                author: 'Alex Johnson',
                role: 'Hackathon Winner'
            },
            {
                text: 'I used the pitch deck template and we won Best Pitch at HackMIT. Highly recommend!',
                author: 'Sarah Lee',
                role: 'Student Developer'
            },
            {
                text: 'Clear, concise, and actionable. Exactly what I needed to level up my backend skills.',
                author: 'Mike Chen',
                role: 'Backend Lead'
            }
        ];

        skillsTrack.innerHTML = testimonials.map(t => `
            <div class='testimonial-card'>
                <p class='testimonial-text'>\"${t.text}\"</p>
                <div class='testimonial-author'>
                    <div class='author-info'>
                        <h4>${t.author}</h4>
                        <p>${t.role}</p>
                    </div>
                </div>
            </div>
        `).join('');

        let currentIndex = 0;
        const cards = skillsTrack.children;
        const totalCards = cards.length;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalCards;
            const cardWidth = cards[0].offsetWidth + 30; // width + gap
            skillsTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }, 5000);
    }
});

function renderRecommendation(data, container) {
    container.innerHTML = `
        <div class='rec-card fade-in-up visible'>
            <div class='rec-header'>
                <h3 class='rec-title'>${data.title}</h3>
                <span class='rec-level'>${data.level}</span>
            </div>
            
            <div class='rec-section'>
                <h4><i class='fas fa-arrow-right'></i> Next Steps to Learn</h4>
                <div class='rec-tags'>
                    ${data.nextSteps.map(step => `<span class='rec-tag'>${step}</span>`).join('')}
                </div>
            </div>

            <div class='rec-section'>
                <h4><i class='fas fa-laptop-code'></i> Project Ideas</h4>
                <ul class='rec-list'>
                    ${data.projects.map(proj => `<li>${proj}</li>`).join('')}
                </ul>
            </div>

            <div class='rec-section'>
                <h4><i class='fas fa-book-open'></i> Recommended Resources</h4>
                <ul class='rec-list'>
                    ${data.resources.map(res => `<li>${res}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}


// --- Hackathon Hub Page Logic ---

const hackathonData = [
    {
        id: 1,
        title: 'Global AI Challenge',
        organizer: 'TechNova Club',
        date: 'Dec 15 - Dec 17, 2025',
        mode: 'Online',
        prize: '$10,000',
        teamSize: '2-4',
        level: 'Advanced',
        domain: 'ai',
        deadline: '2025-12-10T23:59:59',
        tags: ['AI/ML', 'Python', 'Cloud'],
        tracks: ['Healthcare AI', 'FinTech Innovation', 'Sustainable Tech'],
        agenda: [
            { time: 'Day 1', event: 'Opening Ceremony & Team Formation' },
            { time: 'Day 2', event: 'Hacking & Mentorship Sessions' },
            { time: 'Day 3', event: 'Submission & Demo Day' }
        ],
        eligibility: ['Open to all university students', 'Must have valid student ID']
    },
    {
        id: 2,
        title: 'Web3 Builders Hack',
        organizer: 'Blockchain Society',
        date: 'Jan 20 - Jan 22, 2026',
        mode: 'Offline',
        prize: '$5,000',
        teamSize: '3-5',
        level: 'Intermediate',
        domain: 'blockchain',
        deadline: '2026-01-15T23:59:59',
        tags: ['Blockchain', 'Solidity', 'Web3'],
        tracks: ['DeFi', 'NFT Utility', 'DAO Tooling'],
        agenda: [
            { time: 'Day 1', event: 'Kickoff & Idea Pitching' },
            { time: 'Day 2', event: 'Coding Sprint' },
            { time: 'Day 3', event: 'Final Pitches' }
        ],
        eligibility: ['Undergraduate students only', 'Physical attendance required']
    },
    {
        id: 3,
        title: 'Mobile App Sprint',
        organizer: 'AppDev League',
        date: 'Feb 05 - Feb 06, 2026',
        mode: 'Online',
        prize: '$2,500',
        teamSize: '1-3',
        level: 'Beginner',
        domain: 'mobile',
        deadline: '2026-02-01T23:59:59',
        tags: ['Mobile', 'Flutter', 'React Native'],
        tracks: ['Education', 'Health & Fitness', 'Social Good'],
        agenda: [
            { time: 'Day 1', event: 'Workshop & Hacking Starts' },
            { time: 'Day 2', event: 'Submission & Awards' }
        ],
        eligibility: ['Open to beginners', 'No prior experience needed']
    },
    {
        id: 4,
        title: 'Full Stack Frenzy',
        organizer: 'CodeWarriors',
        date: 'Mar 10 - Mar 12, 2026',
        mode: 'Online',
        prize: '$7,000',
        teamSize: '2-4',
        level: 'Intermediate',
        domain: 'web',
        deadline: '2026-03-05T23:59:59',
        tags: ['Web Dev', 'MERN', 'SaaS'],
        tracks: ['E-commerce', 'Productivity Tools', 'Entertainment'],
        agenda: [
            { time: 'Day 1', event: 'Opening' },
            { time: 'Day 2', event: 'Mid-eval' },
            { time: 'Day 3', event: 'Final Demo' }
        ],
        eligibility: ['Open to all students']
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const hackathonContainer = document.getElementById('hackathon-container');
    const searchInput = document.getElementById('hackathon-search');
    const filterDomain = document.getElementById('filter-domain');
    const filterLevel = document.getElementById('filter-level');
    const filterMode = document.getElementById('filter-mode');

    if (hackathonContainer) {
        renderHackathons(hackathonData);

        // Filter Event Listeners
        const filterHackathons = () => {
            const term = searchInput.value.toLowerCase();
            const domain = filterDomain.value;
            const level = filterLevel.value.toLowerCase();
            const mode = filterMode.value.toLowerCase();

            const filtered = hackathonData.filter(h => {
                const matchesSearch = h.title.toLowerCase().includes(term) || h.organizer.toLowerCase().includes(term);
                const matchesDomain = domain === 'all' || h.domain === domain;
                const matchesLevel = level === 'all' || h.level.toLowerCase() === level;
                const matchesMode = mode === 'all' || h.mode.toLowerCase() === mode;

                return matchesSearch && matchesDomain && matchesLevel && matchesMode;
            });

            renderHackathons(filtered);
        };

        searchInput.addEventListener('input', filterHackathons);
        filterDomain.addEventListener('change', filterHackathons);
        filterLevel.addEventListener('change', filterHackathons);
        filterMode.addEventListener('change', filterHackathons);

        // Start Countdown Timer Interval
        setInterval(updateCountdowns, 1000);
    }

    // Winners Slider Logic
    const winnersTrack = document.getElementById('winners-track');
    if (winnersTrack) {
        const winners = [
            { name: 'Team Nova', project: 'AI Health Assistant', badge: '1st Place', avatar: '#3498db' },
            { name: 'Pixel Pioneers', project: 'EduVR Platform', badge: '2nd Place', avatar: '#e74c3c' },
            { name: 'Code Crushers', project: 'EcoTrack App', badge: 'Best UI', avatar: '#2ecc71' },
            { name: 'BlockBusters', project: 'DeFi Wallet', badge: 'Best Tech', avatar: '#9b59b6' }
        ];

        winnersTrack.innerHTML = winners.map(w => `
            <div class='winner-card'>
                <div class='winner-avatar' style='background: ${w.avatar}'>
                    <i class='fas fa-trophy'></i>
                </div>
                <div class='winner-badge'>${w.badge}</div>
                <h3>${w.name}</h3>
                <p>${w.project}</p>
            </div>
        `).join('');

        // Simple auto-slide
        let currentIndex = 0;
        const cards = winnersTrack.children;
        const totalCards = cards.length;

        setInterval(() => {
            if (window.innerWidth > 768) return; // Disable on desktop if grid is better, or adjust logic
            currentIndex = (currentIndex + 1) % totalCards;
            const cardWidth = cards[0].offsetWidth + 30;
            winnersTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }, 4000);
    }
});

function renderHackathons(data) {
    const container = document.getElementById('hackathon-container');
    if (!container) return;

    container.innerHTML = data.map(h => `
        <div class='hackathon-card fade-in-up visible' onclick='openHackathonModal(${h.id})'>
            <div class='card-banner'>
                <div class='card-status open'>Registration Open</div>
                <div class='card-logo'><i class='fas fa-code'></i></div>
            </div>
            <div class='card-content'>
                <h3 class='hackathon-title'>${h.title}</h3>
                <p class='hackathon-organizer'>by ${h.organizer}</p>
                
                <div class='hackathon-meta'>
                    <span class='meta-item'><i class='fas fa-calendar'></i> ${h.date.split(' - ')[0]}</span>
                    <span class='meta-item'><i class='fas fa-map-marker-alt'></i> ${h.mode}</span>
                </div>

                <div class='hackathon-tags'>
                    ${h.tags.map(t => `<span class='tag'>${t}</span>`).join('')}
                </div>

                <div class='countdown-timer' data-deadline='${h.deadline}'>
                    Loading timer...
                </div>

                <div class='card-footer'>
                    <button class='btn btn-primary btn-block'>View Details</button>
                </div>
            </div>
        </div>
    `).join('');

    updateCountdowns();
}

function updateCountdowns() {
    const timers = document.querySelectorAll('.countdown-timer');
    timers.forEach(timer => {
        const deadline = new Date(timer.getAttribute('data-deadline')).getTime();
        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {
            timer.innerHTML = "Registration Closed";
            timer.style.color = "red";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.innerHTML = `Ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
}

function openHackathonModal(id) {
    const hackathon = hackathonData.find(h => h.id === id);
    if (!hackathon) return;

    const modal = document.getElementById('hackathon-modal');

    // Populate Modal
    document.getElementById('modal-title').innerText = hackathon.title;
    document.getElementById('modal-organizer').innerText = hackathon.organizer;
    document.getElementById('modal-team-size').innerText = hackathon.teamSize;
    document.getElementById('modal-mode').innerText = hackathon.mode;
    document.getElementById('modal-prizes').innerText = hackathon.prize;
    document.getElementById('modal-level').innerText = hackathon.level;

    // Tracks
    const tracksList = document.getElementById('modal-tracks');
    tracksList.innerHTML = hackathon.tracks.map(t => `<li>${t}</li>`).join('');

    // Agenda
    const agendaDiv = document.getElementById('modal-agenda');
    agendaDiv.innerHTML = hackathon.agenda.map(a => `
        <div class='agenda-item'>
            <strong>${a.time}:</strong> ${a.event}
        </div>
    `).join('');

    // Eligibility
    const eligibilityList = document.getElementById('modal-eligibility');
    eligibilityList.innerHTML = hackathon.eligibility.map(e => `<li><i class='fas fa-check'></i> ${e}</li>`).join('');

    modal.style.display = 'block';

    // Close logic
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };
}


// --- Hackathon Simulator Page Logic ---

const problemData = [
    {
        id: 1,
        title: 'Sustainable Smart City Dashboard',
        difficulty: 'Intermediate',
        category: 'sustainability',
        source: 'GreenTech Hackathon 2024',
        desc: 'Design a dashboard that aggregates data from IoT sensors to monitor energy consumption, waste management, and traffic flow in a smart city.',
        deliverables: ['Web Dashboard UI', 'Data Visualization Charts', 'Mock API Integration'],
        criteria: 'UX Design, Data Clarity, Feasibility',
        resources: ['Chart.js Documentation', 'Open City Data API']
    },
    {
        id: 2,
        title: 'AI-Powered Personal Finance Advisor',
        difficulty: 'Advanced',
        category: 'fintech',
        source: 'FinHacks Global',
        desc: 'Create an AI chatbot that analyzes user spending habits and suggests personalized budget adjustments and investment strategies.',
        deliverables: ['Chatbot Interface', 'Spending Analysis Algorithm', 'Security Features'],
        criteria: 'AI Accuracy, Security, User Engagement',
        resources: ['OpenAI API', 'Plaid API']
    },
    {
        id: 3,
        title: 'Gamified Learning Platform for Kids',
        difficulty: 'Beginner',
        category: 'education',
        source: 'EduCode Sprint',
        desc: 'Build a web app that uses gamification (badges, leaderboards) to teach basic math or coding concepts to children aged 6-10.',
        deliverables: ['Interactive Lessons', 'Reward System', 'Child-Friendly UI'],
        criteria: 'Fun Factor, Educational Value, Accessibility',
        resources: ['Phaser.js', 'Google Fonts for Kids']
    },
    {
        id: 4,
        title: 'Telemedicine Appointment Scheduler',
        difficulty: 'Intermediate',
        category: 'health',
        source: 'MedTech Challenge',
        desc: 'Develop a secure platform for patients to book virtual appointments with doctors, including video call integration features.',
        deliverables: ['Booking System', 'Doctor Dashboard', 'Video Call Placeholder'],
        criteria: 'Privacy, Ease of Use, Reliability',
        resources: ['WebRTC', 'FullCalendar']
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const problemGrid = document.getElementById('problem-grid');
    const startSimBtn = document.getElementById('start-sim-btn');
    const quitSimBtn = document.getElementById('quit-sim-btn');
    const submitSimBtn = document.getElementById('submit-sim-btn');
    const retrySimBtn = document.getElementById('retry-sim-btn');

    // Render Problem Library
    if (problemGrid) {
        renderProblems(problemData);

        // Filters
        const searchInput = document.getElementById('problem-search');
        const filterDiff = document.getElementById('filter-difficulty');
        const filterCat = document.getElementById('filter-category');

        const filterProblems = () => {
            const term = searchInput.value.toLowerCase();
            const diff = filterDiff.value.toLowerCase();
            const cat = filterCat.value.toLowerCase();

            const filtered = problemData.filter(p => {
                const matchesSearch = p.title.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term);
                const matchesDiff = diff === 'all' || p.difficulty.toLowerCase() === diff;
                const matchesCat = cat === 'all' || p.category.toLowerCase() === cat;
                return matchesSearch && matchesDiff && matchesCat;
            });
            renderProblems(filtered);
        };

        searchInput.addEventListener('input', filterProblems);
        filterDiff.addEventListener('change', filterProblems);
        filterCat.addEventListener('change', filterProblems);
    }

    // Simulator Logic
    if (startSimBtn) {
        startSimBtn.addEventListener('click', startSimulation);
        quitSimBtn.addEventListener('click', quitSimulation);
        submitSimBtn.addEventListener('click', finishSimulation);
        retrySimBtn.addEventListener('click', resetSimulation);
    }
});

function renderProblems(data) {
    const grid = document.getElementById('problem-grid');
    if (!grid) return;

    grid.innerHTML = data.map(p => `
        <div class="problem-card fade-in-up visible">
            <div class="problem-header">
                <span class="problem-difficulty difficulty-${p.difficulty.toLowerCase()}">${p.difficulty}</span>
                <button class="btn btn-sm btn-outline-primary" onclick="openProblemModal(${p.id})"><i class="fas fa-expand"></i></button>
            </div>
            <h3 class="problem-title">${p.title}</h3>
            <p class="problem-source"><i class="fas fa-trophy"></i> ${p.source}</p>
            <div class="problem-tags">
                <span class="tag">${p.category}</span>
            </div>
            <button class="btn btn-primary btn-sm btn-block" onclick="openProblemModal(${p.id})">View Problem</button>
        </div>
    `).join('');
}

function openProblemModal(id) {
    const problem = problemData.find(p => p.id === id);
    if (!problem) return;

    document.getElementById('modal-problem-title').innerText = problem.title;
    document.getElementById('modal-problem-difficulty').innerText = problem.difficulty;
    document.getElementById('modal-problem-desc').innerText = problem.desc;
    document.getElementById('modal-problem-deliverables').innerHTML = problem.deliverables.map(d => `<li>${d}</li>`).join('');
    document.getElementById('modal-problem-criteria').innerText = problem.criteria;
    document.getElementById('modal-problem-resources').innerHTML = problem.resources.map(r => `<li>${r}</li>`).join('');

    document.getElementById('problem-modal').style.display = 'block';

    // Close logic
    const modal = document.getElementById('problem-modal');
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };
}

// Simulator State
let simTimerInterval;
let simTimeLeft = 3600; // 60 minutes

function startSimulation() {
    // Pick random problem
    const randomProblem = problemData[Math.floor(Math.random() * problemData.length)];

    document.getElementById('sim-problem-title').innerText = randomProblem.title;
    document.getElementById('sim-problem-desc').innerText = randomProblem.desc;
    document.getElementById('sim-problem-tags').innerHTML = `<span class="tag">${randomProblem.category}</span> <span class="tag">${randomProblem.difficulty}</span>`;

    // Switch Views
    document.getElementById('simulator-start-view').classList.remove('active');
    document.getElementById('simulator-active-view').classList.add('active');

    // Start Timer
    simTimeLeft = 3600;
    updateTimerDisplay();
    simTimerInterval = setInterval(() => {
        simTimeLeft--;
        updateTimerDisplay();
        if (simTimeLeft <= 0) finishSimulation();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(simTimeLeft / 60);
    const seconds = simTimeLeft % 60;
    document.getElementById('sim-timer').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function quitSimulation() {
    clearInterval(simTimerInterval);
    if (confirm("Are you sure you want to quit? Progress will be lost.")) {
        resetSimulation();
    } else {
        // Resume timer if needed, or just leave it running in background logic (simplified here)
        simTimerInterval = setInterval(() => {
            simTimeLeft--;
            updateTimerDisplay();
            if (simTimeLeft <= 0) finishSimulation();
        }, 1000);
    }
}

function finishSimulation() {
    clearInterval(simTimerInterval);

    // Calculate Score (Mock AI)
    const score = Math.floor(Math.random() * (95 - 70 + 1)) + 70; // Random score between 70-95

    document.getElementById('sim-score').innerText = score;

    // Mock Feedback
    const strengths = ["Clear problem understanding", "Feasible tech stack choice", "Good focus on user needs"];
    const improvements = ["Consider scalability", "Add more security features", "Refine the revenue model"];

    document.getElementById('sim-feedback-strengths').innerHTML = strengths.map(s => `• ${s}<br>`).join('');
    document.getElementById('sim-feedback-improvements').innerHTML = improvements.map(i => `• ${i}<br>`).join('');

    // Update Gamification (Mock)
    let streak = parseInt(document.getElementById('streak-count').innerText) || 0;
    let xp = parseInt(document.getElementById('xp-count').innerText) || 0;
    document.getElementById('streak-count').innerText = streak + 1;
    document.getElementById('xp-count').innerText = xp + 150;

    // Switch Views
    document.getElementById('simulator-active-view').classList.remove('active');
    document.getElementById('simulator-result-view').classList.add('active');
}

function resetSimulation() {
    clearInterval(simTimerInterval);
    document.getElementById('sim-solution').value = '';
    document.getElementById('simulator-result-view').classList.remove('active');
    document.getElementById('simulator-active-view').classList.remove('active');
    document.getElementById('simulator-start-view').classList.add('active');
}
