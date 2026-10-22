/**
 * MAIN.JS — Application Orchestrator
 * Architectural Broadsheet + Technical Atelier
 */

import '../styles/tokens.css';
import '../styles/reset.css';
import '../styles/typography.css';
import '../styles/layout.css';
import '../styles/components.css';
import '../styles/motion.css';

import { initTelemetrySimulator } from './telemetry-simulator.js';
import { initVoiceSimulator } from './voice-simulator.js';
import { initPayloadInspectors } from './payload-inspector.js';
import { initClipboard } from './clipboard.js';
import { initFaqAccordion } from './faq-accordion.js';
import { initContactForm } from './contact-form.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Subsystems
  initTelemetrySimulator();
  initVoiceSimulator();
  initPayloadInspectors();
  initClipboard();
  initFaqAccordion();
  initContactForm();

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
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 3. Navigation Active State on Scroll
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
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

  // 4. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-links');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.style.display === 'flex';
      navMenu.style.display = isOpen ? 'none' : 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '68px';
      navMenu.style.left = '0';
      navMenu.style.right = '0';
      navMenu.style.backgroundColor = 'var(--canvas-base)';
      navMenu.style.padding = 'var(--space-4)';
      navMenu.style.borderBottom = '1px solid var(--border-medium)';
      mobileToggle.textContent = isOpen ? 'MENU' : 'CLOSE';
      mobileToggle.setAttribute('aria-expanded', !isOpen);
    });

    // Close on link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
          mobileToggle.textContent = 'MENU';
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // 5. Global Keyboard Shortcuts Listener
  let lastKey = '';
  document.addEventListener('keydown', (e) => {
    // Avoid triggering in inputs
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    if (e.key === '?') {
      const toast = document.getElementById('global-toast');
      const toastMessage = document.getElementById('toast-message');
      if (toast && toastMessage) {
        toastMessage.textContent = 'Shortcuts: [G+W] Work · [G+S] Solutions · [G+A] About · [G+C] Contact';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
      }
    }

    if (lastKey === 'g' || lastKey === 'G') {
      if (e.key === 'w' || e.key === 'W') {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 's' || e.key === 'S') {
        document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'a' || e.key === 'A') {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'c' || e.key === 'C') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    lastKey = e.key;
  });
});
