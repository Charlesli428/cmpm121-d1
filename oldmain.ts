import "./style.css";
let counter: number = 0;
document.body.innerHTML = "";

const app = document.createElement("div");
document.body.append(app);

const button = document.createElement("button");
button.textContent = "🔥";
app.append(button);

const counterDiv = document.createElement("div");
counterDiv.textContent = `Total Aura: ${counter}`;
app.append(counterDiv);

button.addEventListener("click", () => {
  counter += 1;
  counterDiv.textContent = `Total Aura: ${counter}`;
});

let lastTime = performance.now();
const growthRate = 1;

function update(time: number) {
  const delta = (time - lastTime) / 1000;
  lastTime = time;

  counter += growthRate * delta;
  counterDiv.textContent = `Total Aura: ${counter.toFixed(1)}`;
  requestAnimationFrame(update);
}
requestAnimationFrame(update);
