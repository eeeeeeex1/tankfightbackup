import {_decorator, Component,Prefab,  systemEvent,Input,input, EventMouse,SystemEvent, Node,EventKeyboard, macro, RigidBody2D, Vec3, instantiate } from 'cc';
import { Vec2 } from 'cc';
//import { Bullet } from './Bullet'; // 假设 Bullet 脚本的文件路径和类名为 Bullet

const { ccclass, property } = _decorator;

// 定义方向向量
const Direction = {
    LEFT: new Vec2(-1, 0),
    RIGHT: new Vec2(1, 0),
    UP: new Vec2(0, 1),
    DOWN: new Vec2(0, -1),
};

@ccclass('PlayerController')
export class PlayerController extends Component {

    @property(RigidBody2D)
    rigidBody: RigidBody2D = null;

    @property
    shootPower:number=500;//子弹的发射速度

    @property(Node)
    bulletPrefab:Node=null;

    @property
    moveSpeed: number = 5; // 调整移动速度


    
    private direction : cc.Vec2=cc.Vec2.ZERO;
    private currentDirection: Vec2 = Vec2.ZERO;
    private pressedKeys: Set<number> = new Set<number>();


    start() {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        input.on(Input.EventType.MOUSE_DOWN,this.onMouseDown,this);

        input.on(Input.EventType.KEY_DOWN,this.keytodirection,this);
        input.on(Input.EventType.KEY_UP,this.directiontokey,this);
    }

    onDestroy() {
        systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        input.off(Input.EventType.KEY_DOWN,this.keytodirection,this);
        input.off(Input.EventType.KEY_UP,this.directiontokey,this);
    }

//运动实现模块


    private onKeyDown(event: EventKeyboard) {
        if (!this.pressedKeys.has(event.keyCode)) {
            this.pressedKeys.add(event.keyCode);
            this.updateDirection();
        }
    }

    private onKeyUp(event: EventKeyboard) {
        if (this.pressedKeys.has(event.keyCode)) {
            this.pressedKeys.delete(event.keyCode);
            this.updateDirection();
        }
    }

    private updateDirection() {
        let newDirection = Vec2.ZERO.clone();

        if (this.pressedKeys.has(macro.KEY.w)) {
            newDirection.add(Direction.UP);
        }
        if (this.pressedKeys.has(macro.KEY.s)) {
            newDirection.add(Direction.DOWN);
        }
        if (this.pressedKeys.has(macro.KEY.a)) {
            newDirection.add(Direction.LEFT);
        }
        if (this.pressedKeys.has(macro.KEY.d)) {
            newDirection.add(Direction.RIGHT);
        }

        if (!newDirection.equals(this.currentDirection)) {
            this.currentDirection = newDirection;
            this.updateVelocity();
        } else if (newDirection.equals(Vec2.ZERO)) {
            // 如果没有按键被按下，则停止移动
            this.stopMove();
        }
    }

    private updateVelocity() {
        // 计算归一化的速度方向向量
        let velocity = this.currentDirection.clone().multiplyScalar(this.moveSpeed);

        velocity.multiplyScalar(1/20);
        // 打印速度向量的值
        console.log('当前速度向量:', velocity);
        console.log("当前方向： ",this.direction);
        if (this.rigidBody) {
                this.rigidBody.linearVelocity = velocity;
        }
    }
    private stopMove() {
        if (!this.currentDirection.equals(Vec2.ZERO)) {
            this.currentDirection = Vec2.ZERO;
            this.rigidBody.linearVelocity = Vec2.ZERO;
        }
    }

    //检测是否设计鼠标左键按下 触发fireBullet
    private onMouseDown(event:EventMouse) {
        if(event.getButton()===EventMouse.BUTTON_LEFT){
            this.fireBullet();
        }
    }
    //发射子弹
    private fireBullet(){
        const bullet = instantiate(this.bulletPrefab);
        bullet.setParent(this.node);
        bullet.setPosition(this.node.position);

        const rgd =bullet.getComponent(RigidBody2D);
        const speed= this.setbulletspeed().multiply(400);
        rgd.linearVelocity=speed;
    }


    private setbulletspeed(){
        const direction=this.node.direction.clone();
        return direction;
    }
//坦克方向判断模块
//坦克方向判断模块
//坦克方向判断模块

    //keydown赋值方向
    private keytodirection(event:EventKeyboard){
        switch (event.keyCode) {
            case macro.KEY.a:
                this.direction.x = -1;
                break;
            case macro.KEY.d:
                this.direction.x = 1;
                break;
            case macro.KEY.w:
                this.direction.y = 1;
                break;
            case macro.KEY.s:
                this.direction.y = -1;
                break;
                /*
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
                */
        }
    }

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
                /*
            case macro.KEY.w && macro.KEY.a:
            case macro.KEY.w && macro.KEY.d:
            case macro.KEY.s && macro.KEY.a:
            case macro.KEY.s && macro.KEY.d:
                this.direction.set(0, 0);
                break;
                */
        }
    }
}
