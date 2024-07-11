import { _decorator, Component, Prefab, Sprite, systemEvent, SpriteFrame, Input, input, EventMouse, SystemEvent, Node, EventKeyboard, macro, RigidBody2D, Vec3, instantiate, Collider2D, Contact2DType } from 'cc';
import { Vec2 } from 'cc';
//import { Bullet } from './Bullet'; // 假设 Bullet 脚本的文件路径和类名为 Bullet

const { ccclass, property } = _decorator;

//可以实现tank的万向追踪和子弹的万向发射
//enemytank的0.0版
//困难的敌人

// 定义方向向量
const Direction = {
    LEFT: new Vec2(-1, 0),
    RIGHT: new Vec2(1, 0),
    UP: new Vec2(0, 1),
    DOWN: new Vec2(0, -1),
    UPLEFT: new Vec2(-1, 1),
    UPRIGHT: new Vec2(1, 1),
    DOWNLEFT: new Vec2(-1, -1),
    DOWNRIGHT: new Vec2(1, -1)
};

const Directions = [
    new Vec2(-1, 0),  // LEFT
    new Vec2(1, 0),   // RIGHT
    new Vec2(0, 1),   // UP
    new Vec2(0, -1),  // DOWN
];

@ccclass('enemytank')
export class enemytank extends Component {

    //加速的倍率
    @property
    private speed: number = 2;

    //索敌范围
    @property
    Enemy_range : number = 100;


    @property(RigidBody2D)
    rigidBody: RigidBody2D = null;

    


    private direction: Vec2 = new Vec2(0, 0);
    //坦克生命值
    currentspeed: Vec2 = new Vec2(0, 0);


    private lastChangeTime: number; // 上次位置改变的时间戳
    private timer: number; // 累计经过的时间

    private lastPosition: Vec3 = new Vec3();
    private readonly EPSILON: number = 0.0001;
    aitankspeed: Vec2;

    private lastspeed: Vec2 = new Vec2(0, 0);
    sign: number = 0;
    signtimer: number = 0;



    onLoad() {
        this.lastPosition = this.node.position; // 初始化上次记录的位置为当前位置
        this.lastChangeTime = Date.now(); // 初始化上次位置改变的时间戳为当前时间
        this.timer = 0; // 初始化计时器为0
    }

    start() {
        //console.log('生成enemytank');
        this.aitankspeed = new Vec2(0, 0);
        this.changeDirection();

        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    update(dt: number) {
        // 检测位置是否改变

        const player = this.node.parent.getChildByName('playertank');
        if(player){
            if((Math.abs(this.node.position.x - player.position.x) < this.Enemy_range  || Math.abs(this.node.position.y - player.position.y) < this.Enemy_range )&&this.sign===0) {
                //console.log('索敌');
                this.aitankspeed.x = player.position.x - this.node.position.x;
                this.aitankspeed.y = player.position.y - this.node.position.y;
                this.aitankspeed.normalize();
                this.changeDirection(); // 调用函数
            }

            else {
                if (this.node.position.x - this.lastPosition.x > this.EPSILON || this.node.position.y - this.lastPosition.y > this.EPSILON) {
                    // console.log('位置改变');
                    this.lastPosition.set(this.node.position); // 更新记录的位置
                    this.lastChangeTime = Date.now(); // 更新位置改变的时间戳
                    this.timer = 0; // 重置计时器
                }
                else {
                    this.timer += dt;
                    // 检查是否超过2秒
                    if (this.timer >= 3) {
                        this.timer = 0; // 重置计时器
                        this.changeDirection(); // 调用函数
                    }
                }

            }
        }
        else {
            console.log('失败');
            this.node.destroy();
        }


        //碰撞速度修改检测
        if (this.sign === 1) {
            this.signtimer += dt;
            // 检查是否超过2秒
            if (this.signtimer >= 2) {
                this.signtimer = 0; // 重置计时器
                this.sign = 0; 
                this.changeDirection() ;
                //console.log('调整完毕');
            }
        }

    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {
        //console.log('碰撞');
        this.sign = 1;
        this.changeDirection(); // 自定义方法，用于改变坦克的移动方向

    }

    changeDirection() {

        let newDirection = Math.floor(Math.random() * 4); // 假设有四个方向
        while (this.lastspeed.x === Directions[newDirection].x && this.lastspeed.y === Directions[newDirection].y) {
            newDirection = Math.floor(Math.random() * 4);
        }

        if ((this.aitankspeed.x !== 0 || this.aitankspeed.y !== 0) && this.sign===0) {
            let newVelocity = this.aitankspeed.clone().multiplyScalar(this.speed);
            //给坦克赋值速度
            this.rigidBody.linearVelocity = newVelocity;
            //传递速度到fire
            this.currentspeed = newVelocity;

        }

        else {

            let newVelocity = Directions[newDirection].clone().multiplyScalar(this.speed);
            this.rigidBody.linearVelocity = newVelocity;
            this.currentspeed = newVelocity;

            this.lastspeed = Directions[newDirection].clone();
        }
    }
}