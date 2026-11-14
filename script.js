const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

// Update this address to the email you want visitors to contact.
const CONTACT_EMAIL = 'markthuranira57@gmail.com';
const copyEmailButton = document.querySelector('.copy-email');
const toast = document.querySelector('.toast');
let toastTimeout;

copyEmailButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
    toast.textContent = 'Email address copied to clipboard.';
    toast.classList.add('visible');
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove('visible'), 2600);
  } catch (error) {
    toast.textContent = 'Could not access the clipboard. Email: ' + CONTACT_EMAIL;
    toast.classList.add('visible');
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove('visible'), 4200);
  }
});
