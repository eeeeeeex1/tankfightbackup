import {_decorator, Component,Prefab,  systemEvent,Input,input, EventMouse,SystemEvent, Node,EventKeyboard, macro, RigidBody2D, Vec3, instantiate } from 'cc';
import { Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('firedirection1')
export class firedirection1 extends Component {

    @property(RigidBody2D)
    rigidBody: RigidBody2D = null;

    @property
    shootPower:number=500;//子弹的发射速度

    @property(Node)
    bulletPrefab:Node=null;

    direction : Vec3= new Vec3(0,0,0);

   

    start() {
        input.on(Input.EventType.KEY_DOWN,this.onKeyDown,this);

        input.on(Input.EventType.KEY_DOWN,this.keytodirection,this);
        //input.on(Input.EventType.KEY_UP,this.directiontokey,this);
    }
    
    onDestroy(){
        input.off(Input.EventType.KEY_DOWN,this.onKeyDown,this);

        input.off(Input.EventType.KEY_DOWN,this.keytodirection,this);
        //input.off(Input.EventType.KEY_UP,this.directiontokey,this);
    }


     //检测是否设计鼠标左键按下 触发fireBullet
     private onKeyDown(event:EventKeyboard) {
        if(event.keyCode===77){
            console.log("鼠标左键已经按下");
            this.fireBullet();
        }
    }

    private fireBullet(){
        const bullet = instantiate(this.bulletPrefab);
        bullet.setParent(this.node);
        bullet.setPosition(this.node.position);

        const rgd =bullet.getComponent(RigidBody2D);
        const speed = new Vec2(this.direction.x * 400, this.direction.y * 400);
        //const speed= this.direction.multiplyScalar(400);
        rgd.linearVelocity=speed;
    }

    private keytodirection(event:EventKeyboard){
        switch (event.keyCode) {
            case 37:
                this.direction.y = 0;
                this.direction.x = -1;
                break;
            case 39:
                this.direction.y = 0;
                this.direction.x = 1;
                break;
            case 38:
                console.log("按下了38 上")
                this.direction.x = 0;
                this.direction.y = 1;
                break;
            case 40:
                this.direction.x = 0;
                this.direction.y = -1;
                break;

            case 38 && 37:
                console.log("按下了38 37 左上")
                this.direction.set(-1, 1);
                break;
            case 38 && 39:
                this.direction.set(1, 1);
                break;
            case 40 && 37:
                this.direction.set(-1, -1);
                break;
            case 40 &&39:
                this.direction.set(1, -1);
                break;
                
        }
    }

    //keyup删除方向
    /*
    private directiontokey(event:EventKeyboard){
        switch (event.keyCode) {
            case 37:
            case 39:
                this.direction.x = 0;
                break;
            case 38:
            case 40:
                this.direction.y = 0;
                break;

            case 38 && 37:
            case 38 && 39:
            case 40 && 37:
            case 40 && 39:
                this.direction.set(0, 0);
                break;
                
        }
    }
    */
}


