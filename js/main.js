document.documentElement.classList.remove('no-js');
document.body.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
  const hasGsap = typeof gsap !== 'undefined';
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);

  /* ---------------- Preloader ---------------- */
  const preloader = document.getElementById('preloader');
  const startApp = () => {
    if (hasGsap) {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .to('#preloader .pl-mark', { opacity: 1, duration: 0.7 })
        .to('#preloader .pl-line', { scaleX: 1, duration: 0.5 }, '-=0.3')
        .to('#preloader .pl-tag', { opacity: 1, duration: 0.5 }, '-=0.2')
        .to('#preloader', {
          delay: 0.5,
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          onComplete: () => { preloader.style.display = 'none'; playHero(); }
        });
    } else {
      preloader.style.display = 'none';
    }
  };
  window.addEventListener('load', startApp);
  setTimeout(() => { if (preloader && preloader.style.display !== 'none') startApp(); }, 2500);

  /* ---------------- Hero entrance ---------------- */
  function playHero() {
    if (!hasGsap) return;
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo('.hero-media img', { scale: 1.25 }, { scale: 1.12, duration: 1.6, ease: 'power2.out' }, 0)
      .fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.1)
      .fromTo('.hero h1', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, 0.2)
      .fromTo('.hero p.lead', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.4)
      .fromTo('.hero-ctas', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.55);
  }

  /* ---------------- Header scroll state ---------------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile nav ---------------- */
  const burger = document.getElementById('burgerBtn');
  burger.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
  document.querySelectorAll('#mobileNav a').forEach(a => {
    a.addEventListener('click', () => document.body.classList.remove('nav-open'));
  });

  /* ---------------- Active section indicator ---------------- */
  const navLinks = document.querySelectorAll('[data-nav]');
  const sections = Array.from(navLinks)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === id));
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    sections.forEach(s => obs.observe(s));
  }

  /* ---------------- Menu tabs ---------------- */
  const tabs = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      panels.forEach(p => p.classList.remove('is-active'));
      tab.classList.add('is-active');
      const panel = document.querySelector(`[data-panel="${tab.dataset.tab}"]`);
      panel.classList.add('is-active');
      if (hasGsap) {
        gsap.fromTo(panel.querySelectorAll('.menu-item'),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
        );
      }
    });
  });

  /* ---------------- Scroll reveals ---------------- */
  if (hasGsap) {
    document.querySelectorAll('.reveal').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      });
    });

    /* Parallax en imágenes grandes */
    document.querySelectorAll('.cocina-media img, .ambiente-media img').forEach(img => {
      gsap.fromTo(img, { yPercent: -8 }, {
        yPercent: 8, ease: 'none',
        scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });

    /* Contadores animados */
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseFloat(el.dataset.count);
      const isDecimal = el.dataset.decimal === 'true';
      const suffix = el.dataset.suffix || '';
      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = (isDecimal ? obj.val.toFixed(1) : Math.round(obj.val)) + suffix;
            }
          });
        }
      });
    });
  } else {
    document.querySelectorAll('.reveal').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
  }

  /* ---------------- Cookies banner ---------------- */
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieChoice = localStorage.getItem('sapore-cookies');
  if (!cookieChoice) {
    setTimeout(() => cookieBanner.classList.add('is-visible'), 1500);
  }
  const closeCookieBanner = (value) => {
    localStorage.setItem('sapore-cookies', value);
    cookieBanner.classList.remove('is-visible');
  };
  document.getElementById('cookieAccept').addEventListener('click', () => closeCookieBanner('accepted'));
  document.getElementById('cookieDecline').addEventListener('click', () => closeCookieBanner('declined'));

  /* ---------------- Footer year ---------------- */
  document.getElementById('year').textContent = new Date().getFullYear();
});
