import { _decorator, Button, Component, director, Node ,AudioSource} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('easy')
export class easy extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;
    start() {
        this.node.on(Button.EventType.CLICK, this.easymode, this);
    }

    update(deltaTime: number) {
        
    }
    easymode(){
        this.clickAudio.playOneShot(this.clickAudio.clip, 1);
        director.loadScene('alonemap0');
    }
}


