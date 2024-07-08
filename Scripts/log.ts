import { _decorator, Button, Component, director, EditBox, Node } from 'cc';
const { ccclass, property } = _decorator;

class user{
    Account:string;
    Password:string;
    save:number;
}
@ccclass('log')
export class log extends Component {
    @property(EditBox)
    account:EditBox;
    @property(EditBox)
    password:EditBox;

    start() {
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
            let _user:user=new user();
            _user.Account=_account;
            _user.Password=_pwd;
            _user.save=0;
            let json=JSON.stringify(_user);
            localStorage.setItem(_account,json);//不存在则创建新账户
            director.loadScene('select');
        }
        else
        {
            console.log("found!");
            let _user2: user =Object.assign(new user(),JSON.parse(result));
            if(_user2.Password!=_pwd)
                console.log("Password Error!");
            else
            {
                console.log("Login Success!");
                director.loadScene('select');
            }//找到账户，检查密码
            }
        }
}


