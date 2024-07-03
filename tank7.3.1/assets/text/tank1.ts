import { _decorator, Component, Vec2, systemEvent, SystemEvent, EventKeyboard, macro, RigidBody2D } from 'cc';
const { ccclass, property } = _decorator;

// 定义方向向量
const Direction = {
    LEFT: new Vec2(-1, 0),
    RIGHT: new Vec2(1, 0),
    UP: new Vec2(0, 1),
    DOWN: new Vec2(0, -1),
};

@ccclass('PlayerController0')
export class PlayerController0 extends Component {

    @property(RigidBody2D)
    rigidBody: RigidBody2D = null;

    @property
    moveSpeed: number = 5; // 调整移动速度

    private currentDirection: Vec2 = Vec2.ZERO;
    private pressedKeys: Set<number> = new Set<number>();

    start() {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestroy() {
        systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
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

    private updateDirection() {
        let newDirection = Vec2.ZERO.clone();

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
        } else if (newDirection.equals(Vec2.ZERO)) {
            // 如果没有按键被按下，则停止移动
            this.stopMove();
        }
    }

    private updateVelocity() {
        // 计算归一化的速度方向向量
        let velocity = this.currentDirection.clone().multiplyScalar(this.moveSpeed);
        // 打印速度向量的值
        console.log('当前速度向量:', velocity);
        velocity.multiplyScalar(1/20);
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
}
