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

const QUIZ_CSS = `<style>
.quizbutton.quiz-block {
  position: relative;
  padding-bottom: 1.5rem;
}
.quizbutton .radiobox {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}
.quizbutton .quiz-option {
  display: none;
}
.quizbutton .quizlabel {
  flex: 1 1 28%;
  min-width: 180px;
  background: rgba(230, 228, 224, 0.88);
  border: 1px solid var(--border-soft);
  border-radius: 14px;
  padding: 0.85rem 1.1rem;
  text-align: center;
  font-weight: 600;
  color: var(--secondary-color);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}
.quizbutton .quizlabel:hover,
.quizbutton .quizlabel:focus-within {
  transform: translateY(-2px);
  box-shadow: 0 12px 22px rgba(68, 110, 114, 0.16);
  border-color: rgba(68, 110, 114, 0.45);
}
.quizbutton .quiz-option:checked + .quizlabel {
  border-color: var(--primary-color);
  box-shadow: 0 16px 30px rgba(68, 110, 114, 0.24);
}
.quizbutton .quizlabel.is-correct {
  background: var(--primary-color);
  color: #fff;
  border-color: var(--primary-color);
  box-shadow: 0 16px 28px rgba(68, 110, 114, 0.28);
}
.quizbutton .quizlabel.is-incorrect {
  background: rgba(179, 64, 64, 0.12);
  border-color: rgba(179, 64, 64, 0.35);
  color: rgba(89, 23, 23, 0.92);
}
.quiz-success {
  position: absolute;
  inset: auto 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  background: rgba(68, 110, 114, 0.9);
  color: #fff;
  font-weight: 700;
  opacity: 0;
  pointer-events: none;
  transform: translateY(12px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.quiz-success.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.quiz-balloons {
  position: absolute;
  inset: auto 0 100% 0;
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  pointer-events: none;
}
.quiz-balloon {
  font-size: 1.6rem;
  opacity: 0;
  transform: translateY(15px) scale(0.85);
}
.quiz-show-balloons .quiz-balloon {
  animation: quizBalloonRise 1.6s ease-out forwards;
}
.quiz-show-balloons .quiz-balloon:nth-child(2) { animation-delay: 0.1s; }
.quiz-show-balloons .quiz-balloon:nth-child(3) { animation-delay: 0.2s; }
.quiz-show-balloons .quiz-balloon:nth-child(4) { animation-delay: 0.3s; }
@keyframes quizBalloonRise {
  0% { opacity: 0; transform: translateY(20px) scale(0.75); }
  20% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-80px) scale(1.05); }
}
.quiz-overlay {
  position: fixed;
  inset: 0;
  background: rgba(43, 39, 33, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: clamp(2.4rem, 8vw, 5rem);
  font-weight: 800;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  z-index: 5000;
}
.quiz-overlay.quiz-miss { background: rgba(59, 12, 19, 0.55); }
.quiz-overlay.quiz-success { background: rgba(34, 89, 74, 0.55); }
.quiz-overlay.is-visible { opacity: 1; pointer-events: auto; }
.quiz-overlay span { text-shadow: 0 6px 18px rgba(0,0,0,0.5); letter-spacing: 0.2em; }
</style>`;

const QUIZ_JS = `<script>
(function(){
  document.addEventListener('change', function(e) {
    var radio = e.target;
    if (!radio.classList.contains('quiz-option')) return;
    var root = radio.closest('.quiz-block');
    if (!root) return;
    var labels = root.querySelectorAll('.quizlabel');
    var correctRadio = root.querySelector('input.quiz-option[data-correct="true"]');
    var missOverlay = document.getElementById('quiz-miss-overlay');
    var successOverlay = document.getElementById('quiz-success-overlay');
    if (!missOverlay) {
      missOverlay = document.createElement('div');
      missOverlay.id = 'quiz-miss-overlay';
      missOverlay.className = 'quiz-overlay quiz-miss';
      missOverlay.innerHTML = '<span>はずれ</span>';
      document.body.appendChild(missOverlay);
    }
    if (!successOverlay) {
      successOverlay = document.createElement('div');
      successOverlay.id = 'quiz-success-overlay';
      successOverlay.className = 'quiz-overlay quiz-success';
      successOverlay.innerHTML = '<span>正解！</span>';
      document.body.appendChild(successOverlay);
    }
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
      successOverlay.classList.add('is-visible');
      setTimeout(function(){ successOverlay.classList.remove('is-visible'); }, 650);
      root.classList.add('quiz-show-balloons');
      setTimeout(function(){ root.classList.remove('quiz-show-balloons'); }, 1800);
    } else {
      missOverlay.classList.add('is-visible');
      setTimeout(function(){ missOverlay.classList.remove('is-visible'); }, 650);
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
