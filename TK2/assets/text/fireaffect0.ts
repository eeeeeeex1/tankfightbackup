import { _decorator, Component, Node, Prefab } from 'cc';
import { firedirection0 } from './firedirection0'; // 确保正确引入 firedirection0 类
const { ccclass, property } = _decorator;

@ccclass('fireaffect0')
export class fireaffect0 extends Component {

    private playercontroller0: firedirection0 | null = null;

    private originalMagnification: number = 0; // 初始的 fireInterval 值
    private changedMagnification: number = 0; // 变化后的 fireInterval 值
    private isChanging: boolean = false; // 是否正在变化
    private changeDuration: number = 5; // 变化持续时间，单位：秒
    private changeTimer: number = 0; // 变化计时器

    start() {
        let node0 = this.node.parent.getChildByName('firedirection');
        // 获取 PlayerController0 和 firedirection0 的实例

        this.playercontroller0 = node0.getComponent(firedirection0);

        // 初始记录当前的 magnification 值
        if (this.playercontroller0) {
            this.originalMagnification = this.playercontroller0.fireInterval;
            this.changedMagnification = this.originalMagnification; // 初始时，变化后的值等于原始值
        }
    }

    update(deltaTime: number) {
        if (this.playercontroller0) {
            let currentMagnification = this.playercontroller0.fireInterval;

            // 检查当前值是否与变化后的值不同，且不处于变化状态
            if (currentMagnification !== this.changedMagnification && !this.isChanging) {
               
                // magnification 发生了变化，开始计时
                this.isChanging = true;
                this.changeTimer = 0;
                this.changedMagnification = currentMagnification; // 更新变化后的值为当前值
            }

            // 如果正在变化状态，计时器累加
            if (this.isChanging) {
                this.changeTimer += deltaTime;

                // 如果计时达到设定时间
                if (this.changeTimer >= this.changeDuration) {
                    // 将 magnification 回复到原始值
                    this.playercontroller0.fireInterval = this.originalMagnification;
                    this.isChanging = false; // 变化结束
                }
            }
        }
    }
}




