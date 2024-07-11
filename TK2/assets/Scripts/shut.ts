import { _decorator, Button, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('shut')
export class shut extends Component {
    start() {
        this.node.on(Button.EventType.CLICK, this.shutdown, this);
    }

    update(deltaTime: number) {
        
    }

    shutdown(){
        this.node.parent.destroy();
    }
}


