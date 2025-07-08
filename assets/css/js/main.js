
// main.js: Common JavaScript for Garment Textile Pvt Ltd job portal

// ========== Accessibility: Skip to content shortcut ==========
document.addEventListener("DOMContentLoaded", function () {
  // If there is a skip link, focus the main container when used
  const skip = document.getElementById('skip-to-content');
  if (skip) {
    skip.addEventListener('click', function (e) {
      e.preventDefault();
      const main = document.querySelector('.main-container');
      if (main) main.setAttribute('tabindex', '-1'), main.focus();
    });
  }
});

// ========== Responsive Nav (Hamburger) ==========
function setupResponsiveNav() {
  const navMenu = document.querySelector('.nav-menu');
  if (!navMenu) return;
  // Only set up if hamburger button exists (for mobile)
  let hamburger = document.getElementById('hamburger');
  if (!hamburger) {
    hamburger = document.createElement('button');
    hamburger.id = 'hamburger';
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    hamburger.innerHTML = '☰';
    hamburger.style.display = 'none';
    hamburger.style.background = 'none';
    hamburger.style.border = 'none';
    hamburger.style.fontSize = '2rem';
    hamburger.style.cursor = 'pointer';
    navMenu.parentNode.insertBefore(hamburger, navMenu);

    // Show/hide nav menu
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('show');
      if (navMenu.classList.contains('show')) {
        hamburger.setAttribute('aria-label', 'Close navigation menu');
      } else {
        hamburger.setAttribute('aria-label', 'Open navigation menu');
      }
    });
  }
  // Show hamburger on small screens
  function updateHamburger() {
    if (window.innerWidth < 700) {
      hamburger.style.display = 'block';
      navMenu.style.display = navMenu.classList.contains('show') ? 'flex' : 'none';
      navMenu.style.flexDirection = 'column';
      navMenu.style.alignItems = 'flex-start';
    } else {
      hamburger.style.display = 'none';
      navMenu.style.display = 'flex';
      navMenu.classList.remove('show');
      navMenu.style.flexDirection = '';
      navMenu.style.alignItems = '';
    }
  }
  window.addEventListener('resize', updateHamburger);
  updateHamburger();
}
document.addEventListener('DOMContentLoaded', setupResponsiveNav);

// ========== Marquee Polyfill (for accessibility and non-supporting browsers) ==========
function marqueePolyfill() {
  const marquees = document.querySelectorAll('marquee');
  marquees.forEach(function (mq) {
    // If browser supports <marquee>, skip
    if (typeof mq.start === "function") return;
    // Otherwise, replace with accessible scrolling div
    const text = mq.textContent;
    const container = document.createElement('div');
    container.className = 'marquee-polyfill';
    container.setAttribute('aria-label', mq.getAttribute('aria-label') || 'Marquee');
    const span = document.createElement('span');
    span.textContent = text;
    container.appendChild(span);
    mq.parentNode.replaceChild(container, mq);

    // Animate left to right
    let pos = container.offsetWidth;
    function animate() {
      pos--;
      if (pos < -span.offsetWidth) pos = container.offsetWidth;
      span.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  });
}
document.addEventListener('DOMContentLoaded', marqueePolyfill);

// ========== Set "active" nav link ==========
function setActiveNav() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  const path = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    // Remove active from all first
    link.classList.remove('active');
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
}
document.addEventListener('DOMContentLoaded', setActiveNav);

// ========== Misc. Utility Functions ==========
// Place additional, page-specific JS here as needed.
