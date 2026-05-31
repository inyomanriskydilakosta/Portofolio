/* ---- Navbar scroll effect ---- */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

/* ---- Hamburger menu ---- */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* ---- Scroll fade-in ---- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ---- Skill bar animation ---- */
document.querySelectorAll('.skill-bar-fill').forEach(bar => {
  bar.style.width = '0%';
});
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
}, { threshold: 0.3 });
const aboutSection = document.getElementById('about');
if (aboutSection) skillObserver.observe(aboutSection);

/* ---- Project filter ---- */
function filterProjects(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    const show = category === 'all' || card.dataset.category === category;
    card.style.display = show ? 'block' : 'none';
  });
}

/* ---- Testimonial slider ---- */
let currentSlide = 0;
const track = document.getElementById('testimonialTrack');
const cards = track ? track.children : [];
const dotsContainer = document.getElementById('sliderDots');

function goToSlide(n) {
  currentSlide = n;
  track.style.transform = `translateX(-${n * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === n);
  });
}

if (cards.length > 0 && dotsContainer) {
  Array.from(cards).forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  });
  setInterval(() => {
    goToSlide((currentSlide + 1) % cards.length);
  }, 4000);
}

/* ---- Contact form ---- */
function handleSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  alert('Terima kasih! Kami akan menghubungi ' + email);
  document.getElementById('emailInput').value = '';
}

// Klik gambar project
document.querySelectorAll('.project-thumb img[data-link]').forEach(img => {
  img.addEventListener('click', function() {
    window.open(this.dataset.link, '_blank');
  });
});