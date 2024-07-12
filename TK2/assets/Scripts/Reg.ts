import { _decorator, Component, Node,Button ,EditBox,director, Prefab, instantiate} from 'cc';
import { log } from './log';
import { PassInf } from './PassInf';
const { ccclass, property } = _decorator;
class user{
    Account:string;
    Password:string;
    save:number;
    difficulty:number;
    d1time1:number;
    d1time2:number;
    d1time3:number;
    d1time:number;
    d2time1:number;
    d2time2:number;
    d2time3:number;
    d2time:number;
    constructor(){
        this.d1time=0;
        this.d2time=0;
    }
}
@ccclass('Reg')
export class Reg extends Component {
    @property(EditBox)
    account:EditBox;
    @property(EditBox)
    password:EditBox;
    @property(Prefab)
    AccountExist:Prefab;

    newAccount:user
    start() {
        this.node.on(Button.EventType.CLICK, this.reg, this);
    }

    update(deltaTime: number) {
        
    }
    reg(){
        let _account=this.account.string;
        let _pwd=this.password.string;//获取输入的账户和密码
        if(_account.length==0||_pwd.length==0)
            return;
        this.newAccount=new user();
        this.newAccount.Account=_account;
        this.newAccount.Password=_pwd;
        this.newAccount.save=0;
        this.newAccount.difficulty=0;
        let RegSet=Object.assign(new Array(),JSON.parse(localStorage.getItem('RegSet')));
        for(const item of RegSet)
        {
            if(item.Account==_account)
            {
                let AccountExist=instantiate(this.AccountExist);
                this.node.addChild(AccountExist);
                this.scheduleOnce(() => {
                    this.node.getChildByName('AccountExist').destroy();
                }, 3);
                return;
            }
        }
        RegSet.push(this.newAccount);
        let _json=JSON.stringify(RegSet);
        localStorage.setItem('RegSet',_json);//将账户加入注册表
        director.getScene().getChildByName('PassNode').getComponent(PassInf).CurrentUser=this.newAccount;//储存当前用户信息到常驻节点
        director.loadScene('select');
    }
}


