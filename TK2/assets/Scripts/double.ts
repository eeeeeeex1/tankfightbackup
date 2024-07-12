import { _decorator, Button, Component, director, Node ,AudioSource} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('double')
export class double extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;
    start() {
        this.node.on(Button.EventType.CLICK, this.loadDoublePlayerScene, this);
    }

    loadDoublePlayerScene() {
        this.clickAudio.playOneShot(this.clickAudio.clip, 1);
        director.loadScene('doublemap0');
    }

    update(deltaTime: number) {
        
    }
}


