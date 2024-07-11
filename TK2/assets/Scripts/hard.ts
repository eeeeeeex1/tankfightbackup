import { _decorator, Button, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('hard')
export class hard extends Component {
    start() {
        this.node.on(Button.EventType.CLICK, this.easymode, this);
    }

    update(deltaTime: number) {
        
    }
    easymode(){
        director.loadScene('alonemap0-difficult');
    }
}


