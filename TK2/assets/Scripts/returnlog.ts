import { _decorator, Button, Component, director, Node ,AudioSource} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('returnlog')
export class returnlog extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;
    start() {
         // 绑定按钮点击事件
       this.node.on(Button.EventType.CLICK, this.loadLogScene, this);
    }
   
    loadLogScene() {
        this.clickAudio.playOneShot(this.clickAudio.clip, 1);
        director.loadScene('LoginScene'); 
    }

    update(deltaTime: number) {
        
    }
}


