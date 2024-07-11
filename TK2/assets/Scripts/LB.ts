import { _decorator, Button, Component, Input, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LB')
export class LB extends Component {
    @property(Prefab)
    SLB:Prefab;
    start() {
        this.node.on(Button.EventType.CLICK, this.LeaderBoard, this);
    }

    update(deltaTime: number) {
        
    }
    LeaderBoard(){
        let Board=instantiate(this.SLB);
        this.node.parent.addChild(Board);
    }
}


