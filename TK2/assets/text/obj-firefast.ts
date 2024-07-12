import { _decorator, Component, Node, Collider2D,BoxCollider2D, Contact2DType,RigidBody2D} from 'cc';
import { firedirection0 } from './firedirection0'; // 确保正确引入 firedirection0 类
import { firedirection1 } from './firedirection1'; // 确保正确引入 firedirection1 类
import { playerfire } from './playerfire'
const { ccclass, property } = _decorator;

@ccclass('objectfirefast')
export class objectfirefast extends Component {
    start() {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D){

        if(otherCollider.node.name==="tank0"||otherCollider.node.name==="tank1"||otherCollider.node.name==="playertank"){
            const playercontroller0: firedirection0 = otherCollider.getComponentInChildren(firedirection0);
            const playercontroller1: firedirection1 = otherCollider.getComponentInChildren(firedirection1);
            const playerfire0: playerfire = otherCollider.getComponentInChildren(playerfire);


            if(playercontroller0){
                playercontroller0.fireInterval=0;
            }
            else if(playercontroller1){
                playercontroller1.fireInterval=0;
            }
            else if(playerfire0){
                playercontroller1.fireInterval=0;
            }

        }
        // 确保只处理一次销毁操作
        this.scheduleOnce(() => {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();

        }, 0.01); // 稍微增加延迟，确保事件处理完毕
    }

    onDestroy() {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }
}


