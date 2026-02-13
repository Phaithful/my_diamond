// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💕';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';
    document.getElementById('heartsContainer').appendChild(heart);
    
    setTimeout(() => heart.remove(), 15000);
}

// Create hearts periodically
setInterval(createHeart, 2000);
for (let i = 0; i < 5; i++) {
    setTimeout(createHeart, i * 400);
}

// Scroll animation observer
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.story-section').forEach(section => {
    observer.observe(section);
});

// Button interactions
function handleYes() {
    const overlay = document.getElementById('responseOverlay');
    overlay.classList.add('active');
    
    // Create confetti effect
    createConfetti();
}

function handleNo() {
    const noBtn = document.querySelector('.btn-no');
    const yesBtn = document.querySelector('.btn-yes');
    
    // Make no button run away
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * (window.innerWidth - 200) + 'px';
    noBtn.style.top = Math.random() * 200 + 'px';
    
    // Make yes button bigger
    yesBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        yesBtn.style.transform = 'scale(1)';
    }, 300);
}

// Confetti effect
function createConfetti() {
    const colors = ['#F4C7C3', '#D4949E', '#FFE5E0', '#D4AF37'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '10000';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 3 + 2;
        const xMovement = (Math.random() - 0.5) * 200;
        
        confetti.animate([
            { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(100vh) translateX(${xMovement}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

// Smooth scroll to first section on scroll indicator click
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.querySelector('.story-section').scrollIntoView({ behavior: 'smooth' });
});