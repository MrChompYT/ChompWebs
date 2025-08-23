// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navlinks = document.getElementById('navlinks');
if (menuBtn && navlinks){
  menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('open');
  });
}

// Optional: smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  })
});
