import { _decorator, Component, Node, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraScript')
export class CameraScript extends Component {
    @property({ type: Node })
    target: Node = null;

    @property({ type: Vec2 })
    offset: Vec2 = new Vec2(0, 0);

    @property
    smoothSpeed: number = 0.125;

    lateUpdate(deltaTime: number) {
        if (!this.target) return;

        let desiredPosition = this.target.position.add(new Vec2(this.offset.x, this.offset.y));
        let smoothedPosition = this.node.position.lerp(desiredPosition, this.smoothSpeed);
        this.node.position = smoothedPosition;
    }
}
