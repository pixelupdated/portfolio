    const plates = document.querySelectorAll('.plate');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 90);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    plates.forEach(p => io.observe(p));

    const menuToggle = document.getElementById('menuToggle');
    menuToggle.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('menu-open');
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
