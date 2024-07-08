import { _decorator, Button, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('double')
export class double extends Component {
    start() {
        this.node.on(Button.EventType.CLICK, this.loadDoublePlayerScene, this);
    }

    loadDoublePlayerScene() {
        director.loadScene('alonemap2');
    }

    update(deltaTime: number) {
        
    }
}


