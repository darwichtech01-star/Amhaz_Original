(function(){
  // ---------- ICON SET (line icons, replaces emoji) ----------
  const ICONS = {
    smartphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="2.5" width="11" height="19" rx="2.4"/><path d="M10.3 5.2h3.4"/><path d="M12 18.4h.01"/></svg>',
    deviceAlt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="2.5" width="11" height="19" rx="2.4"/><circle cx="12" cy="18.4" r="0.9" fill="currentColor" stroke="none"/><path d="M9.6 5h4.8"/></svg>',
    accessories: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7V4.5a1.5 1.5 0 0 1 3 0V7"/><path d="M12 7V4.5a1.5 1.5 0 0 1 3 0V7"/><path d="M7 7h10l-.8 6.4A4.2 4.2 0 0 1 12.05 17 4.2 4.2 0 0 1 7.8 13.4L7 7Z"/><path d="M12 17v3.5"/><path d="M9 20.5h6"/></svg>',
    watch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2.6"/><path d="M12 10v2.3l1.5 1"/><path d="M9 7 8.2 3.6a1 1 0 0 1 1-1.2h5.6a1 1 0 0 1 1 1.2L15 7"/><path d="M9 17l-.8 3.4a1 1 0 0 0 1 1.2h5.6a1 1 0 0 0 1-1.2L15 17"/></svg>',
    audio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.5v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.4"/><rect x="17" y="14" width="4" height="6" rx="1.4"/></svg>',
    tablet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="3" width="15" height="18" rx="2.2"/><path d="M11.5 18.3h1"/></svg>',
    laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="4.5" width="15" height="10" rx="1.6"/><path d="M2.5 19.5h19l-1.6-3.2a1.5 1.5 0 0 0-1.35-.8H5.45a1.5 1.5 0 0 0-1.35.8L2.5 19.5Z"/></svg>',
    gaming: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9h10l2.2 6.3a2 2 0 0 1-1.9 2.7 2 2 0 0 1-1.6-.8L14 15h-4l-1.7 2.2a2 2 0 0 1-1.6.8 2 2 0 0 1-1.9-2.7L7 9Z"/><path d="M9 12.3h2M10 11.3v2"/><circle cx="16.3" cy="11.5" r="0.6" fill="currentColor" stroke="none"/><circle cx="17.7" cy="13" r="0.6" fill="currentColor" stroke="none"/></svg>',
    electronics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="8" height="8" rx="1.4"/><path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3"/></svg>',
    earbuds: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8.5V7a5 5 0 0 1 10 0v1.5"/><rect x="4.8" y="8.5" width="4.4" height="7" rx="2.2"/><rect x="14.8" y="8.5" width="4.4" height="7" rx="2.2"/><path d="M9.2 15.5v2.3a2.3 2.3 0 0 0 4.6 0"/></svg>',
    charger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4.5 13.5H11L9.5 22 19 9.5h-6.5L13 2Z" stroke-linejoin="round"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7.5" width="11" height="9" rx="1.2"/><path d="M13.5 10.5h4l3 3v3h-7z"/><circle cx="7" cy="18.3" r="1.7"/><circle cx="17.3" cy="18.3" r="1.7"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.77.46 3.42 1.28 4.86L2 22l5.36-1.37a9.9 9.9 0 0 0 4.68 1.19h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.94 1.37-.5.07-1.12.1-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.4.27-.29.58-.36.78-.36h.55c.18 0 .42-.03.64.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.19-.15.3-.3.46-.15.16-.31.36-.44.48-.15.14-.3.3-.13.6.17.29.75 1.25 1.6 2.03 1.11 1.02 2.04 1.34 2.34 1.49.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.79.85 2.1 1 .3.15.5.22.57.35.08.14.08.78-.16 1.46Z"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.2A1.7 1.7 0 0 1 5.7 6.5h2l1-1.7h6.6l1 1.7h2A1.7 1.7 0 0 1 20 8.2v9.1a1.7 1.7 0 0 1-1.7 1.7H5.7A1.7 1.7 0 0 1 4 17.3z"/><circle cx="12" cy="12.5" r="3.6"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M20 16.5 15 11l-9 9"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.2s-7.6-4.6-9.7-9A5 5 0 0 1 12 6.4a5 5 0 0 1 9.7 4.8c-2.1 4.4-9.7 9-9.7 9Z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.5 8.5 0 0 1-4-1L3 20l1.1-4A8.4 8.4 0 1 1 21 11.5Z"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.4"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.4"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.4"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.4"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 13.8 9 19 10.5l-5.2 1.9L12 18l-1.8-5.6L5 10.5l5.2-1.5Z"/></svg>',
  };

  // ---------- CONFIG ----------
  const PHONE_1 = "96176007600";
  const PHONE_2 = "96171455555";
  const DEFAULT_MSG = "Hello Amhaz Original, I'm interested in learning more about your latest phones and technology. Can you please provide availability and price?";

  function waUrl(phone, product){
    const msg = product
      ? `Hello Amhaz Original, I'm interested in ${product}. Can you please provide availability and price?`
      : DEFAULT_MSG;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }

  document.querySelectorAll('.wa-link').forEach(el => el.href = waUrl(PHONE_1));
  document.querySelectorAll('.wa-link-2').forEach(el => el.href = waUrl(PHONE_2));
  const waNav = document.getElementById('waNavBtn');
  if(waNav) waNav.href = waUrl(PHONE_1);

  // ---------- HEADER SCROLL ----------
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ---------- MOBILE MENU ----------
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a.mnav').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }));

  // ---------- PARTICLES ----------
  const particleWrap = document.getElementById('particles');
  const sizes = [3,4,5,3,4];
  for(let i=0;i<18;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const size = sizes[i % sizes.length];
    p.style.width = size+'px';
    p.style.height = size+'px';
    p.style.left = (Math.random()*100)+'%';
    p.style.top = (40+Math.random()*55)+'%';
    p.style.animationDuration = (7+Math.random()*10)+'s';
    p.style.animationDelay = (Math.random()*8)+'s';
    particleWrap.appendChild(p);
  }

  // ---------- CATEGORY DATA ----------
  const categories = [
    {icon:"smartphone", name:"Smartphones", note:"All brands"},
    {icon:"deviceAlt", name:"iPhone", note:"Latest models"},
    {icon:"smartphone", name:"Samsung", note:"Galaxy series"},
    {icon:"accessories", name:"Accessories", note:"Cases, cables & more"},
    {icon:"watch", name:"Smart Watches", note:"Stay connected"},
    {icon:"audio", name:"Audio", note:"Headphones & speakers"},
    {icon:"tablet", name:"Tablets", note:"Work & play"},
    {icon:"laptop", name:"Laptops", note:"For work & study"},
    {icon:"gaming", name:"Gaming", note:"Consoles & gear"},
    {icon:"electronics", name:"Electronics", note:"Everyday tech"},
  ];
  const catScroll = document.getElementById('catScroll');
  categories.forEach(c => {
    const el = document.createElement('div');
    el.className = 'cat-card reveal';
    el.innerHTML = `<div class="cat-glow"></div><div class="cat-icon">${ICONS[c.icon]}</div><h4>${c.name}</h4><span>${c.note}</span>`;
    catScroll.appendChild(el);
  });

  // ---------- PRODUCT DATA (DEMO PLACEHOLDERS) ----------
  const products = [
    {icon:"deviceAlt", name:"Latest iPhone", desc:"Flagship performance, pro camera system.", price:"Price on request", badge:"new"},
    {icon:"smartphone", name:"Samsung Galaxy", desc:"Bright display, all-day battery life.", price:"Price on request", badge:"best"},
    {icon:"earbuds", name:"Wireless Earbuds", desc:"Compact sound, seamless pairing.", price:"Price on request", badge:null},
    {icon:"watch", name:"Smart Watch", desc:"Fitness, notifications, style.", price:"Price on request", badge:"new"},
    {icon:"laptop", name:"Ultrabook Laptop", desc:"Slim, fast, built for daily work.", price:"Price on request", badge:null},
    {icon:"tablet", name:"Tablet", desc:"Great for study, work and streaming.", price:"Price on request", badge:null},
    {icon:"charger", name:"Fast Charger Kit", desc:"Charge up in a fraction of the time.", price:"Price on request", badge:"best"},
    {icon:"gaming", name:"Gaming Controller", desc:"Precise, comfortable, wireless.", price:"Price on request", badge:null},
  ];
  const grid = document.getElementById('productGrid');
  products.forEach(p => {
    const el = document.createElement('div');
    el.className = 'product-card reveal';
    const badgeHtml = p.badge === 'new' ? '<span class="badge badge-new">New</span>'
      : p.badge === 'best' ? '<span class="badge badge-best">Best Seller</span>' : '';
    el.innerHTML = `
      <div class="product-media">${badgeHtml}<div class="shape">${ICONS[p.icon]}</div></div>
      <div class="product-body">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
        <div class="product-price">${p.price}<span class="demo">Demo listing</span></div>
        <div class="product-actions">
          <a class="btn-sm btn-sm-ghost" href="#" data-detail="${p.name}">View Details</a>
          <a class="btn-sm btn-sm-primary" target="_blank" rel="noopener" href="${waUrl(PHONE_1, p.name)}">Order on WhatsApp</a>
        </div>
      </div>`;
    el.querySelector('[data-detail]').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    });
    grid.appendChild(el);
  });

  // ---------- ICON INJECTION (badges + instagram tiles) ----------
  const badgeTruck = document.getElementById('badgeTruck');
  if(badgeTruck) badgeTruck.innerHTML = ICONS.truck;
  const badgeChat = document.getElementById('badgeChat');
  if(badgeChat) badgeChat.innerHTML = ICONS.chat;
  document.querySelectorAll('.ig-tile[data-ig]').forEach(el => {
    el.innerHTML = ICONS[el.dataset.ig] || '';
  });

  // ---------- SCROLL REVEAL ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

})();(function(){
  // ---------- ICON SET (line icons, replaces emoji) ----------
  const ICONS = {
    smartphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="2.5" width="11" height="19" rx="2.4"/><path d="M10.3 5.2h3.4"/><path d="M12 18.4h.01"/></svg>',
    deviceAlt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="2.5" width="11" height="19" rx="2.4"/><circle cx="12" cy="18.4" r="0.9" fill="currentColor" stroke="none"/><path d="M9.6 5h4.8"/></svg>',
    accessories: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7V4.5a1.5 1.5 0 0 1 3 0V7"/><path d="M12 7V4.5a1.5 1.5 0 0 1 3 0V7"/><path d="M7 7h10l-.8 6.4A4.2 4.2 0 0 1 12.05 17 4.2 4.2 0 0 1 7.8 13.4L7 7Z"/><path d="M12 17v3.5"/><path d="M9 20.5h6"/></svg>',
    watch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2.6"/><path d="M12 10v2.3l1.5 1"/><path d="M9 7 8.2 3.6a1 1 0 0 1 1-1.2h5.6a1 1 0 0 1 1 1.2L15 7"/><path d="M9 17l-.8 3.4a1 1 0 0 0 1 1.2h5.6a1 1 0 0 0 1-1.2L15 17"/></svg>',
    audio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.5v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.4"/><rect x="17" y="14" width="4" height="6" rx="1.4"/></svg>',
    tablet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="3" width="15" height="18" rx="2.2"/><path d="M11.5 18.3h1"/></svg>',
    laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="4.5" width="15" height="10" rx="1.6"/><path d="M2.5 19.5h19l-1.6-3.2a1.5 1.5 0 0 0-1.35-.8H5.45a1.5 1.5 0 0 0-1.35.8L2.5 19.5Z"/></svg>',
    gaming: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9h10l2.2 6.3a2 2 0 0 1-1.9 2.7 2 2 0 0 1-1.6-.8L14 15h-4l-1.7 2.2a2 2 0 0 1-1.6.8 2 2 0 0 1-1.9-2.7L7 9Z"/><path d="M9 12.3h2M10 11.3v2"/><circle cx="16.3" cy="11.5" r="0.6" fill="currentColor" stroke="none"/><circle cx="17.7" cy="13" r="0.6" fill="currentColor" stroke="none"/></svg>',
    electronics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="8" height="8" rx="1.4"/><path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3"/></svg>',
    earbuds: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8.5V7a5 5 0 0 1 10 0v1.5"/><rect x="4.8" y="8.5" width="4.4" height="7" rx="2.2"/><rect x="14.8" y="8.5" width="4.4" height="7" rx="2.2"/><path d="M9.2 15.5v2.3a2.3 2.3 0 0 0 4.6 0"/></svg>',
    charger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4.5 13.5H11L9.5 22 19 9.5h-6.5L13 2Z" stroke-linejoin="round"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7.5" width="11" height="9" rx="1.2"/><path d="M13.5 10.5h4l3 3v3h-7z"/><circle cx="7" cy="18.3" r="1.7"/><circle cx="17.3" cy="18.3" r="1.7"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.77.46 3.42 1.28 4.86L2 22l5.36-1.37a9.9 9.9 0 0 0 4.68 1.19h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.94 1.37-.5.07-1.12.1-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.4.27-.29.58-.36.78-.36h.55c.18 0 .42-.03.64.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.19-.15.3-.3.46-.15.16-.31.36-.44.48-.15.14-.3.3-.13.6.17.29.75 1.25 1.6 2.03 1.11 1.02 2.04 1.34 2.34 1.49.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.79.85 2.1 1 .3.15.5.22.57.35.08.14.08.78-.16 1.46Z"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.2A1.7 1.7 0 0 1 5.7 6.5h2l1-1.7h6.6l1 1.7h2A1.7 1.7 0 0 1 20 8.2v9.1a1.7 1.7 0 0 1-1.7 1.7H5.7A1.7 1.7 0 0 1 4 17.3z"/><circle cx="12" cy="12.5" r="3.6"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M20 16.5 15 11l-9 9"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.2s-7.6-4.6-9.7-9A5 5 0 0 1 12 6.4a5 5 0 0 1 9.7 4.8c-2.1 4.4-9.7 9-9.7 9Z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.5 8.5 0 0 1-4-1L3 20l1.1-4A8.4 8.4 0 1 1 21 11.5Z"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.4"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.4"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.4"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.4"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 13.8 9 19 10.5l-5.2 1.9L12 18l-1.8-5.6L5 10.5l5.2-1.5Z"/></svg>',
  };

  // ---------- CONFIG ----------
  const PHONE_1 = "96176007600";
  const PHONE_2 = "96171455555";
  const DEFAULT_MSG = "Hello Amhaz Original, I'm interested in learning more about your latest phones and technology. Can you please provide availability and price?";

  function waUrl(phone, product){
    const msg = product
      ? `Hello Amhaz Original, I'm interested in ${product}. Can you please provide availability and price?`
      : DEFAULT_MSG;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }

  document.querySelectorAll('.wa-link').forEach(el => el.href = waUrl(PHONE_1));
  document.querySelectorAll('.wa-link-2').forEach(el => el.href = waUrl(PHONE_2));
  const waNav = document.getElementById('waNavBtn');
  if(waNav) waNav.href = waUrl(PHONE_1);

  // ---------- HEADER SCROLL ----------
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ---------- MOBILE MENU ----------
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a.mnav').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }));

  // ---------- PARTICLES ----------
  const particleWrap = document.getElementById('particles');
  const sizes = [3,4,5,3,4];
  for(let i=0;i<18;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const size = sizes[i % sizes.length];
    p.style.width = size+'px';
    p.style.height = size+'px';
    p.style.left = (Math.random()*100)+'%';
    p.style.top = (40+Math.random()*55)+'%';
    p.style.animationDuration = (7+Math.random()*10)+'s';
    p.style.animationDelay = (Math.random()*8)+'s';
    particleWrap.appendChild(p);
  }

  // ---------- CATEGORY DATA ----------
  const categories = [
    {icon:"smartphone", name:"Smartphones", note:"All brands"},
    {icon:"deviceAlt", name:"iPhone", note:"Latest models"},
    {icon:"smartphone", name:"Samsung", note:"Galaxy series"},
    {icon:"accessories", name:"Accessories", note:"Cases, cables & more"},
    {icon:"watch", name:"Smart Watches", note:"Stay connected"},
    {icon:"audio", name:"Audio", note:"Headphones & speakers"},
    {icon:"tablet", name:"Tablets", note:"Work & play"},
    {icon:"laptop", name:"Laptops", note:"For work & study"},
    {icon:"gaming", name:"Gaming", note:"Consoles & gear"},
    {icon:"electronics", name:"Electronics", note:"Everyday tech"},
  ];
  const catScroll = document.getElementById('catScroll');
  categories.forEach(c => {
    const el = document.createElement('div');
    el.className = 'cat-card reveal';
    el.innerHTML = `<div class="cat-glow"></div><div class="cat-icon">${ICONS[c.icon]}</div><h4>${c.name}</h4><span>${c.note}</span>`;
    catScroll.appendChild(el);
  });

  // ---------- PRODUCT DATA (DEMO PLACEHOLDERS) ----------
  const products = [
    {icon:"deviceAlt", name:"Latest iPhone", desc:"Flagship performance, pro camera system.", price:"Price on request", badge:"new"},
    {icon:"smartphone", name:"Samsung Galaxy", desc:"Bright display, all-day battery life.", price:"Price on request", badge:"best"},
    {icon:"earbuds", name:"Wireless Earbuds", desc:"Compact sound, seamless pairing.", price:"Price on request", badge:null},
    {icon:"watch", name:"Smart Watch", desc:"Fitness, notifications, style.", price:"Price on request", badge:"new"},
    {icon:"laptop", name:"Ultrabook Laptop", desc:"Slim, fast, built for daily work.", price:"Price on request", badge:null},
    {icon:"tablet", name:"Tablet", desc:"Great for study, work and streaming.", price:"Price on request", badge:null},
    {icon:"charger", name:"Fast Charger Kit", desc:"Charge up in a fraction of the time.", price:"Price on request", badge:"best"},
    {icon:"gaming", name:"Gaming Controller", desc:"Precise, comfortable, wireless.", price:"Price on request", badge:null},
  ];
  const grid = document.getElementById('productGrid');
  products.forEach(p => {
    const el = document.createElement('div');
    el.className = 'product-card reveal';
    const badgeHtml = p.badge === 'new' ? '<span class="badge badge-new">New</span>'
      : p.badge === 'best' ? '<span class="badge badge-best">Best Seller</span>' : '';
    el.innerHTML = `
      <div class="product-media">${badgeHtml}<div class="shape">${ICONS[p.icon]}</div></div>
      <div class="product-body">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
        <div class="product-price">${p.price}<span class="demo">Demo listing</span></div>
        <div class="product-actions">
          <a class="btn-sm btn-sm-ghost" href="#" data-detail="${p.name}">View Details</a>
          <a class="btn-sm btn-sm-primary" target="_blank" rel="noopener" href="${waUrl(PHONE_1, p.name)}">Order on WhatsApp</a>
        </div>
      </div>`;
    el.querySelector('[data-detail]').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    });
    grid.appendChild(el);
  });

  // ---------- ICON INJECTION (badges + instagram tiles) ----------
  const badgeTruck = document.getElementById('badgeTruck');
  if(badgeTruck) badgeTruck.innerHTML = ICONS.truck;
  const badgeChat = document.getElementById('badgeChat');
  if(badgeChat) badgeChat.innerHTML = ICONS.chat;
  document.querySelectorAll('.ig-tile[data-ig]').forEach(el => {
    el.innerHTML = ICONS[el.dataset.ig] || '';
  });

  // ---------- SCROLL REVEAL ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

})();