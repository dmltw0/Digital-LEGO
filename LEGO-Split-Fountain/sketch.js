const barWidth = 150;
let lastBar = -10;

function setup() {
  createCanvas(600, 250);
  colorMode(HSB, height, height, height);
  noStroke(-100);
  background(1000);
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}