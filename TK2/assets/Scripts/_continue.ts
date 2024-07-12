import { _decorator, Button, Component, director, Node ,AudioSource} from 'cc';
import { pause } from './pause';
const { ccclass, property } = _decorator;

@ccclass('_continue')
export class _continue extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;
    start() {
        this.node.on(Button.EventType.CLICK, this.continue, this);
    }

    update(deltaTime: number) {
        
    }
    continue(){
            this.node.parent.parent.getComponent(pause).status=0;
            this.clickAudio.playOneShot(this.clickAudio.clip, 1);
            director.resume();
            this.node.parent.destroy();
    }
}


