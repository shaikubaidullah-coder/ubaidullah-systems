/**
 * PAYLOAD-INSPECTOR.JS
 * Tabbed Data Schema & Architecture Inspector for Exhibits
 */

export function initPayloadInspectors() {
  const inspectors = document.querySelectorAll('.schema-inspector');

  inspectors.forEach((inspector) => {
    const tabs = inspector.querySelectorAll('.inspector-tab');
    const content = inspector.querySelector('.inspector-content pre code');

    if (!tabs.length || !content) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const tabKey = tab.getAttribute('data-tab');
        const dataPayload = tab.getAttribute('data-content');

        if (dataPayload) {
          content.textContent = dataPayload;
        }
      });
    });
  });
}
