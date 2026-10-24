/**
 * MAIN.JS — Application Orchestrator
 * Concept: The Systems Monograph & Exhibition Ledger
 */

import '../styles/tokens.css';
import '../styles/reset.css';
import '../styles/typography.css';
import '../styles/layout.css';
import '../styles/components.css';
import '../styles/motion.css';

import { initLeadEvaluator } from './lead-evaluator.js';
import { initVoiceSimulator } from './voice-simulator.js';
import { initClipboard } from './clipboard.js';
import { initFaqLedger } from './faq-ledger.js';
import { initContactDispatch } from './contact-dispatch.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Subsystems
  initLeadEvaluator();
  initVoiceSimulator();
  initClipboard();
  initFaqLedger();
  initContactDispatch();

  // 2. Intersection Observer for Scroll Reveals
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 3. Navigation Active State on Scroll
  const navLinks = document.querySelectorAll('.nav-ledger-item[href^="#"]');
  const sections = Array.from(navLinks).map(link => {
    const targetId = link.getAttribute('href');
    return document.querySelector(targetId);
  }).filter(Boolean);

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = `#${section.getAttribute('id')}`;

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { passive: true });

  // 4. Smooth Anchor Link Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 5. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileDrawer.classList.toggle('is-open');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 6. Global Keyboard Shortcuts Listener
  let lastKey = '';
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    if (e.key === '?') {
      const toast = document.getElementById('global-toast');
      const toastMessage = document.getElementById('toast-message');
      if (toast && toastMessage) {
        toastMessage.textContent = 'Navigation: [G+I] Index · [G+A] Architecture · [G+B] Builder · [G+D] Dispatch';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
      }
    }

    if (lastKey === 'g' || lastKey === 'G') {
      if (e.key === 'i' || e.key === 'I') {
        document.getElementById('index')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'a' || e.key === 'A') {
        document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'b' || e.key === 'B') {
        document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'd' || e.key === 'D') {
        document.getElementById('dispatch')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    lastKey = e.key;
  });
});
