import { _decorator, Component, Node,director } from 'cc';
import { PlayerController0 } from './tank0'; // 确保正确引入 PlayerController0 类
import { PlayerController1 } from './tank1'; // 确保正确引入 PlayerController0 类
const { ccclass, property } = _decorator;

@ccclass('monitor')
export class tankdestroy extends Component {
playercontroller0:PlayerController0;
playercontroller1:PlayerController1;

protected start(): void {
    this.playercontroller0=this.node.getComponentInChildren(PlayerController0);
    this.playercontroller1=this.node.getComponentInChildren(PlayerController1);
    director.preloadScene('victory');
}

    update(deltaTime: number) {

    if(this.playercontroller0.tanklife==0||this.playercontroller1.tanklife==0){
    this.endsence();
     }
}

   private endsence(){
    console.log('游戏结束');
    director.loadScene('victory');
   }

}