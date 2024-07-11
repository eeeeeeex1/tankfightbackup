import { _decorator, Component, Collider2D, Contact2DType, AudioSource } from 'cc';
import { PlayerController1 } from './tank1';
import { PlayerController0 } from './tank0';
const { ccclass, property } = _decorator;

@ccclass('enemybullet')
export class enemybullet extends Component {
    @property(AudioSource)
    private explosionAudio: AudioSource = null;

    onLoad() {
        // 调用定时销毁方法
        this.scheduleDestroy();
    }

    scheduleDestroy() {
        // 使用 scheduleOnce 方法，在 5 秒后销毁节点
        this.scheduleOnce(() => {
            this.node.destroy();
            // 检查音频源组件和音频剪辑是否已定义
            if (this.explosionAudio && this.explosionAudio.clip) {
                // 播放音效
                this.explosionAudio.playOneShot(this.explosionAudio.clip, 1);
            } else {
                console.error('音频源组件或音频剪辑未定义');
            }
        }, 5);
    }

    start() {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }


    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {
        // 确保只处理一次销毁操作

        if (!otherCollider || !otherCollider.node) {
            return;
        }

        this.scheduleOnce(() => {
            if (!selfCollider.isValid) return; // 防止已销毁的对象再次操作

            selfCollider.node.destroy();

            //音效模块
            // 检查音频源组件和音频剪辑是否已定义
            if (this.explosionAudio && this.explosionAudio.clip) {
                // 播放音效
                this.explosionAudio.playOneShot(this.explosionAudio.clip, 1);
            } else {
                console.error('音频源组件或音频剪辑未定义');
            }
            //音效模块
            if(!otherCollider.node.name){
                console.log("otherCollider.node.name");
            }
            if (otherCollider && otherCollider.node.name !== 'normalwall'&&otherCollider.node.name!=='tank1'&& otherCollider.node.name!=='tank0'&&otherCollider.node.name!=='playertank'&&otherCollider.node.name!=='enemytank') {
                otherCollider.node.destroy();
            }
            else if (otherCollider && otherCollider.node.name === 'tank1') {

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
            else if ((otherCollider && otherCollider.node.name === 'tank0') ||  (otherCollider && otherCollider.node.name === 'playertank')){

                let playerController0 = otherCollider.node.getComponent(PlayerController0);

                if (playerController0) {
                    playerController0.tanklife = playerController0.tanklife - 1;
                    console.log(playerController0.tanklife);
                    if (playerController0.tanklife === 0)
                        otherCollider.node.destroy();
                } else {
                    console.error("PlayerController0 or PlayerController1 component not found on 'tank1' node.");
                }
            }

        }, 0.0001); // 稍微增加延迟，确保事件处理完毕
    }

    onDestroy() {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }
}
