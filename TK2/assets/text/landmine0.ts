import { __private, _decorator, Collider2D, Component, Contact2DType, EventKeyboard, Input, input, instantiate, Node, Prefab } from 'cc';
import { PlayerController1 } from './tank1'; // 确保正确引入 PlayerController0 类
const { ccclass, property } = _decorator;

@ccclass('landmine0')
export class landmine0 extends Component {

    onLoad() {
        // 调用定时销毁方法
        this.scheduleDestroy();
    }

    scheduleDestroy() {
        // 使用 scheduleOnce 方法，在 5 秒后销毁节点
        this.scheduleOnce(() => {
            this.node.destroy();
        }, 10);
    }


    start() {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {
        this.scheduleOnce(() => {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();

            if (otherCollider && otherCollider.node.name === 'tank1') {

                let playerController1 = otherCollider.node.getComponent(PlayerController1);

                if (playerController1) {
                    playerController1.tanklife = playerController1.tanklife - 1;
                    console.log(playerController1.tanklife);
                    if (playerController1.tanklife === 0)
                        otherCollider.node.destroy();
                } else {
                    console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
                }
            }
            if((otherCollider && otherCollider.node.name === 'enemytank')||(otherCollider && otherCollider.node.name === 'enemytank-001')||(otherCollider && otherCollider.node.name === 'enemytank-002')){
                otherCollider.node.destroy();
            }

        }, 0.01); // 稍微增加延迟，确保事件处理完毕
    }

    onDestroy() {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }
}


