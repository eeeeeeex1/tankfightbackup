import { _decorator, Component, Node ,Button, director,AudioSource} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('l1e')
export class l1e extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;
    start() {
        this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
    }

    update(deltaTime: number) {
        
    }
    loadSinglePlayerScene(){
        this.clickAudio.playOneShot(this.clickAudio.clip, 1);
        director.loadScene('alonemap2-difficult');
    }
}


