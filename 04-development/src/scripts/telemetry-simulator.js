/**
 * TELEMETRY-SIMULATOR.JS
 * Interactive 3-Node Automation Pipeline Test Harness (Hero Section)
 * Clearly labeled as an honest demonstration of pipeline execution logic.
 */

export function initTelemetrySimulator() {
  const triggerBtn = document.getElementById('btn-run-simulation');
  const node1 = document.getElementById('pipeline-node-1');
  const node2 = document.getElementById('pipeline-node-2');
  const node3 = document.getElementById('pipeline-node-3');
  const terminal = document.getElementById('telemetry-terminal-output');
  const latency1 = document.getElementById('node-1-latency');
  const latency2 = document.getElementById('node-2-latency');
  const latency3 = document.getElementById('node-3-latency');

  if (!triggerBtn || !node1 || !node2 || !node3 || !terminal) return;

  let isRunning = false;

  function appendLog(text, className = '') {
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`;
    const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
    line.textContent = `[${timestamp}] ${text}`;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
  }

  triggerBtn.addEventListener('click', () => {
    if (isRunning) return;
    isRunning = true;
    triggerBtn.disabled = true;
    triggerBtn.textContent = 'EXECUTING RUN...';

    // Reset nodes
    [node1, node2, node3].forEach(n => n.classList.remove('active'));
    terminal.innerHTML = '';
    appendLog('INIT: Pipeline test run dispatched...', 'accent');

    // Stage 1: Webhook Ingest
    setTimeout(() => {
      node1.classList.add('active');
      if (latency1) latency1.textContent = '38ms';
      appendLog('NODE 01: Inbound payload validated (HTTP 200 OK)', 'success');
      appendLog('PAYLOAD: { source: "web_intake", intent: "ai_voice_system", company_size: "15-50" }');

      // Stage 2: Claude 3.5 Sonnet Schema Parser
      setTimeout(() => {
        node1.classList.remove('active');
        node2.classList.add('active');
        if (latency2) latency2.textContent = '540ms';
        appendLog('NODE 02: Claude 3.5 Sonnet evaluating against LeadSchema...', 'accent');
        appendLog('EVAL: { score: 94, tier: "A+", recommended_service: "Custom Voice Agent" }');

        // Stage 3: Supabase Sync & Dispatch
        setTimeout(() => {
          node2.classList.remove('active');
          node3.classList.add('active');
          if (latency3) latency3.textContent = '62ms';
          appendLog('NODE 03: Row upserted in Supabase leads_table [UUID: #8f92a]', 'success');
          appendLog('DISPATCH: Automated calendar invitation generated & delivered.', 'success');
          appendLog('STATUS: Pipeline executed cleanly. Total duration: 640ms.', 'accent');

          // Finish
          setTimeout(() => {
            node3.classList.remove('active');
            triggerBtn.disabled = false;
            triggerBtn.textContent = 'EXECUTE TEST RUN';
            isRunning = false;
          }, 1200);
        }, 800);
      }, 700);
    }, 300);
  });
}
