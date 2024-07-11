import { _decorator, Component, Prefab, Sprite, systemEvent, SpriteFrame, Input, input, EventMouse, SystemEvent, Node, EventKeyboard, macro, RigidBody2D, Vec3, instantiate, Collider2D, Contact2DType, Vec2 } from 'cc';

const { ccclass, property } = _decorator;

//可以实现tank的四个方向的移动 子弹只有四个方向   没有追踪功能
//enemytank的2.0版
//简单的敌人


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
@ccclass('enemytank_002')
export class enemytank_002 extends Component {
   
    //加速的倍率
    @property
    private speed: number = 2;


    @property(RigidBody2D)
    rigidBody: RigidBody2D = null;



    private direction: Vec2 = new Vec2(0, 0);
    //坦克生命值
    tanklife: number = 5;
    intervalInSeconds: number = 5;
    currentspeed: Vec2 = new Vec2(0, 0);


    private lastChangeTime: number; // 上次位置改变的时间戳
    private timer: number; // 累计经过的时间

    private lastPosition: Vec3 = new Vec3();
    private readonly EPSILON: number = 0.0001;
    pressedKeys: any;
    spreadspeed: Vec2 = new Vec2(0, 0);
    aitankspeed: Vec2;

    private lastspeed: Vec2 = new Vec2(0, 0);
    sign : number = 0;
    signtimer: number = 0;

    speedmonitor : Vec2 = new Vec2(0,0);
    speedtime : number = 0;
    speedtimer : number = 0;
    speedtimermonitor :number = 0;

    


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

        // 初始化
        this.speedtimer = 0;
        this.speedmonitor = this.currentspeed; // 初始化监视速度
    }

    update(dt: number) {
        // 检测位置是否改变
        this.timer += dt;
        // 检查是否超过2秒 2秒后自动改变方向
        if (this.timer >= 2) {
            this.timer = 0; // 重置计时器
            this.changeDirection(); // 调用函数
        }

        //如果玩家被击败 销毁自身 防止报错
        const player = this.node.parent.getChildByName('playertank');
        if(!player) {
            console.log('失败');
            this.node.destroy();
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {
        this.changeDirection(); // 自定义方法，用于改变坦克的移动方向
    }

    changeDirection() {

        let newDirection = Math.floor(Math.random() * 4); // 假设有四个方向
        while (this.lastspeed.x === Directions[newDirection].x && this.lastspeed.y === Directions[newDirection].y) {
            newDirection = Math.floor(Math.random() * 4);
        }

        let newVelocity = Directions[newDirection].clone().multiplyScalar(this.speed);
        this.rigidBody.linearVelocity = newVelocity;
        this.currentspeed = newVelocity;

        this.lastspeed = Directions[newDirection].clone();
    }
}


