/**
 * LEAD-EVALUATOR.JS
 * Interactive Pipeline Evaluator Sandbox (Exhibit 01)
 * A real, functional client-side rule engine calculating triage scores & architecture specs.
 */

export function initLeadEvaluator() {
  const triggerBtn = document.getElementById('btn-evaluate-lead');
  const volumeSelect = document.getElementById('eval-lead-volume');
  const methodSelect = document.getElementById('eval-current-method');
  const budgetSelect = document.getElementById('eval-budget-tier');
  
  const scoreDisplay = document.getElementById('eval-score-display');
  const archDisplay = document.getElementById('eval-arch-display');
  const hoursDisplay = document.getElementById('eval-hours-display');
  const jsonPreview = document.getElementById('eval-json-preview');

  if (!triggerBtn || !volumeSelect || !methodSelect || !budgetSelect) return;

  function calculateTriage() {
    const volume = volumeSelect.value;
    const method = methodSelect.value;
    const budget = budgetSelect.value;

    let score = 70;
    let hoursSaved = 8;
    let archRecommendation = 'Standard Webhook Ingest ➔ Claude 3.5 Sonnet ➔ Google Sheets Sync';

    if (volume === '200-1000') {
      score += 15;
      hoursSaved = 16;
      archRecommendation = 'n8n Event-Driven Pipeline ➔ Claude 3.5 JSON Schema Validation ➔ Supabase DB ➔ Calendar Booking Link';
    } else if (volume === '1000+') {
      score += 25;
      hoursSaved = 25;
      archRecommendation = 'Multi-Node n8n Cluster with Redis Queue ➔ Claude 3.5 Priority Scorer ➔ CRM Upsert ➔ Instant SMS/Email Dispatch';
    }

    if (method === 'manual') {
      hoursSaved += 6;
      score += 5;
    }

    if (budget === 'enterprise') {
      score = Math.min(score + 10, 98);
    }

    const payload = {
      system: "SYS.01_LEAD_TRIAGE",
      evaluation: {
        qualification_score: score,
        urgency_rating: score > 85 ? "HIGH_PRIORITY" : "STANDARD_QUEUE",
        projected_capacity_recovered_weekly: `${hoursSaved} hours`,
        recommended_architecture: archRecommendation,
        verification_status: "Validated Ruleset"
      }
    };

    if (scoreDisplay) scoreDisplay.textContent = `${score}/100`;
    if (archDisplay) archDisplay.textContent = archRecommendation;
    if (hoursDisplay) hoursDisplay.textContent = `~${hoursSaved} hrs/week`;
    if (jsonPreview) jsonPreview.textContent = JSON.stringify(payload, null, 2);
  }

  triggerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    triggerBtn.textContent = 'CALCULATING PIPELINE...';
    triggerBtn.disabled = true;

    setTimeout(() => {
      calculateTriage();
      triggerBtn.textContent = 'RE-CALCULATE EVALUATION';
      triggerBtn.disabled = false;
    }, 280);
  });
}
