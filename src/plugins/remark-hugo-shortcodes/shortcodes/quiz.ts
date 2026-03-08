/**
 * quiz shortcode (95 uses)
 *
 * Hugo:   {{% quiz "Option1" "Option2" "Option3" 2 %}}
 * Output: Interactive quiz with radio buttons + CSS + JS
 *
 * The CSS is injected only once (first quiz on page).
 * Each quiz gets a unique ID.
 */

let quizCounter = 0;
let styleInjected = false;

/** Reset state between pages (called at start of each file processing) */
export function resetQuizState(): void {
  quizCounter = 0;
  styleInjected = false;
}

/** Get current quiz counter (used by quizif overlay) */
export function getQuizCounter(): number {
  return quizCounter;
}

const QUIZ_CSS = `<style>
/* --- Quiz block --- */
.quizbutton.quiz-block {
  position: relative;
  padding-bottom: 1rem;
}
.quizbutton .radiobox {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}
.quizbutton .quiz-option {
  display: none;
}
.quizbutton .quizlabel {
  flex: 1 1 28%;
  min-width: 160px;
  max-width: 240px;
  background: var(--surface-color, #fff);
  border: 2px solid var(--border-soft);
  border-radius: 12px;
  padding: 0.9rem 1.2rem;
  text-align: center;
  font-size: 1.05em;
  font-weight: 700;
  color: var(--text-color);
  cursor: pointer;
  user-select: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.quizbutton .quizlabel:hover {
  transform: translateY(-3px);
  border-color: var(--primary-color);
  box-shadow: 0 8px 24px rgba(68, 110, 114, 0.18);
}
.quizbutton .quiz-option:checked + .quizlabel {
  border-color: var(--primary-color);
}
/* correct */
.quizbutton .quizlabel.is-correct {
  background: var(--primary-color);
  color: #fff;
  border-color: var(--primary-color);
  transform: scale(1.04);
  box-shadow: 0 8px 28px rgba(68, 110, 114, 0.35);
  animation: quizCorrectPulse 0.5s ease;
}
@keyframes quizCorrectPulse {
  0% { transform: scale(1); }
  40% { transform: scale(1.08); }
  100% { transform: scale(1.04); }
}
/* incorrect */
.quizbutton .quizlabel.is-incorrect {
  background: rgba(179, 64, 64, 0.08);
  border-color: rgba(179, 64, 64, 0.4);
  color: rgba(140, 40, 40, 0.85);
  animation: quizShake 0.4s ease;
}
@keyframes quizShake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}

/* --- iframe overlay (hides location info) --- */
.quiz-iframe-blur {
  position: relative;
}
.quiz-iframe-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 68px;
  background: linear-gradient(135deg, rgba(30,34,38,0.93) 55%, transparent 100%);
  border-radius: 0 0 18px 0;
  display: flex;
  align-items: center;
  padding-left: 1.2rem;
  z-index: 10;
  pointer-events: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

/* --- Full-screen overlays --- */
.quiz-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  z-index: 5000;
  transition: opacity 0.3s ease;
}
.quiz-overlay.is-visible {
  opacity: 1;
  pointer-events: auto;
}
.quiz-overlay-bg {
  position: absolute;
  inset: 0;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
.quiz-overlay.quiz-correct .quiz-overlay-bg {
  background: rgba(68, 110, 114, 0.45);
}
.quiz-overlay.quiz-miss .quiz-overlay-bg {
  background: rgba(89, 30, 30, 0.4);
}
.quiz-overlay-content {
  position: relative;
  z-index: 1;
  text-align: center;
}
.quiz-overlay-icon {
  font-size: clamp(3rem, 10vw, 6rem);
  line-height: 1;
  display: block;
  animation: quizOverlayPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.quiz-overlay-text {
  color: #fff;
  font-size: clamp(1.4rem, 4vw, 2.2rem);
  font-weight: 800;
  letter-spacing: 0.15em;
  margin-top: 0.6rem;
  text-shadow: 0 4px 16px rgba(0,0,0,0.4);
}
@keyframes quizOverlayPop {
  0% { transform: scale(0.3); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

/* --- Quiz page layout --- */
.quiz-page-title {
  font-size: 1.8rem;
}
.quiz-suffix {
  display: inline-block;
  margin-left: 0.6rem;
  font-size: 0.5em;
  font-weight: 600;
  color: var(--primary-color);
  background: rgba(68, 110, 114, 0.08);
  border: 1px solid rgba(68, 110, 114, 0.2);
  border-radius: 6px;
  padding: 0.15em 0.6em;
  vertical-align: middle;
  position: relative;
  top: -0.15em;
}

/* --- Transparent area (answer reveal) --- */
.transparent-area {
  opacity: 0;
  display: none !important;
}
.transparent-area-revealed {
  animation: quizReveal 0.5s ease forwards;
}
@keyframes quizReveal {
  0% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .quizbutton .quizlabel {
    min-width: 100px;
    max-width: none;
    flex: 1 1 100%;
    padding: 0.75rem 0.8rem;
    font-size: 0.95em;
  }
  .quiz-iframe-overlay {
    width: 160px;
    height: 52px;
    font-size: 1.1rem;
  }
}
</style>`;

const QUIZ_JS = `<script>
(function(){
  /* Inject iframe overlays to hide Google Maps location info */
  document.querySelectorAll('.quiz-iframe-blur').forEach(function(el, i) {
    var overlay = document.createElement('div');
    overlay.className = 'quiz-iframe-overlay';
    overlay.textContent = 'Q' + (i + 1);
    el.insertBefore(overlay, el.firstChild);
  });
  /* Overlay helpers */
  function getOrCreateOverlay(id, cls, icon, text) {
    var el = document.getElementById(id);
    if (!el) {
      el = document.createElement('div');
      el.id = id;
      el.className = 'quiz-overlay ' + cls;
      el.innerHTML = '<div class="quiz-overlay-bg"></div><div class="quiz-overlay-content"><span class="quiz-overlay-icon">' + icon + '</span><span class="quiz-overlay-text">' + text + '</span></div>';
      document.body.appendChild(el);
    }
    return el;
  }
  function flashOverlay(el, duration) {
    el.classList.add('is-visible');
    setTimeout(function(){ el.classList.remove('is-visible'); }, duration || 900);
  }
  /* Quiz interaction */
  document.addEventListener('change', function(e) {
    var radio = e.target;
    if (!radio.classList.contains('quiz-option')) return;
    var root = radio.closest('.quiz-block');
    if (!root) return;
    var labels = root.querySelectorAll('.quizlabel');
    var correctRadio = root.querySelector('input.quiz-option[data-correct="true"]');
    labels.forEach(function(l){ l.classList.remove('is-correct','is-incorrect'); });
    var isCorrect = radio.dataset.correct === 'true';
    var label = radio.nextElementSibling;
    if (label) label.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
    if (!isCorrect && correctRadio) {
      var cl = correctRadio.nextElementSibling;
      if (cl) cl.classList.add('is-correct');
    }
    if (isCorrect) {
      document.querySelectorAll('.transparent-area').forEach(function(el){
        el.classList.remove('transparent-area');
        el.classList.add('transparent-area-revealed');
      });
      flashOverlay(getOrCreateOverlay('quiz-correct-overlay','quiz-correct','\\u{1F389}','\\u6B63\\u89E3\\uFF01'), 900);
    } else {
      flashOverlay(getOrCreateOverlay('quiz-miss-overlay','quiz-miss','\\u{1F6AB}','\\u306F\\u305A\\u308C'), 900);
    }
  });
})();
</script>`;

export function quizHandler(args: string[]): string {
  quizCounter++;
  const quizID = `quiz-${quizCounter}`;
  const option1 = args[0] || "";
  const option2 = args[1] || "";
  const option3 = args[2] || "";
  const correctIndex = args[3] || "1";
  const name = `quiz-${quizID}`;

  let output = "";

  // Inject CSS and delegated JS once per page
  if (!styleInjected) {
    output += QUIZ_CSS + "\n" + QUIZ_JS + "\n";
    styleInjected = true;
  }

  output += `<div class="googlemap-if quizbutton quiz-block" id="${quizID}" data-correct-index="${correctIndex}">
  <div class="radiobox">
    <input id="${quizID}-radio1" class="radiobutton quizr quiz-option" name="${name}" type="radio" data-index="1" data-correct="${correctIndex === "1" ? "true" : "false"}" />
    <label for="${quizID}-radio1" class="quizlabel">${option1}</label>
    <input id="${quizID}-radio2" class="radiobutton quizr quiz-option" name="${name}" type="radio" data-index="2" data-correct="${correctIndex === "2" ? "true" : "false"}" />
    <label for="${quizID}-radio2" class="quizlabel">${option2}</label>
    <input id="${quizID}-radio3" class="radiobutton quizr quiz-option" name="${name}" type="radio" data-index="3" data-correct="${correctIndex === "3" ? "true" : "false"}" />
    <label for="${quizID}-radio3" class="quizlabel">${option3}</label>
  </div>
</div>`;

  return output;
}
