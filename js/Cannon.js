class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    this.baseimg = loadImage("assets/cannonBase.png");
    this.cannon = loadImage("assets/canon.png");

  }
  
    display()
    {
       image(this.baseimg, this.x, this.y, this.width, this.height);
       image(this.cannon,110, 135, 100, 50)

    }

   
}
