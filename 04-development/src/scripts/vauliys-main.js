/**
 * VAULIYS-MAIN.JS — Interactive Micro-Interactions & Orchestrator
 * Faithful to Vauliys.com folder tabs, pill interactions & letter post
 */

import '../styles/vauliys.css';

document.addEventListener('DOMContentLoaded', () => {
  initFolderTabs();
  initEmailCopy();
  initBackToTop();
  initLetterForm();
  initScrollHeader();
});

/**
 * 1. Folder Tabs Filtering
 * Filters project cards based on category: all, pipelines, voice, tools
 */
function initFolderTabs() {
  const tabs = document.querySelectorAll('.folder-tab');
  const cards = document.querySelectorAll('.vauliys-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Set active tab
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');

      // Filter cards
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('is-hidden');
          card.classList.add('fade-in');
        } else {
          card.classList.add('is-hidden');
          card.classList.remove('fade-in');
        }
      });
    });
  });
}

/**
 * 2. Email Copy with Feedback Tooltip
 */
function initEmailCopy() {
  const copyBtns = document.querySelectorAll('[data-copy-email]');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'shaikubaidullah689@gmail.com';
      const toast = btn.querySelector('.copy-feedback-toast');

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        if (toast) {
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
          }, 2200);
        }
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    });
  });
}

/**
 * 3. Back to Top Smooth Scroll
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 4. Send a Letter Form Handler
 */
function initLetterForm() {
  const form = document.getElementById('letter-form');
  const statusMsg = document.getElementById('letter-status-msg');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('letter-name');
    const emailInput = document.getElementById('letter-email');
    const messageInput = document.getElementById('letter-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !message) {
      if (statusMsg) {
        statusMsg.textContent = 'Please fill out all fields.';
        statusMsg.style.color = '#B23A22';
        statusMsg.classList.add('show');
      }
      return;
    }

    // Construct mailto link
    const subject = encodeURIComponent(`Project Letter from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:shaikubaidullah689@gmail.com?subject=${subject}&body=${body}`;

    if (statusMsg) {
      statusMsg.textContent = 'Letter posted! Opening your mail client...';
      statusMsg.style.color = '#2D6A28';
      statusMsg.classList.add('show');
    }

    // Trigger mail client
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);

    // Reset form after delay
    setTimeout(() => {
      form.reset();
      if (statusMsg) {
        statusMsg.classList.remove('show');
      }
    }, 4000);
  });
}

/**
 * 5. Header Elevation on Scroll
 */
function initScrollHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
}
