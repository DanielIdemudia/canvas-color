

function setup() {
  createCanvas(400,400);
 
  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg)

  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);

}

function draw() 
{
  background(30);

  if (keyIsDown (DOWN_ARROW)){
    background(red_bg)
  }

  if (keyIsDown (UP_ARROW)){
    
  }
  
  drawSprites();

}

function red_bg()
  {
    r = 225;
    g = 0;
    b = 0;
  }

  function green_bg()
  {
    r = 0;
    g = 225;
    b = 0;
  }


