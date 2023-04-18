function startGame() {
  const obstacle = document.querySelector(".obstacle");
  const tunnel = document.querySelector(".tunnel");
  const character = document.querySelector(".tiger");
  let jumping = 0;
  let counter = 0;

  tunnel.addEventListener('animationiteration', () => {
      const random = -((Math.random()*300)+150);
      tunnel.style.top = random + "px";
      counter++;
  });

  setInterval(function() {
      const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      if(jumping === 0) {
          character.style.top = (characterTop+3)+"px";
      }
      const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
      const tunnelTop = parseInt(window.getComputedStyle(tunnel).getPropertyValue('top'));
      const cTop = -(500-characterTop);
      if((characterTop>480) || ((obstacleLeft<20) && (obstacleLeft>-50) && ((cTop<tunnelTop) || (cTop>tunnelTop+130)))) {
          alert("Game Over. Score: "+(counter-1));
          character.style.top = 100 + "px";
          counter = 0;
      }
  }, 10);

  const jump = () => {
      jumping = 1;
      let jumpCount = 0;
      const jumpInterval = setInterval(() => {
          const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
          if((characterTop>6) && (jumpCount<15)) {
              character.style.top = (characterTop-2)+"px";
          }
          if(jumpCount>20) {
              clearInterval(jumpInterval);
              jumping = 0;
              jumpCount = 0;
          }
          jumpCount++;
      }, 10);
  }

  document.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
          jump();
      }
  });
  
  document.querySelector('.menu').style.display = 'none';
  document.querySelector('.game').style.display = 'block';
}