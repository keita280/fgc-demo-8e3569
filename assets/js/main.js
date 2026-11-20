(() => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('global-nav');
  if (!btn || !nav) return;
  const close = () => { nav.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); const l = btn.querySelector('.menu-btn__label'); if (l) l.textContent = 'メニュー'; btn.setAttribute('aria-label', 'メニュー'); };
  btn.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    const label = btn.querySelector('.menu-btn__label'); if (label) label.textContent = open ? '閉じる' : 'メニュー'; btn.setAttribute('aria-label', open ? '閉じる' : 'メニュー');
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
})();
