import {_decorator, Component,Prefab,  systemEvent,Input,input, EventMouse,SystemEvent, Node,EventKeyboard, macro, RigidBody2D, Vec3, instantiate } from 'cc';
import { Vec2 } from 'cc';
import { enemytank } from './enemytank';
const { ccclass, property } = _decorator;

@ccclass('enemyfire')
export class enemyfire extends Component {

    @property
    shootPower:number=500;//子弹的发射速度

    @property(Prefab)
    bulletPrefab:Prefab=null;

    @property(Prefab)
    landminePrefab:Prefab=null;

    lastFireTime: number = 0; // 上次发射时间
    fireInterval: number = 1; // 发射间隔时间，单位秒

    landminelastFireTime: number = 0; // 上次发射时间
    landminefireInterval: number = 2; // 发射间隔时间，单位秒

    static fireInterval: number;

    speed: Vec2 = new Vec2(0,0);
    lastdirection: Vec2 = new Vec2(0,0)


    update(dt) {
        // 更新上次发射时间
        this.lastFireTime += dt;
        this.landminelastFireTime +=dt;
        // 如果达到了发射间隔
        if (this.lastFireTime >= this.fireInterval) {
            // 调用发射子弹函数
            console.log('发射子弹');
            this.fireBullet();

            // 重置计时
            this.lastFireTime = 0;
        }

        if (this.landminelastFireTime >= this.landminefireInterval) {
            // 调用发射子弹函数
            console.log('放置地雷');
            this.putlandmine();

            // 重置计时
            this.landminelastFireTime = 0;
        }
    }

    private fireBullet(){
        const bullet = instantiate(this.bulletPrefab);
        bullet.setParent(this.node);
        bullet.setPosition(this.node.position);

        //console.log(this.currentiondirection);
        //设置子弹实例的具体属性
        const tank = this.node.parent.getComponent(enemytank);
        const rgd =bullet.getComponent(RigidBody2D);
        this.speed = new Vec2(tank.currentspeed.x * 400, tank.currentspeed.y * 400);

        //console.log( 'this.speed ',this.speed );
        if(this.speed.x!==0||this.speed.y!==0){
            //console.log("修改",this.speed);
            this.lastdirection=this.speed;
            console.log(this.lastdirection);

        }
        if(this.speed.x===0&&this.speed.y===0){;
            this.speed=this.lastdirection.clone();
        }

        rgd.linearVelocity=this.speed;
    }


    //地雷放置模块


    private onKeyDown0(event:EventKeyboard) {
        const now = Date.now();
        if (now - this.landminelastFireTime > this.landminefireInterval * 1000) {
        this.putlandmine();
        this.landminelastFireTime = now;
        }
    }

    private putlandmine(){
        console.log('放置地雷');
        const bullet = instantiate(this.landminePrefab);
        bullet.setParent(this.node);
        bullet.setPosition(this.node.position);

        //设置子弹实例的具体属性
    }
}
