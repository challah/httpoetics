function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvasContainer');
  background(220);
}

function draw() {
  // Your drawing code goes here
  ellipse(mouseX, mouseY, 50, 50);

  // Change the cursor image within a certain region
  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
    cursor(CROSS);
  } else {
    cursor(ARROW); // Change it back to the default cursor outside the region
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}