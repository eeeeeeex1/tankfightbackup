import { _decorator, Component, Prefab, systemEvent, Input, input, EventMouse, SystemEvent, Node, EventKeyboard, macro, RigidBody2D, Vec3, instantiate } from 'cc';
import { Vec2 } from 'cc';
import { enemytank_001 } from './enemytank-001';
const { ccclass, property } = _decorator;

@ccclass('enemyfire')
export class enemyfire extends Component {

    @property
    shootPower: number = 300;//子弹的发射速度

    @property(Prefab)
    bulletPrefab: Prefab = null;

    @property(Prefab)
    landminePrefab: Prefab = null;

    lastFireTime: number = 0; // 上次发射时间
    fireInterval: number = 1; // 发射间隔时间，单位秒

    landminelastFireTime: number = 0; // 上次发射时间
    landminefireInterval: number = 2; // 发射间隔时间，单位秒

    static fireInterval: number;

    speed: Vec2 = new Vec2(0, 0);
    lastdirection: Vec2 = new Vec2(0, 0)


    update(dt) {
        this.lastFireTime += dt;
        this.landminelastFireTime += dt;
        // 子弹的发射间隔
        if (this.lastFireTime >= this.fireInterval) {
            // 调用发射子弹函数
            this.fireBullet();
            // 重置计时
            this.lastFireTime = 0;
        }

        //地雷的时间发射间隔
        if (this.landminelastFireTime >= this.landminefireInterval) {
            this.putlandmine();    
            this.landminelastFireTime = 0;
        }
    }

    private fireBullet() {
        const bullet = instantiate(this.bulletPrefab);
        bullet.setParent(this.node);
        bullet.setPosition(this.node.position);

        //设置子弹实例的具体属性
        const tank = this.node.parent.getComponent(enemytank_001);
        const rgd = bullet.getComponent(RigidBody2D);
        //如果tank没有捕捉到player 肯定有一个方向为0
        if(tank.currentspeed.x===0||tank.currentspeed.y===0){
            console.log('没有捕捉到');
            this.speed = new Vec2(tank.currentspeed.x * this.shootPower, tank.currentspeed.y * this.shootPower);
        }
        //如果tank捕捉到player 根据关系实现八个方向的射击
        else{
            console.log('捕捉到');
            if(tank.currentspeed.x>0&&tank.currentspeed.y>0){
                this.speed = new Vec2(0.5* this.shootPower, 0.5* this.shootPower);
            }
            if(tank.currentspeed.x<0&&tank.currentspeed.y>0){
                this.speed = new Vec2(-0.5* this.shootPower, 0.5* this.shootPower);
            }
            if(tank.currentspeed.x>0&&tank.currentspeed.y<0){
                this.speed = new Vec2(0.5* this.shootPower, -0.5* this.shootPower);
            }
            if(tank.currentspeed.x<0&&tank.currentspeed.y<0){
                this.speed = new Vec2(-0.5* this.shootPower, -0.5* this.shootPower);
            }
        }

        if (this.speed.x !== 0 || this.speed.y !== 0) {
            this.lastdirection = this.speed;
        }
        if (this.speed.x === 0 && this.speed.y === 0) {
            this.speed = this.lastdirection.clone();
        }
        rgd.linearVelocity = this.speed;
    }

    //地雷放置模块

    private onKeyDown0(event: EventKeyboard) {
        const now = Date.now();
        if (now - this.landminelastFireTime > this.landminefireInterval * 1000) {
            this.putlandmine();
            this.landminelastFireTime = now;
        }
    }

    private putlandmine() {
        const bullet = instantiate(this.landminePrefab);
        bullet.setParent(this.node);
        bullet.setPosition(this.node.position);
    }
}

