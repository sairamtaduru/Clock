const clock = document.getElementById("clock");
const numberRadius = 120;


for (let i = 1; i <= 12; i++) {
  const angle = (i * 30) * (Math.PI / 180);
  const x = numberRadius * Math.sin(angle);
  const y = -numberRadius * Math.cos(angle);

  const num = document.createElement("div");
  num.className = "number";
  num.style.left = `calc(50% + ${x}px)`;
  num.style.top = `calc(50% + ${y}px)`;
  num.textContent = i;
  clock.appendChild(num);
}
function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = ((hours % 12) + minutes / 60) * 30;

  document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(updateClock, 1000);
updateClock(); 
