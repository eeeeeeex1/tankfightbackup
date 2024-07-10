import { _decorator, Component, Node, Button, director } from 'cc';
import { log } from './log';
import { PassInf } from './PassInf';
const { ccclass, property } = _decorator;
class user{
    Account:string;
    Password:string;
    save:number;
    difficulty:number;
    time:number;
}

@ccclass('SceneSwitcher')
export class SceneSwitcher extends Component {
    CurrentUser:user;
    RegSet:string[];
    start() {
        // 绑定按钮点击事件,传递存档参数
        this.RegSet=Object.assign(new Array(),JSON.parse(localStorage.getItem('RegSet')));
        for(const admin of this.RegSet)
        {
            if(admin=='nmmm')
            {
                console.log('success!')
                break;
            }
        }
        this.CurrentUser=director.getScene().getChildByName('PassNode').getComponent(PassInf).CurrentUser;
        this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
    }

    loadSinglePlayerScene() {
        if(this.CurrentUser.save==0)
        director.loadScene('single'); // 使用你的单人闯关场景名称
        else
        director.loadScene('alonemap2');
    }
}