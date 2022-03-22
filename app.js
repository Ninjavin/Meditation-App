const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");

let breathsLeft = 3;

numberOfBreaths.addEventListener("change", (e) => {
  // e.preventDefault();
  breathsLeft = numberOfBreaths.value;
  breathsText.innerText = breathsLeft;
});

// grow/shrink circle
const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

const breathTextUpdate = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instructions.innerText = "Breathe in!";
  setTimeout(() => {
    instructions.innerText = "Hold breath!";
    setTimeout(() => {
      instructions.innerText = "Exhale Breath slowly!";
    }, 4000);
  }, 4000);
};

const breathingApp = () => {
  const breathingAnimation = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimation);
      instructions.innerText = "Click begin to start another session!";
      start.classList.remove("button-inactive");
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

start.addEventListener("click", (e) => {
  start.classList.add("button-inactive");
  instructions.innerText = "Get relaxed! We are about to begin breathing...";
  setTimeout(() => {
    instructions.innerText = "Breathing is about to begin...";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breathTextUpdate();
    }, 2000);
  }, 2000);
});
