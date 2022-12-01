import { SpaceCraft, Rocket } from "../";

class SpaceShip extends SpaceCraft
{
    constructor(x : number, y : number, width : number, height : number, speed: number, src : string)
    {
        super(x,y,width,height,speed,src);
    }

    move(x : number, y : number)
    {
        this.setX(this.getX()+x);
        this.setY(this.getY()+y);
    }

    fire()
    {
        return new Rocket(this.getX()+this.getWidth()/2,this.getY(),20,64,10,"/assets/laser.png");
    }
}
export default SpaceShip;