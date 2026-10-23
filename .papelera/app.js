// Lo común: menú en móvil, año del pie y fecha de hoy.
document.addEventListener('DOMContentLoaded', () => {
  const boton = document.querySelector('.menu-boton');
  const menu = document.querySelector('.menu');
  if (boton && menu) boton.addEventListener('click', () => {
    const abierto = menu.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', String(abierto));
  });
  document.querySelectorAll('[data-anio]').forEach(e => { e.textContent = new Date().getFullYear(); });
  document.querySelectorAll('[data-hoy]').forEach(e => {
    const d = new Date();
    e.dateTime = d.toISOString().slice(0, 10);
    e.textContent = d.toLocaleDateString();
  });
});
