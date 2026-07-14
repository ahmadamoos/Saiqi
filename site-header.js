(() => {
  const header = document.querySelector('.saiqi-site-header');
  if (!header) return;

  const page = document.body.dataset.page || 'home';
  header.querySelectorAll('[data-nav-page]').forEach(link => {
    if (link.dataset.navPage === page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  const button = header.querySelector('.saiqi-menu-button');
  const nav = header.querySelector('.saiqi-nav');
  const closeMenu = () => {
    nav?.classList.remove('is-open');
    button?.setAttribute('aria-expanded', 'false');
  };

  button?.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('is-open', open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
})();
