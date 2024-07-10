import { _decorator, Button, Component, director, EditBox, Node } from 'cc';
import { PassInf } from './PassInf';
const { ccclass, property } = _decorator;

class user{
    Account:string;
    Password:string;
    save:number;
    difficulty:number;
    time:number;
}
@ccclass('log')
export class log extends Component {
    @property(EditBox)
    account:EditBox;
    @property(EditBox)
    password:EditBox;
    private RegSet: string[]=new Array;//注册索引表
    presentAccout:user;
    start() {
        if(localStorage.getItem('RegSet')==null)
            {
                let json=JSON.stringify(this.RegSet);
                localStorage.setItem('RegSet',json);
            }//创建注册表
        this.node.on(Button.EventType.CLICK, this.checkAccount, this);
        
    }

    update(deltaTime: number) {
        
    }
    checkAccount(){
        let _account=this.account.string;
        let _pwd=this.password.string;//获取输入的账户和密码
        if(_account.length==0||_pwd.length==0)
            return;
        console.log(_account);
        let result:string=localStorage.getItem(_account);//检测是否存在账户
        
        if(result==null)
        {
            console.log("No Account!Create New Account");
            this.presentAccout=new user();
            this.presentAccout.Account=_account;
            this.presentAccout.Password=_pwd;
            this.presentAccout.save=0;
            this.presentAccout.difficulty=0;
            this.presentAccout.time=0;
            let json=JSON.stringify(this.presentAccout);
            localStorage.setItem(_account,json);//不存在则创建新账户
            this.RegSet=Object.assign(new Array(),JSON.parse(localStorage.getItem('RegSet')));
            this.RegSet.push(_account);
            let _json=JSON.stringify(this.RegSet);
            localStorage.setItem('RegSet',_json);//将账户加入注册表
            director.getScene().getChildByName('PassNode').getComponent(PassInf).CurrentUser=this.presentAccout;//储存当前用户信息到常驻节点
            director.loadScene('select');
        }
        else
        {
            console.log("found!");
            this.RegSet=Object.assign(new Array(),JSON.parse(localStorage.getItem('RegSet')));
            let i:number;
            for(i=0;i<this.RegSet.length;i++)
            {
                if(this.RegSet[i]==_account)
                    break;
            }
            if(i==this.RegSet.length)
            {
                this.RegSet.push(_account);
                let _json=JSON.stringify(this.RegSet);
                localStorage.setItem('RegSet',_json);//将账户加入注册表，防止账户遗漏
            }
            this.presentAccout =Object.assign(new user(),JSON.parse(result));
            if(this.presentAccout.Password!=_pwd)
                console.log("Password Error!");
            else
            {
                console.log("Login Success!");
                director.getScene().getChildByName('PassNode').getComponent(PassInf).CurrentUser=this.presentAccout;
                director.loadScene('select');
            }//找到账户，检查密码
            }
        }
}


