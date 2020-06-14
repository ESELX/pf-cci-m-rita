const barWidth = 20;
let lastBar = -1;

function setup(){

  createCanvas(windowWidth,windowHeight);
  colorMode(HSB, height, height, height);
  noStroke();
  background(0);

}


function draw() {
  background(240);
  strokeWeight(2);

  line(width/2, height/2, mouseX, mouseY);
  line(width/2, height/2,mouseX,height/2);
  line(mouseX, mouseY,mouseX,height/2);

  textSize(width / 50);
  text(dist(width/2, height/2, mouseX, mouseY),50,50);
  
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;

}
  
}





  
    
  
