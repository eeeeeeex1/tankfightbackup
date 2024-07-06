import { _decorator, Button, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('returnselect')
export class returnselect extends Component {
    start() {
        this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
    }

    update(deltaTime: number) {
        
    }
    loadSinglePlayerScene()
    {
        director.loadScene('select');
    }
}


