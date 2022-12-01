export default class SpaceCraft
{
    private x : number;
    private y : number;
    private width : number;
    private height : number;
    private speed : number;
    private src : string;

    constructor(x : number, y : number, width : number, height : number, speed: number, src : string)
    {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.speed=speed;
        this.src=src;
    }

    public getX(){
        return this.x;
    }

    public getY(){
        return this.y;
    }

    public getWidth(){
        return this.width;
    }

    public getHeight(){
        return this.height;
    }

    public getSpeed(){
        return this.speed;
    }

    public getSrc(){
        return this.src;
    }

    public setX(x : number){
        this.x = x;
    }

    public setY(y : number){
        this.y = y;
    }

    public setWidth(width : number){
        this.width = width;
    }

    public setHeight(height : number){
        this.height = height;
    }

    public setSpeed(speed : number){
        this.speed = speed;
    }

    public setSrc(src : string){
        this.src = src;
    }

    public checkCollision(spacecraft : SpaceCraft){
        return  this.x < spacecraft.getX() + spacecraft.getWidth() &&
                this.x + this.width > spacecraft.getX() &&
                this.y < spacecraft.getY() + spacecraft.getHeight() &&
                this.height + this.y > spacecraft.getY();
    }

    public render(){
        return (
            <img src={this.src} width={this.width} height={this.height} style={{position : "absolute", top : this.y, left: this.x}}></img>
        )
    }


}