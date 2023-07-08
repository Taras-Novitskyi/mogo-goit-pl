(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuBtn = document.querySelector('[data-menu]');
  const linkBtn = document.querySelectorAll('.header__link');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuBtn.classList.toggle('is-open');

    document.body.classList.toggle('no-scroll');
  });

  linkBtn.forEach(item =>
    item.addEventListener('click', () => {
      menuBtnRef.classList.remove('is-open');
      menuBtnRef.setAttribute('aria-expanded', false);

      mobileMenuBtn.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    })
  );
})();
