(() => {
  'use strict';
  const header = document.querySelector('header');
  const toggle = document.querySelector('.nav-toggle');
  function closeNavigation() {
    header?.classList.remove('nav-open');
    toggle?.setAttribute('aria-expanded', 'false');
  }
  toggle?.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.nav-menu a').forEach(link => link.addEventListener('click', closeNavigation));
  document.addEventListener('click', event => {
    if (header && !header.contains(event.target)) closeNavigation();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header?.classList.contains('nav-open')) {
      closeNavigation();
      toggle.focus();
    }
  });
  matchMedia('(min-width: 801px)').addEventListener('change', closeNavigation);

  // React to the pointer near the portrait without running a continuous JS loop.
  const portraitStage = document.querySelector('.portrait-stage');
  if (portraitStage) {
    const portrait = portraitStage.querySelector('.portrait-card');
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    let frame = 0;
    let pointer = null;
    function resetPortrait() {
      cancelAnimationFrame(frame);
      frame = 0;
      pointer = null;
      portraitStage.classList.remove('is-near');
      ['--portrait-x', '--portrait-y', '--portrait-z', '--portrait-scale', '--light-x', '--light-y'].forEach(property => portrait.style.removeProperty(property));
    }
    function updatePortrait() {
      frame = 0;
      if (!pointer || reducedMotion.matches || !finePointer.matches) return;
      const bounds = portraitStage.getBoundingClientRect();
      const dx = Math.max(bounds.left - pointer.x, 0, pointer.x - bounds.right);
      const dy = Math.max(bounds.top - pointer.y, 0, pointer.y - bounds.bottom);
      const proximity = Math.max(0, 1 - Math.hypot(dx, dy) / 100);
      if (!proximity) { resetPortrait(); return; }
      const x = Math.max(-1, Math.min(1, (pointer.x - bounds.left) / bounds.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (pointer.y - bounds.top) / bounds.height * 2 - 1));
      portraitStage.classList.add('is-near');
      portrait.style.setProperty('--portrait-x', `${-y * 5 * proximity}deg`);
      portrait.style.setProperty('--portrait-y', `${x * 7 * proximity}deg`);
      portrait.style.setProperty('--portrait-z', `${2 - proximity * 2}deg`);
      portrait.style.setProperty('--portrait-scale', String(1 + .015 * proximity));
      portrait.style.setProperty('--light-x', `${(x + 1) * 50}%`);
      portrait.style.setProperty('--light-y', `${(y + 1) * 50}%`);
    }
    document.addEventListener('pointermove', event => {
      if (event.pointerType === 'touch' || reducedMotion.matches || !finePointer.matches) return;
      pointer = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(updatePortrait);
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', resetPortrait);
    window.addEventListener('blur', resetPortrait);
    window.addEventListener('scroll', resetPortrait, { passive: true });
    reducedMotion.addEventListener('change', resetPortrait);
    finePointer.addEventListener('change', resetPortrait);
  }

  const cards = [...document.querySelectorAll('.project')];
  const categories = { sudoku: 'game', tetris: 'game', turnbase: 'game', sidora: 'web', bloxantara: 'game', ocr_wa: 'automation', cashflow_telegram: 'automation', machine_monitoring: 'web' };
  cards.forEach(card => {
    const link = card.querySelector('.project-detail-link');
    card.dataset.category = categories[new URL(link.href).searchParams.get('id')];
  });
  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-button').forEach(filter => {
        const active = filter === button;
        filter.classList.toggle('active', active);
        filter.setAttribute('aria-pressed', String(active));
      });
      cards.forEach(card => {
        card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
        if (!card.hidden) card.classList.add('active');
      });
    });
  });

  const modal = document.querySelector('#projectModal');
  let selectedCard;
  let previewTrigger;
  function populatePreview(card) {
    modal.querySelector('.project-modal-title').textContent = card.querySelector('h3').textContent;
    modal.querySelector('.project-modal-desc').textContent = card.querySelector('p').textContent;
    modal.querySelector('.project-modal-tech').replaceChildren(...[...card.querySelectorAll('.tech-tag')].map(tag => tag.cloneNode(true)));
    const image = modal.querySelector('.project-modal-thumb');
    const thumbnail = card.querySelector('.project-thumb');
    image.src = thumbnail.dataset.image || thumbnail.src;
    image.alt = card.querySelector('h3').textContent;
    image.onerror = () => { image.onerror = null; image.src = 'img/project-placeholder.svg'; };
    modal.querySelector('.project-modal-link').href = card.querySelector('.project-detail-link').href;
  }
  cards.forEach(card => {
    const thumb = card.querySelector('.project-thumb');
    thumb.tabIndex = 0;
    thumb.setAttribute('role', 'button');
    thumb.setAttribute('aria-haspopup', 'dialog');
    function preview() {
      selectedCard = card;
      previewTrigger = thumb;
      populatePreview(card);
      modal.showModal();
    }
    thumb.addEventListener('click', preview);
    thumb.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        preview();
      }
    });
  });
  modal?.querySelector('.project-modal-close').addEventListener('click', () => modal.close());
  modal?.addEventListener('click', event => {
    const rect = modal.getBoundingClientRect();
    if (event.target === modal && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) modal.close();
  });
  modal?.addEventListener('close', () => previewTrigger?.focus({ preventScroll: true }));

  let language = 'id';
  try { language = localStorage.getItem('lang') === 'en' ? 'en' : 'id'; } catch {}
  function applyLanguage() {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-id][data-en]').forEach(element => {
      const text = element.dataset[language];
      if (element.matches('input, textarea')) element.placeholder = text;
      else element.textContent = text;
    });
    document.querySelectorAll('.lang-opt').forEach(button => {
      const active = button.dataset.lang === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => {
      card.querySelector('.project-thumb').setAttribute('aria-label', (language === 'id' ? 'Pratinjau: ' : 'Preview: ') + card.querySelector('h3').textContent);
      card.querySelector('.project-status').textContent = card.dataset.workType === 'client'
        ? (language === 'id' ? 'Proyek Client' : 'Client Project')
        : card.dataset.workType === 'working'
        ? 'WORKING'
        : (language === 'id' ? 'Selesai' : 'Completed');
    });
    if (modal?.open && selectedCard) populatePreview(selectedCard);
    document.dispatchEvent(new CustomEvent('langChanged', { detail: language }));
  }
  document.querySelectorAll('.lang-opt').forEach(button => {
    button.addEventListener('click', () => {
      language = button.dataset.lang;
      try { localStorage.setItem('lang', language); } catch {}
      applyLanguage();
    });
  });
  applyLanguage();

  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const recipient = link.getAttribute('href').replace('mailto:', '');
      const subject = 'Kolaborasi dari Portfolio Dzakir Tsabit';
      const body = `Halo Dzakir,

Saya menemukan portfolio Anda dan ingin berdiskusi tentang:

Nama:
Kebutuhan atau proyek:
Timeline:
Anggaran (opsional):

Terima kasih,
[Nama Anda]`;
      const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailCompose, '_blank', 'noopener,noreferrer');
    });
  });

  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    document.documentElement.classList.add('motion-ready');
  }
})();

