import { _decorator, Component, Node, SystemEvent ,systemEvent,macro, director, EventKeyboard} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('esc')
export class esc extends Component {
    start() {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    update(deltaTime: number) {
        
    }
    onKeyDown(event: EventKeyboard){
        if(event.keyCode==macro.KEY.escape)
        {
            console.log('esc');
            director.loadScene('scene-2d-001');
        }
    }
}


