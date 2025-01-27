import { _decorator, Component, Node, Vec3,RigidBody2D } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Bullet')
export class Bullet extends Component {

    

    @property
    speed: number = 500; // 子弹的移动速度

    currentspeed:Vec3 = new Vec3();

    direction: Vec3 = new Vec3(); // 子弹的移动方向向量

    start() {
        // 在组件开始时执行的逻辑
    }

    update(dt: number) {
        // 假设速度的变化是通过某种逻辑改变的，这里只是一个示例
        if (this.speed !== this.node.RigidBody2D.linearVelocity) {
            // 速度发生变化，销毁子弹
            this.destroyBullet();
        }
    }

    // 发射子弹的方法
    shoot(direction: Vec3) {
        this.direction.set(direction); // 设置子弹的移动方向
    }

    // 移动子弹
    move(deltaTime: number) {
        const moveOffset = this.direction.clone().multiplyScalar(this.speed * deltaTime);
        this.node.position.add(moveOffset);
    }


    destroyBullet() {
        // 销毁子弹节点
        this.node.destroy();
    }
}
