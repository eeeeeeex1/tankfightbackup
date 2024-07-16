import { _decorator, Component, Node,find,director,AudioSource } from 'cc';
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

@ccclass('time12')
export class time12 extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;
    startTime:number;
    endTime:number;
    start() {
        this.startTime=Date.now();
    }

    update(deltaTime: number) {
        if (!this.clickAudio.playing) {
            this.clickAudio.play();
        }
        if((!find("Canvas/background/tank/enemytank"))&&find("Canvas/background/tank/playertank"))
            {this.endTime=Date.now();
                let time=this.endTime-this.startTime;
                let Account=director.getScene().getChildByName('PassNode').getComponent(PassInf).CurrentUser.Account;
                let RegSet:user[]=Object.assign(new Array(),JSON.parse(localStorage.getItem('RegSet')));
                let i:number;
                for(i=0;i<RegSet.length;i++)
                {
                    if(RegSet[i].Account==Account)
                        break;
                }
                RegSet[i].d2time2=time/1000;
                RegSet[i].save=2;
                let json=JSON.stringify(RegSet);
                localStorage.setItem('RegSet',json);
                this.scheduleOnce(() => {
                    director.loadScene('alonemap3-difficult');
                }, 3);
            }
    
            if(!find("Canvas/background/tank/playertank"))
                    director.loadScene('return');
        
    }
}


