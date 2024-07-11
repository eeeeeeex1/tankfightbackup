import { _decorator, Button, Component, director, EditBox, Node } from 'cc';
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
@ccclass('log')
export class log extends Component {
    @property(EditBox)
    account:EditBox;
    @property(EditBox)
    password:EditBox;
    private RegSet: user[]=new Array;//注册索引表
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
        this.RegSet=Object.assign(new Array(),JSON.parse(localStorage.getItem('RegSet')));
        let i:number;
        let isFind:boolean=false;
        for(i=0;i<this.RegSet.length;i++)
        {
            if(this.RegSet[i].Account==_account)
            {
                isFind=true;
                break;
            }
        }
        //let result:string=localStorage.getItem(_account);//检测是否存在账户
        
        if(!isFind)
        {
            console.log("No Account!Create New Account");
            this.presentAccout=new user();
            this.presentAccout.Account=_account;
            this.presentAccout.Password=_pwd;
            this.presentAccout.save=0;
            this.presentAccout.difficulty=0;
            // let json=JSON.stringify(this.presentAccout);
            // localStorage.setItem(_account,json);//不存在则创建新账户
            //this.RegSet=Object.assign(new Array(),JSON.parse(localStorage.getItem('RegSet')));
            this.RegSet.push(this.presentAccout);
            let _json=JSON.stringify(this.RegSet);
            localStorage.setItem('RegSet',_json);//将账户加入注册表
            director.getScene().getChildByName('PassNode').getComponent(PassInf).CurrentUser=this.presentAccout;//储存当前用户信息到常驻节点
            director.loadScene('select');
        }
        else
        {
            console.log("found!");
            //this.presentAccout =Object.assign(new user(),JSON.parse(result));
            this.presentAccout=this.RegSet[i];
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


