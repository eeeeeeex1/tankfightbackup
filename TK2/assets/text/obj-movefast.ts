import { _decorator, Component, Node, Collider2D,BoxCollider2D, Contact2DType,RigidBody2D} from 'cc';
import { PlayerController0 } from './tank0'; // 确保正确引入 PlayerController0 类
import { PlayerController1 } from './tank1'; // 确保正确引入 PlayerController1 类
const { ccclass, property } = _decorator;

@ccclass('objectmovefast')
export class objectmovefast extends Component {
    start() {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {
        console.log("bbbb");
        if(otherCollider.node.name==="tank0"||otherCollider.node.name==="tank1"){
            const playercontroller0: PlayerController0 = otherCollider.getComponent(PlayerController0);
            const playercontroller1: PlayerController1 = otherCollider.getComponent(PlayerController1);
            if(playercontroller0){
                playercontroller0.magnification=20;
            }
            else{
                playercontroller1.magnification=20;
            }
        }
        // 确保只处理一次销毁操作
        this.scheduleOnce(() => {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();

        }, 0.1); // 稍微增加延迟，确保事件处理完毕
    }

    onDestroy() {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }
}


