/**
 * VOICE-SIMULATOR.JS
 * Interactive Voice Agent Audio Sandbox (Exhibit 02)
 * Demonstrates low-latency conversational AI call flow with live synced transcript.
 */

export function initVoiceSimulator() {
  const container = document.getElementById('voice-player-container');
  const playBtn = document.getElementById('btn-play-voice');
  const timerDisplay = document.getElementById('voice-call-timer');
  const transcriptStream = document.getElementById('voice-transcript-stream');
  const scenarioSelect = document.getElementById('voice-scenario-select');

  if (!container || !playBtn || !timerDisplay || !transcriptStream) return;

  let isPlaying = false;
  let timerInterval = null;
  let secondsElapsed = 0;
  let transcriptTimeout = null;

  const scenarios = {
    qualification: [
      { speaker: 'agent', delay: 400, text: "Apex Automations, this is Maya. How can I help with your system integration today?" },
      { speaker: 'caller', delay: 2400, text: "Hi Maya, we're an agency with 25 people looking to automate our client onboarding workflow in n8n." },
      { speaker: 'agent', delay: 4800, text: "Got it! We specialize in n8n pipeline orchestration. How many new clients do you onboard each month?" },
      { speaker: 'caller', delay: 7200, text: "Around 15 to 20. Right now our account managers waste 4 hours setting up accounts manually." },
      { speaker: 'agent', delay: 9800, text: "That's exactly what our onboarding agent eliminates. Would Thursday at 2:00 PM IST work for a 20-minute architecture review?" },
      { speaker: 'caller', delay: 12400, text: "Yes, Thursday at 2:00 PM is perfect." },
      { speaker: 'agent', delay: 14200, text: "Invitation dispatched to your email! We look forward to connecting with your team." }
    ],
    afterhours: [
      { speaker: 'agent', delay: 400, text: "Thank you for calling Precision Health. You've reached our 24/7 autonomous triage line." },
      { speaker: 'caller', delay: 2200, text: "Hi, I need to reschedule my consultation with Dr. Rao for tomorrow morning." },
      { speaker: 'agent', delay: 4400, text: "I can take care of that right now. Could you please confirm your registered phone number?" },
      { speaker: 'caller', delay: 6800, text: "Sure, it ends in 4108." },
      { speaker: 'agent', delay: 8600, text: "Confirmed. Dr. Rao has openings tomorrow at 3:30 PM or Friday at 10:00 AM. Which do you prefer?" },
      { speaker: 'caller', delay: 11200, text: "Tomorrow at 3:30 PM works great." },
      { speaker: 'agent', delay: 13000, text: "You're all set for tomorrow at 3:30 PM. A SMS confirmation has just been sent to your phone." }
    ]
  };

  function playTone(freq, duration) {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {
      // AudioContext not allowed without gesture or unavailable
    }
  }

  function startPlayback() {
    isPlaying = true;
    container.classList.add('playing');
    playBtn.textContent = 'PAUSE SIMULATION';
    secondsElapsed = 0;
    transcriptStream.innerHTML = '';

    // Play subtle friendly connect tone
    playTone(520, 0.15);

    // Timer
    timerInterval = setInterval(() => {
      secondsElapsed++;
      const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
      const secs = String(secondsElapsed % 60).padStart(2, '0');
      timerDisplay.textContent = `${mins}:${secs}`;
    }, 1000);

    const activeScenarioKey = scenarioSelect ? scenarioSelect.value : 'qualification';
    const lines = scenarios[activeScenarioKey] || scenarios.qualification;

    lines.forEach((line) => {
      setTimeout(() => {
        if (!isPlaying) return;
        const bubble = document.createElement('div');
        bubble.className = `transcript-bubble ${line.speaker} active`;
        const prefix = line.speaker === 'agent' ? 'VOICE AI // MAYA:' : 'CALLER:';
        bubble.innerHTML = `<strong>${prefix}</strong> ${line.text}`;
        transcriptStream.appendChild(bubble);
        transcriptStream.scrollTop = transcriptStream.scrollHeight;

        if (line.speaker === 'agent') {
          playTone(440, 0.08);
        }

        setTimeout(() => {
          bubble.classList.remove('active');
        }, 1500);
      }, line.delay);
    });

    const maxDuration = (lines[lines.length - 1].delay + 2500);
    transcriptTimeout = setTimeout(() => {
      stopPlayback();
    }, maxDuration);
  }

  function stopPlayback() {
    isPlaying = false;
    container.classList.remove('playing');
    playBtn.textContent = 'PLAY CALL RECORDING';
    clearInterval(timerInterval);
    clearTimeout(transcriptTimeout);
  }

  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  });

  if (scenarioSelect) {
    scenarioSelect.addEventListener('change', () => {
      if (isPlaying) stopPlayback();
      transcriptStream.innerHTML = '<div class="caption-text">Scenario changed. Press Play to listen to the simulated call.</div>';
      timerDisplay.textContent = '00:00';
    });
  }
}
