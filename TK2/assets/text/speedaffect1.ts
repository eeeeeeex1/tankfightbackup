import { _decorator, Component, Node, Prefab } from 'cc';
import { PlayerController1 } from './tank1'; // ȷ����ȷ���� PlayerController0 ��
const { ccclass, property } = _decorator;

@ccclass('speedaffect1')
export class speedaffect1 extends Component {

    private playercontroller1: PlayerController1 | null = null;

    private originalMagnification: number = 0; // ��ʼ�� magnification ֵ
    private changedMagnification: number = 0; // �仯��� magnification ֵ
    private isChanging: boolean = false; // �Ƿ����ڱ仯
    private changeDuration: number = 5; // �仯����ʱ�䣬��λ����
    private changeTimer: number = 0; // �仯��ʱ��

    start() {
        // ��ȡ PlayerController0 �� firedirection0 ��ʵ��
        this.playercontroller1 = this.node.parent.getComponent(PlayerController1);

        // ��ʼ��¼��ǰ�� magnification ֵ
        if (this.playercontroller1) {
            this.originalMagnification = this.playercontroller1.magnification;
            this.changedMagnification = this.originalMagnification; // ��ʼʱ���仯���ֵ����ԭʼֵ
        }
    }

    update(deltaTime: number) {
        if (this.playercontroller1) {
            let currentMagnification = this.playercontroller1.magnification;
            // ��鵱ǰֵ�Ƿ���仯���ֵ��ͬ���Ҳ����ڱ仯״̬
            if (currentMagnification !== this.changedMagnification && !this.isChanging) {
                // magnification �����˱仯����ʼ��ʱ
                this.isChanging = true;
                this.changeTimer = 0;
                this.changedMagnification = currentMagnification; // ���±仯���ֵΪ��ǰֵ
            }

            // ������ڱ仯״̬����ʱ���ۼ�
            if (this.isChanging) {
                this.changeTimer += deltaTime;

                // �����ʱ�ﵽ�趨ʱ��
                if (this.changeTimer >= this.changeDuration) {
                    // �� magnification �ظ���ԭʼֵ
                    this.playercontroller1.magnification = this.originalMagnification;
                    this.isChanging = false; // �仯����
                }
            }
        }
    }
}



