// PERSONALIZE AQUI. WhatsApp: DDI + DDD + número, somente dígitos.
const contato = { whatsapp: '5543996630251', whatsappAlternativo: '5543920002387', email: '' };
document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded',String(open)); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
if (/^\d{12,13}$/.test(contato.whatsapp)) { const a=document.getElementById('whatsapp');a.href='https://wa.me/'+contato.whatsapp+'?text='+encodeURIComponent('Olá, Alex! Vi seu portfólio e gostaria de conversar sobre um projeto.');a.hidden=false; }
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contato.email)) { const a=document.getElementById('email');a.href='mailto:'+contato.email;a.hidden=false; }
if (contato.whatsapp || contato.email) document.getElementById('contact-note').hidden=true;

const alternativo=document.getElementById('whatsapp-alternativo');
if (alternativo && /^\d{12,13}$/.test(contato.whatsappAlternativo)) {alternativo.href='https://wa.me/'+contato.whatsappAlternativo+'?text='+encodeURIComponent('Olá, Alex! Vi seu portfólio e gostaria de conversar sobre um projeto.');alternativo.hidden=false;}
