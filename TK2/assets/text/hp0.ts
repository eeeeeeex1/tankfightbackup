import { _decorator, Component, Node } from 'cc';
import { PlayerController0 } from './tank0';
const { ccclass, property } = _decorator;

@ccclass('hp0')
export class hp0 extends Component {
    tank:PlayerController0;
    start() {
        this.tank=this.node.parent.getComponentInChildren(PlayerController0);
    }

    update(deltaTime: number) {
        let hp:number=this.tank.tanklife;
        this.node.setScale(hp,1);
    }
}


