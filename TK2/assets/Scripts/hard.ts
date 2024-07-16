import { _decorator, Button, Component, director, Node,AudioSource } from 'cc';
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
        let Account=director.getScene().getChildByName('PassNode').getComponent(PassInf).CurrentUser.Account;
        let RegSet:user[]=Object.assign(new Array(),JSON.parse(localStorage.getItem('RegSet')));
        for(const item of RegSet)
        {
            if(item.Account==Account)
            {
                item.difficulty=2;
                break;
            }
        }
        let json=JSON.stringify(RegSet);
        localStorage.setItem('RegSet',json);
        director.loadScene('alonemap1-difficult');
    }
}


