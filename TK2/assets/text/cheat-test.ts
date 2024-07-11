import { _decorator, Component, Node, Vec3, systemEvent, SystemEventType, EventKeyboard, macro, input, Input } from 'cc';
import { PlayerController0 } from './tank0'; // 确保正确引入 PlayerController0 类
const { ccclass, property } = _decorator;

@ccclass('TankCheatController')
export class TankCheatController extends Component {
    // 引用你的坦克节点或坦克组件，这里假设为 tankNode
    @property(Node)
    tankNode: Node = null;

    // 秘籍输入
    cheatCode: string = "";

    onLoad() {
        // 监听键盘事件
        input.on(Input.KEY_DOWN, this.onKeyDown, this);
    }

    onDestroy() {
        // 移除键盘事件监听
        systemEvent.off(SystemEventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: EventKeyboard) {
        // 获取按下的键名
        let key = event.keyCode;
        // 检查是否是字母键
        if ((key >= macro.KEY.a && key <= macro.KEY.z) || (key >= macro.KEY.A && key <= macro.KEY.Z)) {
            let keyName = String.fromCharCode(key);
            this.cheatCode += keyName.toLowerCase();
            // 检查是否匹配秘籍代码
            if (this.cheatCode === "zhaoyibo") {

                // 找到 PlayerController0 组件并进行操作
                const playercontroller0: PlayerController0 = this.tankNode.getComponent(PlayerController0);
                if (playercontroller0) {
                    playercontroller0.magnification = 20;
                }
                // 清空秘籍输入，以便下一次使用
                this.cheatCode = "";
            }
        } else {
            // 如果按下的不是字母键，则清空秘籍输入
            this.cheatCode = "";
        }
    }
}
