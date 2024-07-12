import { _decorator, Button, Component, director, Node ,AudioSource} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('returnselect')
export class returnselect extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;
    start() {
        this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
    }

    update(deltaTime: number) {
        
    }
    loadSinglePlayerScene()
    {
        this.clickAudio.playOneShot(this.clickAudio.clip, 1);
        director.resume();
        director.loadScene('select');
    }
}


