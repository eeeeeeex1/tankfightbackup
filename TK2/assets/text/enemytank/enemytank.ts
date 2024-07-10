import { _decorator, Component, Prefab, Sprite, systemEvent, SpriteFrame, Input, input, EventMouse, SystemEvent, Node, EventKeyboard, macro, RigidBody2D, Vec3, instantiate, Collider2D, Contact2DType } from 'cc';
import { Vec2 } from 'cc';
//import { Bullet } from './Bullet'; // 假设 Bullet 脚本的文件路径和类名为 Bullet

const { ccclass, property } = _decorator;


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
    public magnification: number = 5;

    @property(RigidBody2D)
    rigidBody: RigidBody2D = null;

    @property(SpriteFrame)
    private upSpriteFrame: SpriteFrame | null = null;

    @property(SpriteFrame)
    private downSpriteFrame: SpriteFrame | null = null;

    @property(SpriteFrame)
    private leftSpriteFrame: SpriteFrame | null = null;

    @property(SpriteFrame)
    private rightSpriteFrame: SpriteFrame | null = null;

    @property(SpriteFrame)
    private rightandupSpriteFrame: SpriteFrame | null = null;

    @property(SpriteFrame)
    private rightanddownSpriteFrame: SpriteFrame | null = null;

    @property(SpriteFrame)
    private leftandupSpriteFrame: SpriteFrame | null = null;

    @property(SpriteFrame)
    private leftanddownSpriteFrame: SpriteFrame | null = null;


    @property(SpriteFrame)
    private speed: number = 2;


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

    deltx: number = 0;
    delty: number = 0;


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

        const player = this.node.parent.getChildByName('tank0');
        if (Math.abs(this.node.position.x - player.position.x) < 100 || Math.abs(this.node.position.y - player.position.y) < 100) {
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

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {
        ;
        this.changeDirection(); // 自定义方法，用于改变坦克的移动方向

    }

    changeDirection() {

        let newDirection = Math.floor(Math.random() * 4); // 假设有四个方向
        while (this.currentspeed === Directions[newDirection]) {
            newDirection = Math.floor(Math.random() * 4);
        }

        this.currentspeed = Directions[newDirection];
        this.updateSpriteFrame();


        if (this.aitankspeed.x !== 0 || this.aitankspeed.y !== 0) {
            let newVelocity = this.aitankspeed.clone().multiplyScalar(this.speed);
            this.rigidBody.linearVelocity = newVelocity;
            this.currentspeed=newVelocity;

        }

        else {
            let newVelocity = Directions[newDirection].clone().multiplyScalar(this.speed);
            this.rigidBody.linearVelocity = newVelocity;
            this.currentspeed=newVelocity;
        }

    }

    private updateSpriteFrame(): void {
        const spriteNode = this.node.getChildByName('RenderSprite0');
        const sprite = spriteNode ? spriteNode.getComponent(cc.Sprite) as cc.Sprite : null;
        if (sprite) {
            switch (true) {
                case this.currentspeed.equals(Direction.UP):
                    sprite.spriteFrame = this.upSpriteFrame;
                    break;
                case this.currentspeed.equals(Direction.DOWN):
                    sprite.spriteFrame = this.downSpriteFrame;
                    break;
                case this.currentspeed.equals(Direction.LEFT):
                    sprite.spriteFrame = this.leftSpriteFrame;
                    break;
                case this.currentspeed.equals(Direction.RIGHT):
                    sprite.spriteFrame = this.rightSpriteFrame;
                    break;
                case this.currentspeed.equals(Direction.DOWNRIGHT):
                    sprite.spriteFrame = this.rightanddownSpriteFrame;
                    break;
                case this.currentspeed.equals(Direction.UPRIGHT):
                    sprite.spriteFrame = this.rightandupSpriteFrame;
                    break;
                case this.currentspeed.equals(Direction.DOWNLEFT):
                    sprite.spriteFrame = this.leftanddownSpriteFrame;
                    break;
                case this.currentspeed.equals(Direction.UPLEFT):
                    sprite.spriteFrame = this.leftandupSpriteFrame;
                    break;
                default:
                    // 默认情况下，可以保持原状或设置为静止状态的纹理
                    break;
            }
        }
    }

}


/*

当敌人与玩家的距离小于某个设定值的时候，敌人就能发现玩家，然后去攻击玩家。
cc.Class({
    extends: cc.Component,
=
    properties: {
        player:cc.Node,//不建议直接用挂载的方式，建议在onLoad里拿节点
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.initTime = 0;
        //this.player = cc.Find("Canvas/Bg/tank");//建议使用这种方法拿到节点，
    },

    start () {

    },

    update (dt) {
        this.initTime++;
        //判断player和enemy节点距离，并且60帧才进行一次实时朝向的判断
        let playerPos = this.player.convertToWorldSpaceAR(cc.v2(0, 0));
        let thisPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        if((Math.abs(playerPos.x - thisPos.x) < 300 && Math.abs(playerPos.y - thisPos.y) < 300)&&this.initTime>60){
            let r = Math.atan2(playerPos.y - thisPos.y, playerPos.x - thisPos.x);
            let degree = r * 180 / Math.PI;
            degree = 360 - degree;
            degree = degree - 90;
            this.node.angle = -degree;
            this.initTime = 0;
        }
    	
    },
});


*/



