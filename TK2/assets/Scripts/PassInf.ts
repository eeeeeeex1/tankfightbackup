import { _decorator, Component, director, Node } from 'cc';
import { log } from './log';
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

@ccclass('PassInf')
export class PassInf extends Component {
    CurrentUser:user;
    start() {
        director.addPersistRootNode(this.node);//设置常驻节点存放用户信息
        
    }

    update(deltaTime: number) {
        if(this.CurrentUser!=null)
        {
            let RegSet:user[]=Object.assign(new Array(),JSON.parse(localStorage.getItem('RegSet')));
            for(const item of RegSet)
            {
                if(item.Account==this.CurrentUser.Account)
                {
                    this.CurrentUser=item;
                }
            }
        }
    }
}


