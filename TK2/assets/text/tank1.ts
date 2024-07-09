import { _decorator, Component, Prefab, Sprite, systemEvent, SpriteFrame, Input, input, EventMouse, SystemEvent, Node, EventKeyboard, macro, RigidBody2D, Vec3, instantiate, BoxCollider2D } from 'cc';
import { firedirection1 } from './firedirection1'; // 确保正确引入 firedirection0 类
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

@ccclass('PlayerController1')
export class PlayerController1 extends Component {
    
    @property
    public magnification: number =5;

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

    
    moveSpeed: number = 1; // 调整移动速度



    private direction: Vec2 = new Vec2(0, 0);
     currentDirection: Vec2 = Vec2.ZERO;
    private pressedKeys: Set<number> = new Set<number>();
    tanklife: number = 5;


    start() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        if (this.upSpriteFrame && this.downSpriteFrame && this.leftSpriteFrame && this.rightSpriteFrame) {
            this.updateSpriteFrame();
        }

    }

    onDestroy() {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this)
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);

    }


    //运动实现模块
    onCollisionEnter (other, self) {
        //console.log('Collision occurred.');
        //console.log('Collision details:', other, self);

        // 假设与坦克发生了碰撞
        if (other.node.name === 'bullet') {
            this.node.destroy();
            other.node.destroy();
        }
    }



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

    private updateDirection(): void {
        let newDirection = new Vec2(0, 0);
        if (this.pressedKeys.has(macro.KEY.up)) {
            newDirection.add(Direction.UP);
        }
        if (this.pressedKeys.has(macro.KEY.down)) {
            newDirection.add(Direction.DOWN);
        }
        if (this.pressedKeys.has(macro.KEY.left)) {
            newDirection.add(Direction.LEFT);
        }
        if (this.pressedKeys.has(macro.KEY.right)) {
            newDirection.add(Direction.RIGHT);
        }

        if (!newDirection.equals(this.currentDirection)) {
            this.currentDirection = newDirection;
            this.updateVelocity();
            this.updateSpriteFrame();
        } else if (newDirection.equals(new Vec2(0, 0))) {
            this.stopMove();
        }
    }

    private updateVelocity() {
        // 计算归一化的速度方向向量
        let velocity = this.currentDirection.clone().multiplyScalar(this.moveSpeed);


        velocity.multiplyScalar(this.magnification);
        // 打印速度向量的值
    
        //console.log("当前方向： ", this.direction);
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

    private updateSpriteFrame(): void {
        const firedirection:firedirection1 = this.getComponentInChildren(firedirection1);
        const spriteNode = this.node.getChildByName('RenderSprite1');
        const sprite = spriteNode ? spriteNode.getComponent(cc.Sprite) as cc.Sprite : null;
        if (sprite) {
            switch (true) {
                case this.currentDirection.equals(Direction.UP):
                    sprite.spriteFrame = this.upSpriteFrame;
                    break;
                case this.currentDirection.equals(Direction.DOWN):
                    sprite.spriteFrame = this.downSpriteFrame;
                    break;
                case this.currentDirection.equals(Direction.LEFT):
                    sprite.spriteFrame = this.leftSpriteFrame;
                    break;
                case this.currentDirection.equals(Direction.RIGHT):
                    sprite.spriteFrame = this.rightSpriteFrame;
                    break;
                case this.currentDirection.equals(Direction.DOWNRIGHT):
                    sprite.spriteFrame = this.rightanddownSpriteFrame;
                    break;
                case this.currentDirection.equals(Direction.UPRIGHT):
                    sprite.spriteFrame = this.rightandupSpriteFrame;
                    break;
                case this.currentDirection.equals(Direction.DOWNLEFT):
                    sprite.spriteFrame = this.leftanddownSpriteFrame;
                    break;
                case this.currentDirection.equals(Direction.UPLEFT):
                    sprite.spriteFrame = this.leftandupSpriteFrame;
                    break;
                default:
                    // 默认情况下，可以保持原状或设置为静止状态的纹理
                    break;
            }
        }
    }
}
