

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const toggle = document.querySelector('.mobile-menu-toggle');
    navLinks.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
        document.querySelector('.mobile-menu-toggle').classList.remove('active');
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Section Management
function showSection(sectionId) {
    // Hide all curriculum details
    document.querySelectorAll('.curriculum-detail').forEach(section => {
        section.classList.remove('active');
    });

    // Show relevant sections
    const programsSection = document.querySelector('.programs-overview');
    const collaborationSection = document.querySelector('.collaboration');

    if (sectionId === 'programs') {
        programsSection.style.display = 'block';
        collaborationSection.style.display = 'none';
    } else if (sectionId === 'collaboration') {
        programsSection.style.display = 'none';
        collaborationSection.style.display = 'block';
    } else if (sectionId === 'home') {
        programsSection.style.display = 'block';
        collaborationSection.style.display = 'block';
    }
}

function showCurriculum(programId) {
    // Hide programs overview and collaboration
    document.querySelector('.programs-overview').style.display = 'none';
    document.querySelector('.collaboration').style.display = 'none';

    // Hide all curriculum details
    document.querySelectorAll('.curriculum-detail').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected curriculum
    const curriculumSection = document.getElementById(`curriculum-${programId}`);
    if (curriculumSection) {
        curriculumSection.classList.add('active');
        curriculumSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && !this.hasAttribute('onclick')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    alert('Thank you for your interest! We will contact you shortly.');
    event.target.reset();
}

// Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// Counter animation
function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString() + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString() + '+';
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}



async function handleFormSubmit(event) {
    event.preventDefault()

    const form = event.target;
     
  const submitBtn = form.querySelector(".submit-btn");
  const msgBox = document.getElementById("formMessage");

  // Hide any previous message
  msgBox.style.display = "none";

    const payload = {
        first_name: form.firstName.value.trim(),
        last_name: form.lastName.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        organization: form.organization.value.trim() || "—",
        interest: form.interest.value,
        message: form.message.value.trim() || "—",
    };

submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";

  try {
    const response = await fetch("https://fla-backend-f150.onrender.com/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      // ✅ Success message
      msgBox.style.display = "block";
      msgBox.style.background = "#d1fae5";
      msgBox.style.color = "#065f46";
      msgBox.style.border = "1px solid #6ee7b7";
      msgBox.textContent = "✅ Your inquiry has been sent! We'll get back to you soon.";
      form.reset();
    } else {
      throw new Error(result.error || "Something went wrong.");
    }
  } catch (err) {
    // ❌ Error message
    console.log(err);
    
    msgBox.style.display = "block";
    msgBox.style.background = "#fee2e2";
    msgBox.style.color = "#991b1b";
    msgBox.style.border = "1px solid #fca5a5";
    msgBox.textContent = "❌ Failed to send your inquiry. Please try again.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Inquiry";
  } 


}



