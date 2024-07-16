import { _decorator, Component, Node,AudioSource ,Button, director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('freemode')
export class freemode extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;
    start() {
        this.node.on(Button.EventType.CLICK, this.free, this);
    }

    update(deltaTime: number) {
        
    }
    free(){
        this.clickAudio.playOneShot(this.clickAudio.clip, 1);
        director.loadScene('freemode');
    }
}


