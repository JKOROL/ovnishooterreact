import { SpaceCraft } from "../";

class Rocket extends SpaceCraft
{
    constructor(x : number, y : number, width : number, height : number, speed: number, src : string)
    {
        super(x,y,width,height,speed,src);
    }
}
export default Rocket;