class Bird extends BaseClass
{
    constructor(x,y,w,h)
    {
        super(x,y,w,h);
        this.img=loadImage("sprites/bird.png");
    }

    display()
    {
        super.display();
       //this.mybodies.position.x=mouseX;
        //this.mybodies.position.y=mouseY;
    }
}