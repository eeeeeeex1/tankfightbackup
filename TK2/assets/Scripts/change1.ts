import { _decorator, Button, Component, instantiate, Node,Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('change1')
export class change1 extends Component {
    @property(Prefab)
    changeDifficulty:Prefab;
    start() {
        this.node.on(Button.EventType.CLICK, this.change, this);
    }

    update(deltaTime: number) {
        
    }
    change(){
        let board=instantiate(this.changeDifficulty);
        this.node.parent.parent.addChild(board);
        this.node.parent.destroy();
    }
}


