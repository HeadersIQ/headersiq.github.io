
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// First-visit intro overlay
(function () {
  const KEY = 'hiq_intro_seen_v1';     // bump to v2 if you want to re-show later
  const el = document.getElementById('intro-banner');
  if (!el) return;

  const show = () => { el.hidden = false; document.body.style.overflow = 'hidden'; };
  const hide = () => { el.hidden = true;  document.body.style.overflow = '';    };

  if (!localStorage.getItem(KEY)) show();

  const dismissBtn = document.getElementById('introDismiss');
  const closeBtn   = el.querySelector('.intro-close');

  function dismiss() { localStorage.setItem(KEY, '1'); hide(); }
  dismissBtn && dismissBtn.addEventListener('click', dismiss);
  closeBtn   && closeBtn  .addEventListener('click', dismiss);

  document.addEventListener('keydown', (e) => { if (!el.hidden && e.key === 'Escape') dismiss(); });
  el.addEventListener('click', (e) => { if (e.target === el) dismiss(); }); // click backdrop to close
})();
