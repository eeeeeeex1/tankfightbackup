import { _decorator, Component, Prefab, systemEvent, Input, input, EventMouse, SystemEvent, Node, EventKeyboard, macro, RigidBody2D, Vec3, instantiate, AudioSource, director, CameraComponent, Camera } from 'cc';
import { Vec2 } from 'cc';
import { PlayerController0 } from './tank0';
const { ccclass, property } = _decorator;

@ccclass('playerfire')
export class playerfire extends Component {
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
    bulletPrefab: Prefab = null;

    @property(Prefab)
    landminePrefab: Prefab = null;

    @property(Node)
    Carmera: Node = null;

    direction: Vec2 = new Vec2(0, 0);
    lastdirection: Vec2 = new Vec2(0, -400);
    speed: Vec2 = new Vec2(0, 0);

    fireposition: Vec2 = new Vec2(0, 0);

    static fireInterval: number;

    private playercontroller0: PlayerController0 = null;


    start() {
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown0, this);

    }

    update() {
    }
    onDestroy() {
        input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown0, this);
    }

    private onMouseMove(event) {
        this.fireposition = event.getLocation();
    }

    private onMouseDown(event: EventMouse) {
        if (event.getButton() === 0) {

            const now = Date.now();
            if (now - this.lastFireTime > this.fireInterval * 1000) {
                this.fireBullet();
                this.lastFireTime = now;
                //this.fireposition=event.getLocation();
            }
        }
    }

    private fireBullet() {

        const bullet = instantiate(this.bulletPrefab);

        //音效模块
        if (this.shootAudio && this.shootAudio.clip) {
            // ������Ч
            this.shootAudio.playOneShot(this.shootAudio.clip, 1);
        } else {
            console.error('��ƵԴ�������Ƶ����δ����');
        }
        //音效模块

        bullet.setParent(this.node);
        bullet.setPosition(this.node.position);

        //鼠标的屏幕坐标获取
        let worldPosition = this.node.getWorldPosition();
        let Camera0 = this.Carmera.getComponent(CameraComponent);
        let screenPosition = new Vec3();
        Camera0.worldToScreen(worldPosition, screenPosition);

        const rgd = bullet.getComponent(RigidBody2D);
        this.speed = new Vec2((this.fireposition.x - screenPosition.x), (this.fireposition.y - screenPosition.y));
        this.speed.normalize();
        this.speed.x = this.speed.x * this.shootPower;
        this.speed.y = this.speed.y * this.shootPower;

        if (this.speed.x !== 0 || this.speed.y !== 0) {

            this.lastdirection = this.speed;
        }
        if (this.speed.x === 0 && this.speed.y === 0) {

            this.speed = this.lastdirection.clone();
        }
        rgd.linearVelocity = this.speed;
    }

    //���k�Ƿ���  �������
    private onKeyDown0(event: EventKeyboard) {
        if (event.keyCode === 70) {
            const now = Date.now();
            if (now - this.landminelastFireTime > this.landminefireInterval * 1000) {
                this.putlandmine();
                this.landminelastFireTime = now;
            }
        }
    }

    private putlandmine() {
        const bullet = instantiate(this.landminePrefab);
        bullet.setParent(this.node);
        bullet.setPosition(this.node.position);

        //�����ӵ�ʵ���ľ�������
    }
}



