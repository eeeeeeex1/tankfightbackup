import { _decorator, Button, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('_continue')
export class _continue extends Component {
    start() {
        this.node.on(Button.EventType.CLICK, this.continue, this);
    }

    update(deltaTime: number) {
        
    }
    continue(){
            director.resume();
            this.node.parent.destroy();
    }
}


