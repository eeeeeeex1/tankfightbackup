import { _decorator, Button, Component, director, Node,AudioSource } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('hard')
export class hard extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;
    start() {
        this.node.on(Button.EventType.CLICK, this.hardmode, this);
    }

    update(deltaTime: number) {
        
    }
    hardmode(){
        this.clickAudio.playOneShot(this.clickAudio.clip, 1);
        director.loadScene('alonemap0-difficult');
    }
}


