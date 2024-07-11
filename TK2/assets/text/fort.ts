import { _decorator, Component, Prefab, Sprite, systemEvent, SpriteFrame, Input, input, EventMouse, SystemEvent, Node, EventKeyboard, macro, RigidBody2D, Vec2, Vec3, instantiate, Collider2D, Contact2DType,CameraComponent, Camera, Canvas } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('fort')
export class fort extends Component {

    @property(Node)
    Carmera: Node = null;

    Mouseposition: Vec2 = new Vec2(0, 0);

    onLoad() {
        this.node.angle = 0;
        this.registerMouseEvents();
    }
    registerMouseEvents() {
        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
    }

    start() {
        this.changeDirection();
    }
    update(dt: number) { }
    private onMouseMove(event) {
        this.Mouseposition = event.getLocation();
        this.changeDirection();
    }
    changeDirection() {
        let worldPosition = this.node.getWorldPosition();
        let Camera0 = this.Carmera.getComponent(Camera);
        let screenPosition = new Vec3();
        Camera0.worldToScreen(worldPosition, screenPosition);

        const x = this.Mouseposition.x - screenPosition.x;
        const y = this.Mouseposition.y - screenPosition.y;
        // 计算新的旋转角度
        const angle = Math.atan2(Math.abs(y), Math.abs(x)) * (180 / Math.PI);
        // 应用旋转角度到sprite附属节点
        if (y > 0 && x < 0) {
            this.node.angle = 270 - angle;
        }
        else if (y > 0 && x > 0) {
            this.node.angle = 90 + angle;
        }
        else if (y < 0 && x > 0) {
            this.node.angle = 90 - angle;
        }
        else if (y < 0 && x < 0) {
            this.node.angle = 270 + angle;
        }
    }
}