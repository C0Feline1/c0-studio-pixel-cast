/* Set the theme before styles paint; storage may be unavailable in an iframe. */
(()=>{
 const root=document.documentElement;let theme='dark';
 try{if(localStorage.getItem('c0-gallery-theme')==='light')theme='light';}catch(e){}
 function set(value){theme=value==='light'?'light':'dark';root.dataset.theme=theme;root.style.colorScheme=theme;document.querySelectorAll('[data-theme-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.themeChoice===theme)));try{localStorage.setItem('c0-gallery-theme',theme);}catch(e){}}
 root.dataset.theme=theme;root.style.colorScheme=theme;
 document.addEventListener('DOMContentLoaded',()=>{set(theme);document.querySelectorAll('[data-theme-choice]').forEach(b=>b.addEventListener('click',()=>set(b.dataset.themeChoice)));});
})();
