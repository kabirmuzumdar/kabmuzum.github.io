/* Display and navigation only. To edit your experiences, use content.js. */
(() => {
  'use strict';
  const data = window.PORTFOLIO;
  if (!data) return;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const list = value => Array.isArray(value) ? value : [];
  const url = value => {
    const text = String(value ?? '').trim();
    if (!text || /[\x00-\x20\\]/.test(text) || text.startsWith('//')) return '';
    if (/^[a-z][a-z0-9+.-]*:/i.test(text) && !/^(https?:|mailto:|tel:)/i.test(text)) return '';
    return text;
  };
  const external = value => /^https?:/i.test(value) ? ' target="_blank" rel="noopener noreferrer"' : '';
  const put = (id, html) => { document.getElementById(id).innerHTML = html; };
  const bullets = items => list(items).length ? `<ul class="highlights">${items.map(item => `<li>${escape(item)}</li>`).join('')}</ul>` : '';
  const tags = items => list(items).length ? `<ul class="tags" aria-label="Tools and topics">${items.map(item => `<li>${escape(item)}</li>`).join('')}</ul>` : '';
  const links = items => {
    const valid = list(items).filter(item => url(item.url));
    return valid.length ? `<div class="card-links">${valid.map(item => `<a href="${escape(url(item.url))}"${external(url(item.url))}>${escape(item.label || 'View resource')}</a>`).join('')}</div>` : '';
  };
  const images = (items, title) => {
    const valid = list(items).filter(item => url(item.src));
    if (!valid.length) return '';
    return `<div class="image-gallery">${valid.map(item => `<figure><a href="${escape(url(item.src))}" target="_blank" rel="noopener noreferrer" aria-label="Open image: ${escape(item.alt || title)}"><img src="${escape(url(item.src))}" alt="${escape(item.alt || title)}" class="${item.fit === 'cover' ? 'fit-cover' : ''}" loading="lazy" decoding="async"></a>${item.caption ? `<figcaption>${escape(item.caption)}</figcaption>` : ''}</figure>`).join('')}</div>`;
  };
  const entry = (item, type) => `<article class="card" id="${type}-${escape(item.id)}">
    ${images(item.images, item.title)}
    <div class="card-content">
      <div class="card-header"><h3 class="card-title">${escape(item.title)}</h3>
        ${item.subtitle ? `<p class="card-subtitle">${escape(item.subtitle)}</p>` : ''}
        ${item.organization ? `<p class="organization">${escape(item.organization)}</p>` : ''}</div>
      ${item.role ? `<p class="role">${escape(item.role)}</p>` : ''}
      ${item.mentor ? `<p class="mentor">Mentor: ${escape(item.mentor)}</p>` : ''}
      ${item.summary ? `<p>${escape(item.summary)}</p>` : ''}
      ${bullets(item.highlights)}${tags(item.tags)}${links(item.links)}
    </div>
    ${item.dates || item.location ? `<div class="card-action">${[item.dates, item.location].filter(Boolean).map(escape).join(' · ')}</div>` : ''}
  </article>`;

  const profile = data.profile;
  document.querySelectorAll('[data-name]').forEach(node => { node.textContent = profile.name; });
  document.getElementById('hero-description').textContent = profile.headline;
  document.getElementById('year').textContent = new Date().getFullYear();
  const portrait = document.getElementById('profile-image');
  portrait.textContent = profile.initials || 'KM';
  if (url(profile.photo)) {
    const photo = document.createElement('img');
    photo.src = url(profile.photo);
    photo.alt = profile.photoAlt || profile.name;
    photo.addEventListener('error', () => { portrait.textContent = profile.initials || 'KM'; });
    portrait.replaceChildren(photo);
  }
  document.querySelectorAll('[data-cv]').forEach(node => { node.href = url(profile.cv) || 'assets/resume/Kabir_Muzumdar_CV.pdf'; });
  const githubIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.5v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.9 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.8 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.4 11.4 0 0 0 12 .7Z"/></svg>';
  put('social-links', [
    url(profile.linkedin) ? `<a class="icon-btn linkedin" href="${escape(url(profile.linkedin))}" target="_blank" rel="noopener noreferrer" aria-label="Kabir on LinkedIn">in</a>` : '',
    url(profile.github) ? `<a class="icon-btn github" href="${escape(url(profile.github))}" target="_blank" rel="noopener noreferrer" aria-label="Kabir on GitHub">${githubIcon}</a>` : ''
  ].join(''));
  put('about-content', list(data.about.paragraphs).map(p => `<p>${escape(p)}</p>`).join('') + (list(data.about.leadership).length ? `<h3>Leadership &amp; Service</h3>${bullets(data.about.leadership)}` : ''));
  put('research-list', list(data.research).map(item => entry(item, 'research')).join(''));
  put('project-list', list(data.projects).map(item => entry(item, 'project')).join(''));
  put('skills-list', list(data.skills).map(group => `<article class="card"><div class="card-content"><h3 class="card-title">${escape(group.title)}</h3><ul class="skill-list">${list(group.items).map(item => `<li>${escape(item)}</li>`).join('')}</ul></div></article>`).join(''));
  put('education-list', list(data.education).map(item => `<article class="card"><div class="card-content"><h3 class="card-title">${escape(item.school)}</h3><p class="role">${escape(item.degree)}</p><dl class="education-details">${item.certificate ? `<dt>Certificate:</dt><dd>${escape(item.certificate)}</dd>` : ''}${item.gpa ? `<dt>GPA:</dt><dd>${escape(item.gpa)}</dd>` : ''}${list(item.coursework).length ? `<dt>Coursework:</dt><dd>${item.coursework.map(escape).join(' · ')}</dd>` : ''}</dl>${list(item.honors).length ? `<div class="education-honors"><h4>Honors &amp; Awards</h4>${bullets(item.honors)}</div>` : ''}</div>${item.dates ? `<div class="card-action">${escape(item.dates)}</div>` : ''}</article>`).join(''));
  const contact = [
    [profile.email ? `mailto:${profile.email}` : '', 'Email', profile.email, '✉'],
    [profile.phone ? `tel:${profile.phone.replace(/[^+\d]/g, '')}` : '', 'Phone', profile.phone, '↗'],
    [profile.linkedin, 'LinkedIn', profile.linkedin?.replace(/^https?:\/\//, '').replace(/\/$/, ''), 'in'],
    [profile.github, 'GitHub', profile.github?.replace(/^https?:\/\//, '').replace(/\/$/, ''), 'GH'],
    [profile.website, 'Website', profile.website?.replace(/^https?:\/\//, '').replace(/\/$/, ''), 'www']
  ].filter(item => url(item[0]));
  put('contact-content', `${profile.location ? `<p class="contact-location">${escape(profile.location)}</p>` : ''}<ul class="contact-list">${contact.map(([href, label, text, icon]) => `<li><a href="${escape(url(href))}"${external(url(href))} aria-label="${escape(label + ': ' + text)}"><span class="contact-icon" aria-hidden="true">${icon}</span><span class="contact-label">${escape(text)}</span></a></li>`).join('')}</ul>`);
  document.querySelectorAll('.image-gallery img').forEach(img => img.addEventListener('error', () => {
    const gallery = img.closest('.image-gallery');
    img.closest('figure').remove();
    if (!gallery.children.length) gallery.remove();
    console.warn('Image could not load. Check the path in content.js:', img.getAttribute('src'));
  }));

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let typed;
  const updateTyping = () => {
    if (typed) { typed.destroy(); typed = undefined; }
    const roles = list(profile.roles);
    document.querySelector('.typing').textContent = roles[0] || 'Civil Engineering Student';
    if (!motion.matches && typeof window.Typed === 'function' && roles.length > 1) {
      typed = new window.Typed('.typing', { strings: roles.map(escape), loop: true, typeSpeed: 80, backSpeed: 40, backDelay: 1600 });
    }
  };
  updateTyping();
  motion.addEventListener('change', updateTyping);

  const nav = document.getElementById('site-navigation');
  const toggle = document.getElementById('menu-toggle');
  const backdrop = document.getElementById('menu-backdrop');
  const main = document.querySelector('main');
  const mobile = window.matchMedia('(max-width: 992px)');
  const navLinks = [...nav.querySelectorAll('li a')];
  const setMenu = (open, restoreFocus = false) => {
    open = open && mobile.matches;
    nav.classList.toggle('is-open', open);
    nav.inert = mobile.matches && !open;
    main.inert = open;
    backdrop.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (restoreFocus) toggle.focus();
  };
  setMenu(false);
  mobile.addEventListener('change', () => setMenu(false));
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  backdrop.addEventListener('click', () => setMenu(false, true));
  document.querySelector('.mobile-name').addEventListener('click', () => setMenu(false));
  navLinks.forEach(link => link.addEventListener('click', () => {
    if (mobile.matches) {
      setMenu(false);
      const target = document.querySelector(link.getAttribute('href'));
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  }));
  document.addEventListener('keydown', event => {
    if (!nav.classList.contains('is-open')) return;
    if (event.key === 'Escape') setMenu(false, true);
    if (event.key === 'Tab') {
      const first = toggle;
      const last = navLinks[navLinks.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  const sections = [...document.querySelectorAll('main > section')];
  let scheduled = false;
  const updateActiveLink = () => {
    const marker = window.scrollY + (mobile.matches ? 100 : 50);
    let active = sections[0].id;
    sections.forEach(section => { if (section.offsetTop <= marker) active = section.id; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3) active = sections[sections.length - 1].id;
    navLinks.forEach(link => {
      if (link.getAttribute('href') === '#' + active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  };
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateActiveLink); } }, { passive: true });
  window.addEventListener('resize', updateActiveLink);
  window.addEventListener('load', updateActiveLink);
  updateActiveLink();

  /* ---------- intro fold-open sequence ---------- */
  const loader = document.getElementById('intro-loader');
  const initialsMark = loader && loader.querySelector('[data-initials]');
  if (initialsMark) initialsMark.textContent = profile.initials || 'KM';
  const finishIntro = () => { if (loader) loader.classList.add('is-done'); };
  if (loader) {
    if (motion.matches) {
      finishIntro();
    } else {
      window.setTimeout(finishIntro, 1150);
    }
  }

  /* ---------- scroll-triggered section reveals ---------- */
  const revealTargets = document.querySelectorAll('.reveal');
  if (motion.matches || typeof window.IntersectionObserver !== 'function') {
    revealTargets.forEach(el => el.classList.add('in-view'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach(el => observer.observe(el));
  }
})();
