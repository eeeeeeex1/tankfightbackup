import { _decorator, Component, Prefab, systemEvent, Input, input, EventMouse, SystemEvent, Node, EventKeyboard, macro, RigidBody2D, Vec3, instantiate, AudioSource } from 'cc';
import { Vec2 } from 'cc';
import { PlayerController1 } from './tank1';
const { ccclass, property } = _decorator;

@ccclass('firedirection1')
export class firedirection1 extends Component {
    @property(AudioSource)
    private shootAudio: AudioSource = null;
    @property
    shootPower:number=500;//子弹的发射速度

    @property(Prefab)
    bulletPrefab:Prefab=null;

    @property(Prefab)
    tankPrefab:Prefab=null;

    @property(Prefab)
    landminePrefab:Prefab=null;

    direction : Vec2= new Vec2(0,0);
    currentiondirection : Vec2= new Vec2(0,0);
    lastdirection : Vec2 = new Vec2(0,-400);
    speed : Vec2 = new Vec2(0,0);

    lastFireTime: number = 0; // 上次发射时间
    fireInterval: number = 1; // 发射间隔时间，单位秒

    landminelastFireTime: number = 0; // 上次发射时间
    landminefireInterval: number = 2; // 发射间隔时间，单位秒

    static fireInterval: number;

    private playercontroller1:PlayerController1 = null ;

    start() {
        input.on(Input.EventType.KEY_DOWN,this.onKeyDown,this);
        input.on(Input.EventType.KEY_DOWN,this.onKeyDown0,this);

    }

    update(){
        const playercontroller0: PlayerController1 = this.node.parent.getComponent(PlayerController1);
        if( playercontroller0.currentDirection.x!==0|| playercontroller0.currentDirection.y!==0)
            this.currentiondirection = playercontroller0.currentDirection;
        //this.lastdirection=playercontroller0.currentDirection;
    }
    onDestroy(){
        input.off(Input.EventType.KEY_DOWN,this.onKeyDown,this);
        input.off(Input.EventType.KEY_DOWN,this.onKeyDown0,this);
    }


    //检测是否设计j按下 触发fireBullet
    private onKeyDown(event:EventKeyboard) {
        if(event.keyCode===77){
            //console.log("鼠标左键已经按下");
            const now = Date.now();
           if (now - this.lastFireTime > this.fireInterval * 1000) {
            this.fireBullet();
            this.lastFireTime = now;
            }
        }
    }

    private fireBullet(){
        //console.log("发射子弹");

        const bullet = instantiate(this.bulletPrefab);

        // 检查音频源组件和音频剪辑是否已定义
        if (this.shootAudio && this.shootAudio.clip) {
            // 播放音效
            this.shootAudio.playOneShot(this.shootAudio.clip, 1);
        } else {
            console.error('音频源组件或音频剪辑未定义');
        }

        bullet.setParent(this.node);
        bullet.setPosition(this.node.position);

        //console.log(this.currentiondirection);
        const rgd =bullet.getComponent(RigidBody2D);
        this.speed = new Vec2(this.currentiondirection.x * 50, this.currentiondirection.y * 50);

        if(this.speed.x!==0||this.speed.y!==0){
            this.lastdirection=this.speed;

        }
        if(this.speed.x===0&&this.speed.y===0){
            this.speed=this.lastdirection.clone();
        }

        rgd.linearVelocity=this.speed;
    }


    //检测k是否按下  发射地雷
    private onKeyDown0(event:EventKeyboard) {
        if(event.keyCode===78){
            const now = Date.now();
           if (now - this.landminelastFireTime > this.landminefireInterval * 1000) {
            this.putlandmine();
            this.landminelastFireTime = now;
            }
        }
    }

    private putlandmine(){
        const bullet = instantiate(this.landminePrefab);
        bullet.setParent(this.node);
        bullet.setPosition(this.node.position);

        //设置子弹实例的具体属性
    }
}




