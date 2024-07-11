import { _decorator, Component, Prefab, Sprite, systemEvent, SpriteFrame, Input, input, EventMouse, SystemEvent, Node, EventKeyboard, macro, RigidBody2D, Vec2, Vec3, instantiate, Collider2D, Contact2DType } from 'cc';
import { enemyfire } from './enemyfire';

const { ccclass, property } = _decorator;
@ccclass('sprite.node')
export class sprite extends Component {
    onLoad() {
        this.node.angle = 0;
    }
    start() {
        this.changeDirection();
    }
    update(dt: number) {
        this.changeDirection();
    }
    changeDirection() {
        const x = this.node.parent.getChildByName('firedirection').getComponent(enemyfire).speed.x;
        const y = this.node.parent.getChildByName('firedirection').getComponent(enemyfire).speed.y;
        const angle = Math.atan2(Math.abs(y), Math.abs(x)) * (180 / Math.PI);

        if (y > 0 && x <= 0) {
            this.node.angle = 180 - angle;
        }
        else if (y >= 0 && x > 0) {
            this.node.angle = angle;
        }
        else if (y < 0 && x >= 0) {
            this.node.angle = - angle;
        }
        else if (y <= 0 && x < 0) {
            this.node.angle = 180 + angle;
        }
    }
}