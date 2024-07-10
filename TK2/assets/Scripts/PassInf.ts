import { _decorator, Component, director, Node } from 'cc';
import { log } from './log';
const { ccclass, property } = _decorator;
class user{
    Account:string;
    Password:string;
    save:number;
    difficulty:number;
    time:number;
}

@ccclass('PassInf')
export class PassInf extends Component {
    CurrentUser:user;
    start() {
        director.addPersistRootNode(this.node);//设置常驻节点存放用户信息
        
    }

    update(deltaTime: number) {
        
    }
}


