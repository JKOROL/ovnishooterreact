import {SpaceCraft} from "../";

class Ovni extends SpaceCraft{

    private hp : number;

    constructor(x : number, y : number, width : number, height : number, speed: number, src : string, hp:number)
    {
        super(x,y,width,height,speed,src);
        this.hp = hp;
    }

    public setHp(hp : number)
    {
        this.hp = hp;
    }

    public getHp()
    {
        return this.hp;
    }

    public move()
    {
        
    }
}

export default Ovni;