import { _decorator, Button, Component, director, EditBox, Node } from 'cc';
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

    presentAccout:user;
    start() {
        this.node.on(Button.EventType.CLICK, this.checkAccount, this);
        director.addPersistRootNode(this.node);
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
            this.presentAccout.difficulty=0
            let json=JSON.stringify(this.presentAccout);
            localStorage.setItem(_account,json);//不存在则创建新账户
            director.loadScene('select');
        }
        else
        {
            console.log("found!");
            this.presentAccout =Object.assign(new user(),JSON.parse(result));
            if(this.presentAccout.Password!=_pwd)
                console.log("Password Error!");
            else
            {
                console.log("Login Success!");
                director.loadScene('select');
            }//找到账户，检查密码
            }
        }
}


