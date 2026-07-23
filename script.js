document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-words]').forEach(wrapper => {
    const words = JSON.parse(wrapper.dataset.words);
    const track = wrapper.querySelector('.word-track');
    let index = 0;
    let isAnimating = false;

    function swap() {
      if (isAnimating) return;
      isAnimating = true;

      const current = track.querySelector('.word-current');
      const nextIndex = (index + 1) % words.length;
      const nextWord = words[nextIndex];

      const next = document.createElement('span');
      next.className = 'word word-next';
      next.textContent = nextWord;

      track.appendChild(next);

      void next.offsetWidth;

      if (current) current.classList.add('slide-down');
      next.classList.add('slide-up');

      function onCurrentAnimationEnd(e) {
        if (e.animationName && e.animationName !== 'slideDown') return;
        if (current && current.parentNode) current.parentNode.removeChild(current);
        next.classList.replace('word-next', 'word-current');
        next.classList.remove('slide-up');
        index = nextIndex;
        isAnimating = false;
        if (current) current.removeEventListener('animationend', onCurrentAnimationEnd);
      }

      if (current) {
        current.addEventListener('animationend', onCurrentAnimationEnd);
      } else {
        setTimeout(() => {
          next.classList.replace('word-next', 'word-current');
          next.classList.remove('slide-up');
          index = nextIndex;
          isAnimating = false;
        }, 600);
      }
    }

    setInterval(swap, 2500);
  });
});

  // Header hide on scroll (hide when scrolling down, show when scrolling up)
  (function(){
    const header = document.querySelector('header');
    if (!header) return;

    let lastScroll = window.scrollY || 0;
    let ticking = false;

    function update() {
      const current = window.scrollY || 0;
      // if scrolling down and scrolled past 100px -> hide
      if (current > lastScroll && current > 100) {
        header.classList.add('header-hidden');
      } else {
        // scrolling up -> show
        header.classList.remove('header-hidden');
      }
      lastScroll = current <= 0 ? 0 : current;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  })();

  // Mobile hamburger toggle
  (function(){
    const header = document.querySelector('header');
    const btn = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-menu a');
    if (!header || !btn) return;

    function setAria(open) {
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    btn.addEventListener('click', (e) => {
      const open = header.classList.toggle('nav-open');
      setAria(open);
    });

    // close when clicking a link
    navLinks.forEach(a => a.addEventListener('click', () => {
      header.classList.remove('nav-open');
      setAria(false);
    }));

    // close when clicking outside menu on mobile
    document.addEventListener('click', (e) => {
      if (!header.classList.contains('nav-open')) return;
      const withinHeader = e.composedPath && e.composedPath().includes(header);
      if (!withinHeader) {
        header.classList.remove('nav-open');
        setAria(false);
      }
    });
  })();

// Project detail modal logic
(function(){
  const projects = document.querySelectorAll('.project');
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  const overlay = modal.querySelector('.project-modal-overlay');
  const closeBtn = modal.querySelector('.project-modal-close');
  const modalThumb = modal.querySelector('.project-modal-thumb');
  const modalTitle = modal.querySelector('.project-modal-title');
  const modalDesc = modal.querySelector('.project-modal-desc');
  const modalTech = modal.querySelector('.project-modal-tech');
  const modalLink = modal.querySelector('.project-modal-link');

  // placeholder image (SVG data URI)
  const placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="480" viewBox="0 0 800 480">' +
    '<rect width="100%" height="100%" fill="#222"/>' +
    '<text x="50%" y="50%" fill="#888" font-family="Arial,Helvetica,sans-serif" font-size="24" text-anchor="middle" dominant-baseline="middle">Image Not Available</text>' +
    '</svg>'
  );

  function openModal(projectEl) {
    const title = projectEl.querySelector('h3')?.textContent || '';
    const desc = projectEl.querySelector('p')?.textContent || '';
    const techHtml = projectEl.querySelector('.project-tech')?.innerHTML || '';
    const imgEl = projectEl.querySelector('.project-thumb');
    const dataImage = imgEl ? imgEl.dataset.image : '';
    const linkEl = projectEl.querySelector('.project-detail-link');

    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalTech.innerHTML = techHtml;

    if (linkEl && modalLink) {
      modalLink.href = linkEl.href;
      modalLink.style.display = 'inline-block';
    } else if (modalLink) {
      modalLink.style.display = 'none';
    }

    // set image with fallback on error
    modalThumb.src = dataImage || placeholder;
    modalThumb.onerror = () => { modalThumb.src = placeholder; };

    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  projects.forEach(p => {
    p.style.cursor = 'pointer';
    p.addEventListener('click', (e) => {
      // don't open when clicking links/buttons inside project
      if (e.target.closest('a') || e.target.closest('button')) return;
      openModal(p);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
})();

// Parallax and 3D effects
(function(){
  const parallaxBg = document.querySelectorAll('.parallax-bg');

  // Scroll parallax for background elements
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    parallaxBg.forEach(el => {
      const speed = el.getAttribute('data-speed') || 2;
      el.style.transform = `translateY(${scrollY * speed * 0.1}px)`;
    });
  }, { passive: true });

  // 3D Tilt effect for project cards
  const cards = document.querySelectorAll('.project');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg tilt
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.transition = 'none';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
  });
})();

// Scroll Reveal Animation
(function(){
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Trigger animation only once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));
})();

// Language Switcher Logic
(function(){
  const langOpts = document.querySelectorAll('.lang-opt');
  if (langOpts.length === 0) return;

  let currentLang = localStorage.getItem('lang') || 'en';

  function applyLanguage() {
    langOpts.forEach(opt => {
      if (opt.dataset.lang === currentLang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
    
    document.querySelectorAll('[data-id][data-en]').forEach(el => {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
         el.placeholder = currentLang === 'id' ? el.dataset.id : el.dataset.en;
      } else {
         el.innerHTML = currentLang === 'id' ? el.dataset.id : el.dataset.en;
      }
    });
    
    // trigger custom event for project.html to know when to re-render
    document.dispatchEvent(new CustomEvent('langChanged', { detail: currentLang }));
  }

  langOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      currentLang = opt.dataset.lang;
      localStorage.setItem('lang', currentLang);
      applyLanguage();
    });
  });

  applyLanguage();
})();

