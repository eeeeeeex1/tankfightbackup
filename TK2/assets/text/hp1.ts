import { _decorator, Component, Node } from 'cc';
import { PlayerController1 } from './tank1';
const { ccclass, property } = _decorator;

@ccclass('hp1')
export class hp1 extends Component {
    tank:PlayerController1;
    start() {
        this.tank=this.node.parent.getComponentInChildren(PlayerController1);
    }

    update(deltaTime: number) {
        let hp:number=this.tank.tanklife;
        this.node.setScale(hp,1);
    }
}


