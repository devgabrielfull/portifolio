 const btn  = document.getElementById('theme-btn');
  const sun  = document.getElementById('icon-sun');
  const moon = document.getElementById('icon-moon');
  const html = document.documentElement;

  // Padrão: dark. Só sai se o usuário salvou 'light'
  if (localStorage.getItem('theme') === 'light') {
    html.classList.remove('dark');
    sun.style.display  = 'none';
    moon.style.display = 'block';
  } else {
    html.classList.add('dark');
    sun.style.display  = 'block';
    moon.style.display = 'none';
  }

  btn.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    sun.style.display  = isDark ? 'block' : 'none';
    moon.style.display = isDark ? 'none'  : 'block';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
