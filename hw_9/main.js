function generateBlocks() {
  const showBlocks = document.querySelector('.container');
  showBlocks.style.display = 'flex';
  const backgroundColor = document.querySelectorAll('.square');

  for (let i = 0; i < backgroundColor.length; i++) {
    const x = parseInt(Math.random() * 256);
    const y = parseInt(Math.random() * 256);
    const z = parseInt(Math.random() * 256);
    const randomColor = "rgb("+ x +", "+ y +", "+ z +")";
    backgroundColor[i].style.background = randomColor;
  }
}
// generateBlocks();

function generateBlocksInterval() {
  setInterval(() => {
    generateBlocks();
  }, 1000);
}
generateBlocksInterval();

