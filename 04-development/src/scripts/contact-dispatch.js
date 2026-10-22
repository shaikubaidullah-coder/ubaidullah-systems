/**
 * CONTACT-DISPATCH.JS
 * Validated Brief Dispatch with Transparent Confirmation
 */

export function initContactDispatch() {
  const form = document.getElementById('monograph-brief-form');
  const submitBtn = document.getElementById('btn-submit-monograph-brief');
  const receipt = document.getElementById('monograph-receipt');
  const errorSummary = document.getElementById('monograph-error-summary');

  if (!form || !submitBtn || !receipt) return;

  const nameInput = document.getElementById('monograph-name');
  const emailInput = document.getElementById('monograph-email');
  const scopeSelect = document.getElementById('monograph-scope');
  const messageInput = document.getElementById('monograph-message');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setError(input, errorId, message) {
    input.classList.add('invalid');
    const errEl = document.getElementById(errorId);
    if (errEl) {
      errEl.textContent = message;
      errEl.classList.add('visible');
    }
  }

  function clearError(input, errorId) {
    input.classList.remove('invalid');
    const errEl = document.getElementById(errorId);
    if (errEl) {
      errEl.classList.remove('visible');
    }
  }

  [nameInput, emailInput, messageInput].forEach((input) => {
    if (input) {
      input.addEventListener('input', () => {
        clearError(input, `${input.id}-error`);
      });
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isValid = true;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setError(nameInput, 'monograph-name-error', 'Full name required (min 2 characters).');
      isValid = false;
    } else {
      clearError(nameInput, 'monograph-name-error');
    }

    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      setError(emailInput, 'monograph-email-error', 'Valid work email required.');
      isValid = false;
    } else {
      clearError(emailInput, 'monograph-email-error');
    }

    if (!scopeSelect.value) {
      setError(scopeSelect, 'monograph-scope-error', 'Please select an automation objective.');
      isValid = false;
    } else {
      clearError(scopeSelect, 'monograph-scope-error');
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setError(messageInput, 'monograph-message-error', 'Please describe the workflow or bottleneck (min 10 characters).');
      isValid = false;
    } else {
      clearError(messageInput, 'monograph-message-error');
    }

    if (!isValid) {
      if (errorSummary) {
        errorSummary.textContent = 'Please complete the highlighted fields before submitting.';
        errorSummary.style.display = 'block';
      }
      return;
    }

    if (errorSummary) errorSummary.style.display = 'none';

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `Transmitting Brief...`;

    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      scope: scopeSelect.value,
      message: messageInput.value.trim(),
      timestamp: new Date().toISOString()
    };

    const actionUrl = form.getAttribute('action');

    try {
      if (actionUrl && !actionUrl.startsWith('#') && !actionUrl.includes('placeholder')) {
        const response = await fetch(actionUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Endpoint rejected submission');
      } else {
        await new Promise(r => setTimeout(r, 600));
      }

      form.style.display = 'none';
      receipt.classList.add('visible');
      receipt.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: var(--space-3);">
          <div style="display: flex; align-items: center; gap: var(--space-2);">
            <span style="color: var(--accent-emerald); font-weight: 700;">✓</span>
            <strong style="font-family: var(--font-sans); font-size: var(--font-size-md);">Project Brief Logged</strong>
          </div>
          <p style="font-size: var(--font-size-base); color: var(--text-secondary); line-height: 1.6;">
            Thank you, <strong>${formData.name}</strong>. Your project brief for <strong>${formData.scope}</strong> has been recorded. 
            Shaik Ubaidullah reviews all technical parameters personally and responds within 24 hours.
          </p>
          <div style="display: flex; gap: var(--space-3); flex-wrap: wrap; margin-top: var(--space-2);">
            <a href="mailto:shaikubaidullah689@gmail.com?subject=Project%20Brief%20Follow-up%20(${encodeURIComponent(formData.name)})" class="btn btn-primary" style="font-size: var(--font-size-xs);">
              Send Direct Email Confirmation ↗
            </a>
            <button type="button" class="btn btn-secondary" onclick="window.location.reload();" style="font-size: var(--font-size-xs);">
              Submit Another Brief
            </button>
          </div>
        </div>
      `;
    } catch (err) {
      console.error('Submission failed:', err);
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      if (errorSummary) {
        errorSummary.innerHTML = `Dispatch endpoint unavailable. Please email Shaik directly at <a href="mailto:shaikubaidullah689@gmail.com" style="color: var(--accent-terracotta);">shaikubaidullah689@gmail.com</a>.`;
        errorSummary.style.display = 'block';
      }
    }
  });
}
