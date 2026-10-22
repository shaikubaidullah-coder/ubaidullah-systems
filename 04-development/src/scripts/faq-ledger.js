/**
 * FAQ-LEDGER.JS
 * Accessible Keyboard-Navigable Accordion for the Systems Monograph
 */

export function initFaqLedger() {
  const faqItems = document.querySelectorAll('.faq-ledger-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-ledger-trigger');
    const panel = item.querySelector('.faq-ledger-panel');

    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close other items
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          const otherTrigger = other.querySelector('.faq-ledger-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });
}
