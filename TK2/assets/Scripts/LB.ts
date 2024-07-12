import { _decorator, Button, Component, find, Input, instantiate, Node, Prefab ,AudioSource} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LB')
export class LB extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;
    @property(Prefab)
    SLB:Prefab;
    start() {
        this.node.on(Button.EventType.CLICK, this.LeaderBoard, this);
    }

    update(deltaTime: number) {
        
    }
    LeaderBoard(){
        this.clickAudio.playOneShot(this.clickAudio.clip, 1);
        if(!find('Canvas/SimpleLeaderBoard')&&!find('Canvas/HardLeaderBoard'))
        {
        let Board=instantiate(this.SLB);
        this.node.parent.addChild(Board);
        }
    }
}


