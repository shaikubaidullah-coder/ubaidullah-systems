/**
 * CLIPBOARD.JS
 * 1-Click Clipboard Copy with Animated Tactile Toast Notification
 */

export function initClipboard() {
  const copyButtons = document.querySelectorAll('[data-copy-target]');
  const toast = document.getElementById('global-toast');
  const toastMessage = document.getElementById('toast-message');

  let toastTimeout = null;

  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy-target');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        const originalText = btn.innerHTML;
        btn.innerHTML = `<span style="color: var(--accent-emerald);">✓ Copied!</span>`;
        showToast(`Copied to clipboard: ${textToCopy}`);

        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
        showToast(`Press Ctrl+C to copy: ${textToCopy}`);
      }
    });
  });
}
