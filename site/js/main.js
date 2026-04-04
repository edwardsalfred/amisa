/* ============================================================
   AmiSa Interior Wall Design — Main JavaScript
   GSAP + ScrollTrigger animations, nav, gallery tabs
   ============================================================ */

// Scripts load in order at bottom of body — GSAP is already available here
(function init() {

  // ---- GSAP Setup ----
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    initAnimations();
  }

  // ---- Navigation ----
  initNav();

  // ---- Gallery Tabs ----
  initGalleryTabs();

  // ---- Stats Counter ----
  initStats();

  // ---- Form ----
  initForm();

})();

/* ============================================================
   Navigation
   ============================================================ */
function initNav() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  const overlay = document.querySelector('.nav__overlay');

  if (!nav) return;

  // Scroll state
  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  if (burger && overlay) {
    burger.addEventListener('click', () => {
      const isOpen = overlay.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        overlay.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on backdrop click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Active link based on current page
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav__link, .nav__overlay .nav__link').forEach(link => {
    const href = link.getAttribute('href')?.replace(/\/$/, '') || '';
    if (href === currentPath || (currentPath === '' && href === 'index.html') ||
        (href !== '' && href !== '/' && href !== 'index.html' && currentPath.includes(href))) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   GSAP Animations
   ============================================================ */
function initAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Hero entrance (runs once on load)
  const heroTl = gsap.timeline({ delay: 0.1 });
  const heroTag      = document.querySelector('.hero__tag');
  const heroHeadline = document.querySelector('.hero__headline');
  const heroSub      = document.querySelector('.hero__sub');
  const heroBtns     = document.querySelector('.hero__btns');
  const heroStats    = document.querySelector('.hero__stats');
  const heroScroll   = document.querySelector('.hero__scroll');

  if (heroHeadline) {
    if (heroTag)      heroTl.to(heroTag,      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0);
    heroTl.to(heroHeadline, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.1);
    if (heroSub)      heroTl.to(heroSub,      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.3);
    if (heroBtns)     heroTl.to(heroBtns,     { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.45);
    if (heroStats)    heroTl.to(heroStats,    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.6);
    if (heroScroll)   heroTl.to(heroScroll,   { opacity: 1, duration: 0.6 }, 0.9);
  }

  // Hero parallax
  const heroBg = document.querySelector('.hero__bg');
  if (heroBg) {
    gsap.to(heroBg, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }

  // Generic reveal: .reveal elements
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      }
    });
  });

  // Reveal left
  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      }
    });
  });

  // Reveal right
  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      }
    });
  });

  // Reveal scale
  gsap.utils.toArray('.reveal-scale').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      }
    });
  });

  // Stagger children inside [data-stagger] elements
  gsap.utils.toArray('[data-stagger]').forEach(parent => {
    const children = parent.querySelectorAll(':scope > *');
    gsap.from(children, {
      opacity: 0,
      y: 30,
      duration: 0.65,
      ease: 'power2.out',
      stagger: 0.1,
      immediateRender: false,
      scrollTrigger: {
        trigger: parent,
        start: 'top 95%',
        once: true,
      }
    });
  });

  // Section title reveal (split on words)
  gsap.utils.toArray('.section-reveal-title').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      }
    });
  });

  // Service cards stagger
  const servicesGrid = document.querySelector('.services-grid');
  if (servicesGrid) {
    gsap.from(servicesGrid.querySelectorAll('.service-card'), {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08,
      immediateRender: false,
      scrollTrigger: {
        trigger: servicesGrid,
        start: 'top 95%',
        once: true,
      }
    });
  }

  // Process steps stagger
  const processSteps = document.querySelector('.process-steps');
  if (processSteps) {
    gsap.from(processSteps.querySelectorAll('.process-step'), {
      opacity: 0,
      y: 40,
      duration: 0.65,
      ease: 'power2.out',
      stagger: 0.15,
      immediateRender: false,
      scrollTrigger: {
        trigger: processSteps,
        start: 'top 95%',
        once: true,
      }
    });
  }

  // Gold line CTA glow
  const ctaSection = document.querySelector('.cta-section');
  if (ctaSection) {
    gsap.from(ctaSection.querySelector('h2'), {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: ctaSection, start: 'top 80%', once: true }
    });
  }
}

/* ============================================================
   Stats Counter
   ============================================================ */
function initStats() {
  const statNums = document.querySelectorAll('[data-count]');
  if (!statNums.length) return;

  statNums.forEach(el => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';

    const countUp = () => {
      const startTime = performance.now();
      const duration = 1800;
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);

      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.round(easeOut(progress) * target);
        el.textContent = prefix + value.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // Only trigger when visible
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            countUp();
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(el);
    } else {
      countUp();
    }
  });
}

/* ============================================================
   Gallery Tabs
   ============================================================ */
function initGalleryTabs() {
  const tabs = document.querySelectorAll('.gallery-tab');
  const panes = document.querySelectorAll('.gallery-pane');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.querySelector(`.gallery-pane[data-pane="${target}"]`);
      if (targetPane) {
        targetPane.classList.add('active');
        // Animate new pane in
        if (typeof gsap !== 'undefined') {
          gsap.from(targetPane, { opacity: 0, y: 16, duration: 0.35, ease: 'power2.out' });
        }
      }
    });
  });
}

/* ============================================================
   Contact Form
   ============================================================ */
function initForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate — replace with your actual form handler (Netlify forms, Formspree, etc.)
    await new Promise(r => setTimeout(r, 1200));

    btn.textContent = 'Message Sent!';
    btn.style.background = '#2d7a5c';
    form.reset();

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 4000);
  });
}

/* ============================================================
   Smooth scroll for anchor links
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.nav')?.offsetHeight || 80;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  });
});
