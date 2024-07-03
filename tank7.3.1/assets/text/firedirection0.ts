import {_decorator, Component,Prefab,  systemEvent,Input,input, EventMouse,SystemEvent, Node,EventKeyboard, macro, RigidBody2D, Vec3, instantiate } from 'cc';
import { Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('firedirection0')
export class firedirection0 extends Component {

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
        if(event.keyCode===74){
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
            case macro.KEY.a:
                this.direction.y=0;
                this.direction.x = -1;
                break;
            case macro.KEY.d:
                this.direction.y = 0;
                this.direction.x = 1;
                break;
            case macro.KEY.w:
                this.direction.x=0;
                this.direction.y = 1;
                break;
            case macro.KEY.s:
                this.direction.x=0;
                this.direction.y = -1;
                break;

            case macro.KEY.w && macro.KEY.a:
                this.direction.set(-1, 1);
                break;
            case macro.KEY.w && macro.KEY.d:
                this.direction.set(1, 1);
                break;
            case macro.KEY.s && macro.KEY.a:
                this.direction.set(-1, -1);
                break;
            case macro.KEY.s && macro.KEY.d:
                this.direction.set(1, -1);
                break;
                
        }
    }
    /*
    //keyup删除方向
    private directiontokey(event:EventKeyboard){
        switch (event.keyCode) {
            case macro.KEY.a:
            case macro.KEY.d:
                this.direction.x = 0;
                break;
            case macro.KEY.w:
            case macro.KEY.s:
                this.direction.y = 0;
                break;
                
            case macro.KEY.w && macro.KEY.a:
            case macro.KEY.w && macro.KEY.d:
            case macro.KEY.s && macro.KEY.a:
            case macro.KEY.s && macro.KEY.d:
                this.direction.set(0, 0);
                break;
                
        }
    }
    */
    
}


