const body = document.querySelector('body');
const container = document.createElement('div');
container.style = " display: none; flex-wrap: wrap; height: 250px; width: 250px;"
body.append(container);

for (let i = 0; i < 25; i++) {
  const square = document.createElement('div');
  square.style = " height: 50px; width: 50px;"
  square.className = "square";
  container.append(square);
}

function randomColor () {
  const x = parseInt(Math.random() * 256);
  const y = parseInt(Math.random() * 256);
  const z = parseInt(Math.random() * 256);
  const randomColor = "rgb("+ x +", "+ y +", "+ z +")";

  return randomColor;
}

function generateBlocks() {
  container.style.display = 'flex';
  const backgroundColor = document.querySelectorAll('.square');

  for (let i = 0; i < backgroundColor.length; i++) {
    backgroundColor[i].style.background = randomColor();
  }
}
// generateBlocks();

function generateBlocksInterval() {
  setInterval(() => {
    generateBlocks();
  }, 1000);
}
generateBlocksInterval();