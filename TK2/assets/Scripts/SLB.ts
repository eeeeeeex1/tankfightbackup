import { _decorator, Component, Node } from 'cc';
import { Label } from 'cc';
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
@ccclass('SLB')
export class SLB extends Component {
    RegSet:user[];
    start() {
        this.RegSet=Object.assign(new Array(),JSON.parse(localStorage.getItem('RegSet')));
        this.RegSet=this.RegSet.sort((n1,n2)=>{return n1.d1time-n2.d1time})
        for(let i=0;i<this.RegSet.length;i++)
        {
            if(this.RegSet[i].d1time!=0)
            this.getComponent(Label).string+=this.RegSet[i].Account+'          '+this.RegSet[i].d1time+'\n';
        }
    }

    update(deltaTime: number) {
        
    }
}


