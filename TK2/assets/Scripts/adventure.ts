import { _decorator, Component, Node, Button, director ,AudioSource} from 'cc';
import { log } from './log';
import { PassInf } from './PassInf';
const { ccclass, property } = _decorator;
class user{
    Account:string;
    Password:string;
    save:number;
    difficulty:number;
    d1time1:number=0;
    d1time2:number=0;
    d1time3:number=0;
    d1time:number=0;
    d2time1:number=0;
    d2time2:number=0;
    d2time3:number=0;
    d2time:number=0;
}
@ccclass('adventure')
export class adventure extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;

    CurrentUser:user;
    start() {
        // 绑定按钮点击事件,传递存档参数
        this.CurrentUser=director.getScene().getChildByName('PassNode').getComponent(PassInf).CurrentUser;
        this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
    }

    loadSinglePlayerScene() {
        this.clickAudio.playOneShot(this.clickAudio.clip, 1);
        if(this.CurrentUser.save!=0)
        director.loadScene('single'); //有存档则进入继续游戏界面
        else
        director.loadScene('single1');//没有则选择游戏模式
    }
}

