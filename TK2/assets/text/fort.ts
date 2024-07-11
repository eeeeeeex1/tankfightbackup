import { _decorator, Component, Prefab, Sprite, systemEvent, SpriteFrame, Input, input, EventMouse, SystemEvent, Node, EventKeyboard, macro, RigidBody2D, Vec2, Vec3, instantiate, Collider2D, Contact2DType } from 'cc';
import { playerfire } from './playerfire';
const { ccclass, property } = _decorator;

@ccclass('fort')
export class fort extends Component {

    mouseposition : Vec2 = new Vec2(0,0);


    start() {

    }

    update(deltaTime: number) {
       this.makemouseposition(event);
    
    }

    private makemouseposition(event){
        this.mouseposition = event.getLocation();
        console.log(m);
    }

    
}


