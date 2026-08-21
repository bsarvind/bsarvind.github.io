const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('arvind-theme');
if(saved === 'dark') document.body.classList.add('dark');
toggle.textContent = document.body.classList.contains('dark') ? '☀' : '☾';

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('arvind-theme', mode);
  toggle.textContent = mode === 'dark' ? '☀' : '☾';
});
