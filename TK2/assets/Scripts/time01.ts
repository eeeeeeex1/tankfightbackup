import { _decorator, Component, Node ,find, director} from 'cc';
import { background } from '../text/background';
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
@ccclass('time01')
export class time01 extends Component {
    startTime:number;
    endTime:number;
    start() {
        this.startTime=Date.now();
    }

    update(deltaTime: number) {
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
            if(RegSet[i].d1time==0)
            RegSet[i].d1time=time/1000;
            else
            {
                if(RegSet[i].d1time>(time/1000))
                    RegSet[i].d1time=time/1000;
            }
            RegSet[i].save=1;
            let json=JSON.stringify(RegSet);
            localStorage.setItem('RegSet',json);
            director.loadScene('victory');
        }

        if(!find("Canvas/background/tank/playertank"))
                director.loadScene('return');
            
    }

}

