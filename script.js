// Constants
const brandText = 'tableDesigns';
const taglineText = 'Powered by curiosity. Grounded in craftsmanship.';

// Typewriter helper function
function typeText(element, text, speed, onComplete) {
  let index = 0;
  element.textContent = '';

  const interval = setInterval(() => {
    element.textContent += text.charAt(index);
    index += 1;

    if (index >= text.length) {
      clearInterval(interval);
      if (typeof onComplete === 'function') {
        onComplete();
      }
    }
  }, speed);
}

// Intro animation
function runIntroAnimation() {
  const logoImg = document.getElementById('logo-un');
  const logoText = document.getElementById('logo-text');
  const logoWrapper = document.getElementById('logo-wrapper');
  const tagline = document.getElementById('tagline');

  // Start with empty text and hidden tagline
  logoText.textContent = '';
  tagline.textContent = '';

  // Step 1: pause for 0.5s, then rotate logo into "S" (1.2s via CSS)
  setTimeout(() => {
    logoImg.classList.add('rotated');
  }, 500);

  // Step 2: after rotation completes, start typing "ableDesigns"
  // pause: 0.5s + rotation: 1.2s => wait about 1.7s total
  setTimeout(() => {
    // Start moving toward centered while typing
    logoWrapper.classList.add('centered');

    typeText(logoText, brandText, 120, () => {
      // Step 3: after logo text fully typed, float up slightly
      setTimeout(() => {
        logoWrapper.classList.add('float-up');

        // Step 4: set tagline text and fade it in
        tagline.textContent = taglineText;
        tagline.classList.add('visible');

        // Step 5: after tagline fades in, move PNG left to make space for S
        setTimeout(() => {
          logoImg.classList.add('moved-left');

          // Step 6: after PNG moves left, show the S to join tableDesigns
          setTimeout(() => {
            const logoS = document.getElementById('logo-s');
            logoS.classList.add('visible');

            // Step 7: after S appears, rotate PNG back to horizontal
            setTimeout(() => {
              logoImg.classList.add('rotated-back');
            }, 600); // Wait for S fade-in to be visible
          }, 400); // Wait for PNG to move left
        }, 1200); // Wait for tagline fade-in to complete (1.2s)
      }, 250);
    });
  }, 1700);
}

// Products fade-in on scroll
function initProductAnimations() {
  const productCards = document.querySelectorAll('.product-card');
  
  if (!productCards.length) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150); // Stagger animations
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  productCards.forEach(card => {
    observer.observe(card);
  });
}

// Deep dive page fade-in on scroll
function initDeepDiveAnimations() {
  const contentSections = document.querySelectorAll('.content-section');
  const modelSection = document.querySelector('.model-section');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100); // Stagger animations
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe model section if it exists
  if (modelSection) {
    observer.observe(modelSection);
  }

  // Observe content sections
  contentSections.forEach(section => {
    observer.observe(section);
  });
}

// Automation cards fade-in on scroll
function initAutomationAnimations() {
  const automationCards = document.querySelectorAll('.automation-card');
  
  if (!automationCards.length) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100); // Stagger animations
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  automationCards.forEach(card => {
    observer.observe(card);
  });
}

// Web design section animations
function initWebDesignAnimations() {
  const pillarCards = document.querySelectorAll('.pillar-card');
  const websiteCards = document.querySelectorAll('.website-card');
  const methodologyQuote = document.querySelector('.methodology-quote');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  pillarCards.forEach(card => {
    observer.observe(card);
  });

  websiteCards.forEach(card => {
    observer.observe(card);
  });

  if (methodologyQuote) {
    observer.observe(methodologyQuote);
  }
}

// Sticky navigation scroll behavior
function initStickyNav() {
  const nav = document.getElementById('sticky-nav');
  if (!nav) return;

  const navLinks = nav.querySelectorAll('a');
  const sections = ['products', 'automations', 'web-design'];

  // Function to get nav offset
  const getNavOffset = () => {
    return nav.offsetTop;
  };

  let navOffset = getNavOffset();

  // Recalculate on resize
  window.addEventListener('resize', () => {
    navOffset = getNavOffset();
  });

  // Fade-in animation when nav enters viewport
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        nav.classList.add('visible');
        navObserver.unobserve(nav);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  navObserver.observe(nav);

  // Create spacer to prevent layout shift when nav becomes sticky
  const navSpacer = document.createElement('div');
  navSpacer.id = 'nav-spacer';
  navSpacer.style.display = 'none';
  navSpacer.style.height = nav.offsetHeight + 'px';
  nav.parentNode.insertBefore(navSpacer, nav.nextSibling);

  // Sticky behavior on scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || window.scrollY;
    
    // Recalculate offset if nav is not sticky (in case layout changed)
    if (!nav.classList.contains('sticky')) {
      navOffset = getNavOffset();
    }
    
    if (scrollY >= navOffset) {
      if (!nav.classList.contains('sticky')) {
        nav.classList.add('sticky');
        navSpacer.style.display = 'block';
        navSpacer.style.height = nav.offsetHeight + 'px';
      }
    } else {
      if (nav.classList.contains('sticky')) {
        nav.classList.remove('sticky');
        navSpacer.style.display = 'none';
      }
    }

    // Update active link based on scroll position
    sections.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        const navHeight = nav.offsetHeight;
        const offset = nav.classList.contains('sticky') ? navHeight : navHeight + 50;
        
        if (scrollY >= sectionTop - offset - 100 && scrollY < sectionBottom - offset - 100) {
          navLinks.forEach(link => link.classList.remove('active'));
          if (navLinks[index]) {
            navLinks[index].classList.add('active');
          }
        }
      }
    });
  });

  // Smooth scroll on click for section links
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Only prevent default for anchor links (not external pages)
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          const navHeight = nav.offsetHeight;
          const isSticky = nav.classList.contains('sticky');
          // When sticky, nav is fixed at top, so just account for nav height
          // When not sticky, account for nav height plus its offset
          const offset = isSticky ? navHeight : navHeight;
          const targetPosition = targetSection.offsetTop - offset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Handle navigation anchor scroll
function handleNavAnchorScroll() {
  const navAnchor = document.getElementById('nav-anchor');
  if (!navAnchor) return;

  // Check if URL has #nav-anchor hash
  if (window.location.hash === '#nav-anchor') {
    // Wait for page to fully load and animations to complete
    setTimeout(() => {
      const nav = document.getElementById('sticky-nav');
      if (nav) {
        // Get the position of the nav anchor (which is right before the nav)
        const navAnchorOffset = navAnchor.offsetTop;
        // Scroll to position nav at the top of the viewport
        window.scrollTo({
          top: navAnchorOffset,
          behavior: 'smooth'
        });
      }
    }, 300);
  }
}

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
  // Handle navigation anchor scroll first
  handleNavAnchorScroll();
  
  // Only run homepage animations if elements exist
  if (document.getElementById('logo-un')) {
    runIntroAnimation();
  }
  
  // Initialize sticky navigation
  initStickyNav();
  
  // Only run product animations if product cards exist
  if (document.querySelectorAll('.product-card').length) {
    initProductAnimations();
  }
  
  // Only run deep dive animations if content sections exist
  if (document.querySelectorAll('.content-section').length) {
    initDeepDiveAnimations();
  }
  
  // Only run automation animations if automation cards exist
  if (document.querySelectorAll('.automation-card').length) {
    initAutomationAnimations();
  }
  
  // Only run web design animations if elements exist
  if (document.querySelectorAll('.pillar-card').length || document.querySelectorAll('.website-card').length) {
    initWebDesignAnimations();
  }
});

