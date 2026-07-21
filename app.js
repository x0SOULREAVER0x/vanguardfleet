const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const modal = document.querySelector('#terminal-modal');
const modalTitle = document.querySelector('#modal-title');

navToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('[data-modal-title]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    modalTitle.textContent = trigger.dataset.modalTitle;
    modal.showModal();
  });
});

document.querySelector('[data-action="login"]')?.addEventListener('click', () => {
  modalTitle.textContent = 'VICS Authentication';
  modal.showModal();
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});
