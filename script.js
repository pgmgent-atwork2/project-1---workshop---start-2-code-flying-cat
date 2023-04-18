const obstacle = document.querySelector(".obstacle");
const tunnel = document.querySelector(".tunnel");

obstacle.addEventListener('animationiteration', () => {
  const random = -((Math.random()*300)+150);
  tunnel.style.top = random + "px";
});