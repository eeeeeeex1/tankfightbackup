import { _decorator, Component, Node ,find,director,AudioSource} from 'cc';
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
@ccclass('time03')
export class time03 extends Component {
    @property(AudioSource)
    private clickAudio: AudioSource = null;
    startTime:number;
    endTime:number;
    start() {
        this.startTime=Date.now();//记录开始时间
    }

    update(deltaTime: number) {
        if (!this.clickAudio.playing) {
            this.clickAudio.play();
        }
        if((!find("Canvas/background/tank/enemytank"))&&find("Canvas/background/tank/playertank"))//检测是否击杀所有敌人并存活
        {this.endTime=Date.now();
            let time=this.endTime-this.startTime;//计算通关时间
            let Account=director.getScene().getChildByName('PassNode').getComponent(PassInf).CurrentUser.Account;//获取当前用户
            let RegSet:user[]=Object.assign(new Array(),JSON.parse(localStorage.getItem('RegSet')));
            let i:number;
            for(i=0;i<RegSet.length;i++)
            {
                if(RegSet[i].Account==Account)
                    break;
            }
            RegSet[i].d1time1=time/1000;
            RegSet[i].save=1;//存储通关记录
            let json=JSON.stringify(RegSet);
            localStorage.setItem('RegSet',json);
            this.scheduleOnce(() => {
                director.loadScene('alonemap2');
            }, 3);
            
        }

        if(!find("Canvas/background/tank/playertank"))//若玩家被击杀则返回
                director.loadScene('return');
            
    }
}


