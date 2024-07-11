import { _decorator, Component, Node, Prefab } from 'cc';
import { firedirection0 } from './firedirection0'; // ȷ����ȷ���� firedirection0 ��
const { ccclass, property } = _decorator;

@ccclass('fireaffect0')
export class fireaffect0 extends Component {

    private playercontroller0: firedirection0 | null = null;

    private originalMagnification: number = 0; // ��ʼ�� fireInterval ֵ
    private changedMagnification: number = 0; // �仯��� fireInterval ֵ
    private isChanging: boolean = false; // �Ƿ����ڱ仯
    private changeDuration: number = 5; // �仯����ʱ�䣬��λ����
    private changeTimer: number = 0; // �仯��ʱ��

    start() {
        let node0 = this.node.parent.getChildByName('firedirection');
    

        this.playercontroller0 = node0.getComponent(firedirection0);

        if (this.playercontroller0) {
            this.originalMagnification = this.playercontroller0.fireInterval;
            this.changedMagnification = this.originalMagnification; // ��ʼʱ���仯���ֵ����ԭʼֵ
        }
    }

    update(deltaTime: number) {
        if (this.playercontroller0) {
            let currentMagnification = this.playercontroller0.fireInterval;

           
            if (currentMagnification !== this.changedMagnification && !this.isChanging) {
               
               
                this.isChanging = true;
                this.changeTimer = 0;
                this.changedMagnification = currentMagnification; 
            }

            // ������ڱ仯״̬����ʱ���ۼ�
            if (this.isChanging) {
                this.changeTimer += deltaTime;

                // �����ʱ�ﵽ�趨ʱ��
                if (this.changeTimer >= this.changeDuration) {
                    // �� magnification �ظ���ԭʼֵ
                    this.playercontroller0.fireInterval = this.originalMagnification;
                    this.isChanging = false; // �仯����
                }
            }
        }
    }
}




