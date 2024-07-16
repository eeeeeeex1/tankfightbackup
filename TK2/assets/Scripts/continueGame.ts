import { _decorator, Component, Node ,director,Button,AudioSource} from 'cc';
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
@ccclass('continueGame')
export class continueGame extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;
    currentUser:user;
    start() {
        this.currentUser=director.getScene().getChildByName('PassNode').getComponent(PassInf).CurrentUser//获取当前用户
        this.node.on(Button.EventType.CLICK, this.Continue_Game, this);
    }

    update(deltaTime: number) {
        
    }
    Continue_Game(){
        this.clickAudio.playOneShot(this.clickAudio.clip, 1);
        if(this.currentUser.difficulty==1)
        {
            if(this.currentUser.save==1)
                director.loadScene('alonemap2');
            if(this.currentUser.save==2)
                director.loadScene('alonemap3');
        }
        else if(this.currentUser.difficulty==2)
        {
            if(this.currentUser.save==1)
                director.loadScene('alonemap2-difficult');
            if(this.currentUser.save==2)
                director.loadScene('alonemap3-difficult');
        }
    }//根据用户所选难度读档
}


