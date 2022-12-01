import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Ovni, SpaceShip, Rocket } from "../../classes";

const Game = () =>{

    var keyMap : Map<string,boolean> = new Map();

    document.addEventListener("keydown", (event) => {
        keyMap.set(event.key,true);
    })
    
    document.addEventListener("keyup", (event) => {
        keyMap.set(event.key,false);
    })

    var tailleOvni = document.documentElement.clientWidth/5;
    const ovnis : Array<Ovni> = [];
    ovnis.push(new Ovni(0,10,tailleOvni,tailleOvni*0.46,10,"/assets/X-Wing.png",100));
    ovnis.push(new Ovni(10+tailleOvni,10,tailleOvni,tailleOvni*0.46,10,"/assets/X-Wing.png",100));
    ovnis.push(new Ovni(20+tailleOvni*2,10,tailleOvni,tailleOvni*0.46,10,"/assets/X-Wing.png",100));
    ovnis.push(new Ovni(30+tailleOvni*3,10,tailleOvni,tailleOvni*0.46,10,"/assets/X-Wing.png",100));

    var player : SpaceShip = new SpaceShip(200,200,tailleOvni,tailleOvni,10,"/assets/tie-fighter.png");

    var rockets : Array<Rocket> = [];

    var OvniController = setInterval(()=>{

    },1);

    var InputController = setInterval(()=>{

        if(keyMap.get("ArrowDown"))
        {
            console.log("bas");
            player.move(0,10);
        }
        if(keyMap.get("ArrowUp"))
        {
            player.move(0,-10);
        }
        if(keyMap.get("ArrowRight"))
        {
            player.move(10,0);
        }
        if(keyMap.get("ArrowLeft"))
        {
            player.move(-10,0);
        }
        if(keyMap.get(" "))
        {
           rockets.push(player.fire());
        }
    },1)

    let display ;
    function render()
    {
        return (
            <div id="Game">
            {
                ovnis.map(o => o.render())
            }
            {
                player.render()
            }
            {
                rockets.map(r => r.render())
            }
        </div>
        )
    }

    useEffect(()=>
    {
        display = render();
    },[keyMap,player,ovnis])

    return (
        <div id="Game">
            {
                ovnis.map(o => o.render())
            }
            {
                player.render()
            }
            {
                rockets.map(r => r.render())
            }
        </div>
        
    )
}

export default Game;