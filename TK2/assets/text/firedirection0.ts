import { _decorator, Component, Prefab, systemEvent, Input, input, EventMouse, SystemEvent, Node, EventKeyboard, macro, RigidBody2D, Vec3, instantiate ,AudioSource } from 'cc';
import { Vec2 } from 'cc';
import { PlayerController0 } from './tank0'; // 确保正确引入 PlayerController0 类
const { ccclass, property } = _decorator;

@ccclass('firedirection0')
export class firedirection0 extends Component {
    @property(AudioSource)
    private shootAudio: AudioSource = null;

    @property
    shootPower:number=500;//子弹的发射速度

    //子弹发射间隔
    lastFireTime: number = 0; // 上次发射时间
    @property
    fireInterval: number = 1; // 发射间隔时间，单位秒

    //地雷发射间隔
    landminelastFireTime: number = 0; // 上次发射时间
    @property
    landminefireInterval: number = 2; // 发射间隔时间，单位秒

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


    static fireInterval: number;

    private playercontroller0:PlayerController0 = null ;

    start() {
        input.on(Input.EventType.KEY_DOWN,this.onKeyDown,this);
        input.on(Input.EventType.KEY_DOWN,this.onKeyDown0,this);

    }

    update(){
        const playercontroller0: PlayerController0 = this.node.parent.getComponent(PlayerController0);
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
        if(event.keyCode===74){
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
        //设置子弹实例的具体属性
        const rgd =bullet.getComponent(RigidBody2D);
        this.speed = new Vec2(this.currentiondirection.x * this.shootPower, this.currentiondirection.y * this.shootPower);

        //console.log( 'this.speed ',this.speed );
        if(this.speed.x!==0||this.speed.y!==0){
            //console.log("修改",this.speed);
            this.lastdirection=this.speed;


        }
        if(this.speed.x===0&&this.speed.y===0){
            //console.log("为0");
            this.speed=this.lastdirection.clone();
        }

        rgd.linearVelocity=this.speed;
    }

    //检测k是否按下  发射地雷
    private onKeyDown0(event:EventKeyboard) {
        if(event.keyCode===75){
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


