import { _decorator, Component, director, Node, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Loading')
export class Loading extends Component {
    @property(Node)
    ProImage:Node;

    time:number;
        //取进度条
    _name:string;
    start() {
        this.ProImage.setScale(0,1);
        this.time=0;
        localStorage.setItem("name","sss");
        localStorage.getItem("name");
    }

   //规定进度条百分比为0—1

    update(deltaTime: number) {
        if(this.time>=1)
            this.time=1;
        else
        this.time+=deltaTime/4;//60帧4秒
        this.ProImage.setScale(this.time,1);
        if(this.ProImage.scale.x==1)
            director.loadScene('BeginScene');//加载完毕时切入登录界面
    }


}


