import { _decorator, Component, Prefab, systemEvent, Input, input, EventMouse, SystemEvent, Node, EventKeyboard, macro, RigidBody2D, Vec3, instantiate } from 'cc';
import { Vec2 } from 'cc';
import { enemytank_002 } from './enemytank-002';
const { ccclass, property } = _decorator;

@ccclass('enemyfire')
export class enemyfire extends Component {

    @property
    shootPower: number = 300;//子弹的发射速度

    lastFireTime: number = 0; // 上次发射时间
    @property
    fireInterval: number = 1; // 发射间隔时间，单位秒

    landminelastFireTime: number = 0; // 上次发射时间
    @property
    landminefireInterval: number = 2; // 发射间隔时间，单位秒

    @property(Prefab)
    bulletPrefab: Prefab = null;

    @property(Prefab)
    landminePrefab: Prefab = null;

  

    //子弹的速度
    speed: Vec2 = new Vec2(0, 0);
    lastdirection: Vec2 = new Vec2(0, 0)


    update(dt) {
        this.lastFireTime += dt;
        this.landminelastFireTime += dt;
        // 如果达到了子弹发射间隔
        if (this.lastFireTime >= this.fireInterval) {
            this.fireBullet();
            this.lastFireTime = 0;
        }

        // 如果达到了地雷发射间隔
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
        const tank = this.node.parent.getComponent(enemytank_002);
        const rgd = bullet.getComponent(RigidBody2D);
        this.speed = new Vec2(tank.currentspeed.x * this.shootPower, tank.currentspeed.y * this.shootPower);
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

        //设置子弹实例的具体属性
    }
}

